import { Request, Response } from 'express';

import { MessagesService } from '../services/MessagesService'

class MessagesController {
    async create(req: Request, res: Response): Promise<Response> {
        const { user_id, text, admin_id } = req.body;

        const messagesService = new MessagesService();


        const messages = await messagesService
            .create({ user_id, text, admin_id })
            
        return res.json(messages)
    }


    async showByUser(req:Request, res:Response): Promise<Response> {
        const { id } = req.params

        const messagesService = new MessagesService()


        const list = await messagesService.listByUser(id)

        return res.json(list)
    }

}


export { MessagesController }