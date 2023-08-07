import { Request, Response } from 'express';
import { QueryResult } from 'pg';

import { sinkData } from '../../controllers/sink.controller';
import * as queries from '../../queries';


const req: Request = {} as Request;
const res: Response = {} as Response;
res.status = jest.fn().mockReturnValue(res);
res.json = jest.fn().mockReturnValue(res);
const response: QueryResult = {
  rows: [{ id: 1, name: 'John Doe' }],
  command: '',
  rowCount: 1,
  oid: 0,
  fields: []
};

describe('sinkController', (): void => {
  it('should return a 200 status code', async () => {
    jest.spyOn(queries, 'postBloodDonor').mockResolvedValue(response);
    await sinkData(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
  });

  it('should return a JSON object with rows from the database', async () => {
    jest.spyOn(queries, 'postBloodDonor').mockResolvedValue(response)
    await sinkData(req, res);
    expect(res.json).toHaveBeenCalledWith({ message: 'OK' });
  });

  it('should return a 500 status code if there is a DatabaseError', async () => {
    const error: Error = new Error('Internal server error. Database error');
    jest.spyOn(queries, 'postBloodDonor').mockRejectedValue(error);
    await sinkData(req, res);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ message: `Internal server error. ${error.message}` });
  });

  it('should return a 500 status code if there is an unknown error', async () => {
    const error: Error = new Error('Unknown error');
    jest.spyOn(queries, 'postBloodDonor').mockRejectedValue(error);
    await sinkData(req, res);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ message: `Internal server error. ${error.message}` });
  });
});