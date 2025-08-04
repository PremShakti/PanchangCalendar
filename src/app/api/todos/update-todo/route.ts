import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { verifyToken } from "@/lib/jwt";

export async function PUT(request: NextRequest) {
  try {
    // Get token from cookies to verify user
    const token = request.cookies.get("token")?.value;

    if (!token) {
      return NextResponse.json(
        { error: "Authentication required" },
        { status: 401 }
      );
    }

    // Verify token and get user info
    const userPayload = verifyToken(token);
    if (!userPayload) {
      return NextResponse.json(
        { error: "Invalid authentication token" },
        { status: 401 }
      );
    }

    // Parse request body
    const { message, date } = await request.json();

    // Validate required fields
    if (!message || !date) {
      return NextResponse.json(
        { error: "Message and date are required" },
        { status: 400 }
      );
    }

    // Validate message length
    if (message.length > 280) {
      return NextResponse.json(
        { error: "Message cannot exceed 280 characters" },
        { status: 400 }
      );
    }

    // Connect to database
    const { db } = await connectToDatabase();
    const todosCollection = db.collection("todos");

    // Check if todo exists for this user and date
    const existingTodo = await todosCollection.findOne({
      userEmail: userPayload.email,
      date: date,
    });

    if (!existingTodo) {
      return NextResponse.json(
        {
          error:
            "Todo not found for this date. Use POST request to create new todo.",
        },
        { status: 404 }
      );
    }

    // Update the todo
    const updateResult = await todosCollection.updateOne(
      {
        userEmail: userPayload.email,
        date: date,
      },
      {
        $set: {
          message: message.trim(),
          updatedAt: new Date(),
        },
      }
    );

    if (updateResult.matchedCount === 0) {
      return NextResponse.json({ error: "Todo not found" }, { status: 404 });
    }

    // Get the updated todo
    const updatedTodo = await todosCollection.findOne({
      userEmail: userPayload.email,
      date: date,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Todo updated successfully",
        todo: {
          id: updatedTodo?._id.toString(),
          message: updatedTodo?.message,
          date: updatedTodo?.date,
          createdAt: updatedTodo?.createdAt,
          updatedAt: updatedTodo?.updatedAt,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Update todo error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
