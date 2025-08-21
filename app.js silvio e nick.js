
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "https://cloud.mongodb.com/v2/689e2fcf0b79180239a20a1c#/metrics/replicaSet/689e31ad194b555f83b0e1fd/explorer/sample_mflix://<nickfeia@admin>:<silviolindo>@corintiasvsfamego.maxdjgm.mongodb.net/?retryWrites=true&w=majority&appName=corintiasvsfamego";


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    
    await client.connect();
    
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
 
    await client.close();
  }
}
run().catch(console.dir);
