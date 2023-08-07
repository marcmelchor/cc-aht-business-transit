import { Request, Response } from 'express';
import { DatabaseError } from 'pg';
import { postBloodDonor } from '../queries';



export const sinkData = async (req: Request, res: Response): Promise<Response> => {
  console.log(req.body);
  try {
    await postBloodDonor(req.body);
    return res.status(200).json({message: 'OK'});
  } catch (err: DatabaseError | any) {
    return res.status(500).json({message: `Internal server error. ${err.message}`});
  }
}
