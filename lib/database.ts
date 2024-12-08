import { MongoClient } from 'mongodb'

export default async function database(): Promise<any> {
  const client = new MongoClient(process.env.MONGODB_URI as string)
  await client.connect()
  return client.db('42type')
}