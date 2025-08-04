import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { verifyToken } from '@/lib/jwt';

export async function POST(request: NextRequest) {
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

    // Parse request body
    const { message, date } = await request.json();

    // Validate required fields
    if (!message || !date) {
      return NextResponse.json(
        { error: 'Message and date are required' },
        { status: 400 }
      );
    }

    // Validate message length
    if (message.length > 280) {
      return NextResponse.json(
        { error: 'Message cannot exceed 280 characters' },
        { status: 400 }
      );
    }

    // Connect to database
    const { db } = await connectToDatabase();
    const todosCollection = db.collection('todos');

    // Check if todo already exists for this user and date
    const existingTodo = await todosCollection.findOne({
      userEmail: userPayload.email,
      date: date
    });

    if (existingTodo) {
      return NextResponse.json(
        { error: 'Todo already exists for this date. Use PUT request to update.' },
        { status: 409 }
      );
    }

    // Create new todo
    const newTodo = {
      userEmail: userPayload.email,
      userId: userPayload.userId,
      message: message.trim(),
      date: date,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await todosCollection.insertOne(newTodo);

    return NextResponse.json(
      {
        success: true,
        message: 'Todo saved successfully',
        todoId: result.insertedId.toString(),
        todo: {
          id: result.insertedId.toString(),
          message: newTodo.message,
          date: newTodo.date,
          createdAt: newTodo.createdAt,
          updatedAt: newTodo.updatedAt,
        }
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Save todo error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
