import { Router, Request, Response } from "express";
import { Client } from "@hubspot/api-client";
import { hubspotClient } from "./index";

export const myRouteur = Router();
async function getinfo() {
    const data = await hubspotClient.crm.companies.getAll();
    return data;
}

async function listenInfo(res: Response) {
    const data = await getinfo();
    res.json(data);
}

myRouteur.get('/', (req: Request, res: Response) =>{
    const data = listenInfo(res);
})
