import {Request, Response} from 'express'
import { UserService } from '../services/UsersService'



class UsersController {

    async create(req:Request, res: Response): Promise<Response>{
        const {email} = req.body 

        const usersService = new UserService();

       const user =  await usersService.create(email)

       return res.json(user)
    }


    async listUsers(req:Request, res:Response):Promise<Response> {
        const userService = new UserService();

        const allUsers = await userService.listAllUsers();

        return res.json(allUsers)
    }

}

export {UsersController}