import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { verifyToken } from '@/lib/jwt';

export async function GET(request: NextRequest) {
  try {
    // Get token from cookies to verify user
    const token = request.cookies.get('token')?.value;
    
    if (!token) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    // Verify token and get user info
    const userPayload = verifyToken(token);
    if (!userPayload) {
      return NextResponse.json(
        { error: 'Invalid authentication token' },
        { status: 401 }
      );
    }

    // Get date from URL search params
    const { searchParams } = new URL(request.url);
    const date = searchParams.get('date');

    if (!date) {
      return NextResponse.json(
        { error: 'Date parameter is required' },
        { status: 400 }
      );
    }

    // Connect to database
    const { db } = await connectToDatabase();
    const todosCollection = db.collection('todos');

    // Find todo for this user and date
    const todo = await todosCollection.findOne({
      userEmail: userPayload.email,
      date: date
    });

    if (!todo) {
      return NextResponse.json(
        {
          success: true,
          message: 'No todo found for this date',
          todo: null
        },
        { status: 200 }
      );
    }

    // Return the todo
    return NextResponse.json(
      {
        success: true,
        message: 'Todo retrieved successfully',
        todo: {
          id: todo._id.toString(),
          message: todo.message,
          date: todo.date,
          createdAt: todo.createdAt,
          updatedAt: todo.updatedAt,
        }
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Get todo error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
