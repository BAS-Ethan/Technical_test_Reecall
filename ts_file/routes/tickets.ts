import { Router, Request, Response } from "express";
import { Client } from "@hubspot/api-client";
import { hubspotClient } from "../index";

export const tickets = Router();
async function getinfo() {
    const data = await hubspotClient.crm.tickets.getAll();
    return data;
}

async function listenInfo(res: Response) {
    const data = await getinfo();
    res.json(data);
}

tickets.get('/', (req: Request, res: Response) =>{
    const data = listenInfo(res);
})
