import express, { Request, Response } from 'express';

const server = express();

server.get('/', (req: Request, res: Response): Response => {
  console.log('Working');

  return res.send('Welcome');
});

server.listen(3333, (): void => {
  console.log('Server is running on port 3333');
});
