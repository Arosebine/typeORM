import { getFromContainer } from "class-validator";
import { Request, Response } from "express";
import { getRepository } from "typeorm";
import AppDataSource from "../data-source";
import { User } from "../entity/User";


class UserController {
    static userPost = async (req: Request, res: Response) => {
        const newUser = {            
            firstName: req.body.firstName,
            lastName: req.body.lastName, 
            age: req.body.age

        }

        const user = AppDataSource.getRepository(User).create(newUser);
        const result = await AppDataSource.getRepository(User).save(user);
        return res.json(result);
    };
    
    
    static getOneUser = async (req: Request, res: Response) =>{
        const users = await AppDataSource.getRepository(User);
        return res.json(users);
    };


    static updateUser = async (req: Request, res: Response) => {
        const id = req.body.id
        const updateUser = await AppDataSource.getRepository(id);
        if(updateUser){

        }
        
    };
};



export default UserController;