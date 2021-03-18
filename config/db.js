
const mongoose = require('mongoose')
const assert = require('assert')
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
                poolSize: 20,
               // ssl: true,
                connectTimeoutMS: 100000
            })
        // assert.equal(null);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.error(err)
        process.exit(1);
    }
}

module.exports = connectDB  
/*
const { MongoClient } = require("mongodb");
const mongoose = require('mongoose')

// Connection URI
const uri = "mongodb+srv://thor123:thor123@cluster0.kp8ty.mongodb.net/storybooks?retryWrites=true&w=majority";

// Create a new MongoClient
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    // Connect the client to the server
    await client.connect();

    // Establish and verify connection
    await client.db("admin").command({ ping: 1 });
    console.log(`MongoDB Connected:`);
  } catch (err) {
      console.error(err);
  }  
  finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  } 
}
module.exports = run;
//run().catch(console.dir); */
