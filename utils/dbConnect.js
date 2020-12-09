import { MongoClient } from 'mongodb'

let cached = global.mongo
if (!cached) cached = global.mongo = {}

export async function connectToDatabase() {
  if (cached.conn) return cached.conn
  if (!cached.promise) {
    const conn = {}
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
    cached.promise = MongoClient.connect("mongodb+srv://gabriel:123@cluster0.h9xxk.mongodb.net/sample_mflix?retryWrites=true&w=majority", opts)
      .then((client) => {
        conn.client = client
        return client.db("sample_mflix")
      })
      .then((db) => {
        conn.db = db
        cached.conn = conn
      })
  }
  await cached.promise
  return cached.conn
}
