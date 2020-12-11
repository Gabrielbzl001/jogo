import { connectToDatabase } from "../../utils/dbConnect";

export default async function handler(req, res) {
  const {method} = req
  switch (method) {
      case 'GET':
        try {
          const { db } = await connectToDatabase();
          const respo = await db.collection("respostas").find({nome : req.query.nome}).toArray();
          const tema = await db.collection("temas").find({tema: req.query.tema}).toArray();
          let rest = tema[0].p.map(r => {return r})
          res.json({respo, rest});
        } catch (error) {
          res.status(400).json({ success: false })
        }
        break
      case 'POST':
        try {
          const { db } = await connectToDatabase();
          
          await db
            .collection("respostas")
            .insertOne(req.body)
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