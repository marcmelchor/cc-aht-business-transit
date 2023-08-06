import { Request, Response } from 'express';

export const sinkData = async (req: Request, res: Response): Promise<Response> => {
  try {
    return res.send({message: req.body}).end();
  } catch (err: any) {
    console.log(err);
    return res.status(500).send({message: 'Error sinking data.'});
  }
}
