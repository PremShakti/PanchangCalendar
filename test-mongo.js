// Test MongoDB connection
import { connectToDatabase } from '../lib/mongodb';

async function testConnection() {
  try {
    console.log('Testing MongoDB connection...');
    const { db, client } = await connectToDatabase();
    console.log('✅ Connected to database:', db.databaseName);
    
    // Test basic operations
    const collections = await db.listCollections().toArray();
    console.log('📊 Available collections:', collections.map(c => c.name));
    
    // Test inserting a dummy document
    const testCollection = db.collection('test');
    const testDoc = await testCollection.insertOne({ test: true, timestamp: new Date() });
    console.log('✅ Test document inserted:', testDoc.insertedId);
    
    // Clean up test document
    await testCollection.deleteOne({ _id: testDoc.insertedId });
    console.log('✅ Test document deleted');
    
    await client.close();
    console.log('✅ Connection closed');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    if (error instanceof Error) {
      console.error('Error message:', error.message);
    }
  }
}

testConnection();
