import express,{ Express } from 'express';
import { Application, Response, Request } from 'express';
import axios from 'axios';

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send("Hello l'équipe");
});

app.listen(3000, () => {
  console.log('Server Express is Running');
});