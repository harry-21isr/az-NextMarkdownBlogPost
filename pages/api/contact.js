import { connectDatabase, insertDocument } from "../../helpers/db-util";

const handler = async (req, res) => { 
  
  const {email, name, text} = req.body;

  if(!email.includes('@') || !name || !text){
    res.status(422).json({message: 'invalid form completion'})
    return;
  }

  let client;
  try {
    client = await connectDatabase();
    
  } catch (error) {
    client?.close();
    res.status(501).json({message: `error connecting to db: ${error.message}`});
    return;
  }

  let response;
  try { /* contact = mongo db */
    response = await insertDocument(client, 'contact', {email, name, text})
  } catch (error) {
    client?.close();
    res.status(500).json({message: `error inserting data: ${error.message}`});
    return;
  }

  console.log(response)
  res.status(201).json({message: `added data sucessfully. msg: ${response.insertedId}`})
  client?.close();
  
 }

 export default handler;