import { uuid } from 'uuidv4';




export default async function  handler(req, res) {

  if((req.method="POST")){
    const { email,company,phone, name, message } = req.body;

      const contactForm={
        id: uuid(),
        name,
        email,
        message,
        company,
        phone
  
      }
      res.status(201).json(contactForm);
      try {
        const response = await fetch("https://bakoor.devspace.krd/admin/public/api/contact/send", contactForm)
        console.log(contactForm);

      } catch (e) {
        console.log(e.message);
        console.log("fucked up");
       
      }

    }

}