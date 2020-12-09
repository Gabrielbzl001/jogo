import { connectToDatabase } from "../../utils/dbConnect";

export default async function handler(req, res) {
    const {method} = req
    switch (method) {
        case 'GET':
          try {
            const { db } = await connectToDatabase();

            const movies = await db
              .collection("respostas")
              .find({nome : req.query.nome})
              .toArray();
                res.json(movies);
             console.log(movies)
          } catch (error) {
            res.status(400).json({ success: false })
          }
          break
        case 'POST':
          try {
            const { db } = await connectToDatabase();

            const movies = await db
              .collection("respostas")
              .insertOne(req.body)
             console.log("funfou")
            res.status(201).json({ success: true })
          } catch (error) {
            res.status(400).json({ success: false })
          }
          break
        default:
          res.status(400).json({ success: false })
          break
      }   
}