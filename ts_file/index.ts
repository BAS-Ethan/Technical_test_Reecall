import express,{ Express } from 'express';
import { Application, Response, Request } from 'express';
import axios from 'axios';
import { Client } from "@hubspot/api-client";
import { companies } from './routes/companies';
import { contacts } from './routes/contact';
import { tickets } from './routes/tickets'
import { deals } from './routes/deals'

const app: Express = express();
export const hubspotClient = new Client({ accessToken: 'pat-na1-e9a27d01-43f8-4e0c-b158-192a5d0cf71c' });

app.get('/', (req: Request, res: Response) => {
  res.send("Hello l'équipe");
});

app.use('/companies', companies);
app.use('/contacts', contacts);
app.use('/tickets', tickets);
app.use('/deals', deals);

app.listen(3000, () => {
  console.log('Server Express is Running');
});