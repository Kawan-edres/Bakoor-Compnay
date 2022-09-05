import { uuid } from 'uuidv4';




export default async function  handler(req, res) {

  if((req.method="POST")){
    const { email,company,phone, name, message } = req.body;

      const newMessage={
        id: uuid(),
        name,
        email,
        message,
        company,
        phone
  
      }
      res.status(201).json(newMessage);

    }

}