import { Request, Response } from "express";
import User from "../entities/User";
import { validateCredential } from "../services/credentialService";
import { createUserService, findUserByCredentialId, getAllUsersService, getUserByIdService } from "../services/userService";

export const getAllUsers =async (req: Request, res: Response ): Promise<void> => {
    const users: User[] = await getAllUsersService();
    res.status(200).json(users)
};

export const getUserById =async (req: Request, res: Response ): Promise<void> => {
    const {id} = req.params;
    try {
        const foundUser: User = await getUserByIdService(Number(id));
        res.status(200).json(foundUser)
        
    } catch (error: any) {
        res.status(400).json({ message: error.message })
    }
};

export const register =async (req: Request, res: Response ): Promise<void> => {
    try {
        const {name, email, birthdate, nDni, username, password} = req.body;
        const newUser: User = await createUserService ({
            name, email, birthdate, nDni, username, password
        })
        res.status(200).json(newUser)
        
    } catch (error: any) {
        res.status(400).json({message: error.message})
    }
};

export const login =async (req: Request, res: Response ): Promise<void> => {
    const { username, password } = req.body
    try {
        const credential = await validateCredential({
            username, password
        });
        const user = await findUserByCredentialId(credential.id)
        res.status(200).json({login: true, user})
    } catch (error:any) {
        res.status(400).json({message: error.message})
    }
};