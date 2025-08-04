import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';

export async function GET() {
  try {
    console.log('Testing database connection...');
    
    // Test MongoDB connection
    const { db } = await connectToDatabase();
    console.log('✅ Connected to database:', db.databaseName);
    
    // Test if we can query the users collection
    const usersCollection = db.collection('users');
    const userCount = await usersCollection.countDocuments();
    console.log('👥 Total users in database:', userCount);
    
    // List all collections
    const collections = await db.listCollections().toArray();
    const collectionNames = collections.map(c => c.name);
    console.log('📋 Collections:', collectionNames);
    
    return NextResponse.json({
      success: true,
      message: 'Database connection successful',
      database: db.databaseName,
      userCount,
      collections: collectionNames,
      mongoUri: process.env.MONGO_URI ? 'Set' : 'Not set',
      jwtSecret: process.env.JWT_SECRET ? 'Set' : 'Not set'
    });
    
  } catch (error) {
    console.error('❌ Database test failed:', error);
    
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      mongoUri: process.env.MONGO_URI ? 'Set' : 'Not set',
      jwtSecret: process.env.JWT_SECRET ? 'Set' : 'Not set'
    }, { status: 500 });
  }
}
