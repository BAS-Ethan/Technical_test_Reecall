import { Router, Request, Response } from "express";
import { Client } from "@hubspot/api-client";
import { hubspotClient } from "../index";

export const contacts = Router();
async function getinfo() {
    const data = await hubspotClient.crm.contacts.getAll();
    return data;
}

async function listenInfo(res: Response) {
    const data = await getinfo();
    res.json(data);
}

contacts.get('/', (req: Request, res: Response) =>{
    const data = listenInfo(res);
})
