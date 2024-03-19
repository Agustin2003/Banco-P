import { AppDataSource } from "../config/data-source";
import Credential from "../entities/Credential";
import User from "../entities/User";
import { createCredential } from "./credentialService";

interface createUserDto{
    name: string;
    email: string;
    birthdate: string;
    nDni: string;
    username: string;
    password: string;
};

export const userModel= AppDataSource.getRepository(User);


export const getAllUsersService =async (): Promise<User[]> => {
    const allUsers: User[] = await userModel.find({
        relations: { appointments: true }
    });
    return allUsers;
}


export const getUserByIdService =async (id: number): Promise<User> => {
    const foundUser: User | null = await userModel.findOne({
        where: { id }, relations: ["appointments"]
    });
    if (!foundUser) throw Error("usuario no encontrado");
    return foundUser;
};


export const createUserService = async (createUserDto: createUserDto): Promise<User> => {
    const newCredential: Credential = await createCredential({
        username: createUserDto.username,
        password: createUserDto.password
    });

    const newUser: User = userModel.create(createUserDto);
    await userModel.save(newUser);

    newUser.credential = newCredential;
    await userModel.save(newUser);

    return newUser;
};

export const findUserByCredentialId = async (
    credentialId: number
): Promise<User | null> =>{
    const foundUser: User | null = await userModel.findOneBy({
        credential: { id: credentialId }
    });
    return foundUser
}