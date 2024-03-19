import { AppDataSource } from "../config/data-source";
import Credential from "../entities/Credential";

interface createCredentialDto {
    username: string;
    password: string;
}

interface validateCredentialDto {
    username: string;
    password: string;
}

const credentialModel= AppDataSource.getRepository(Credential)

export const createCredential = async (createCredentialDto: createCredentialDto): Promise<Credential> => {
    const newCredential : Credential = credentialModel.create(createCredentialDto);
    await credentialModel.save(newCredential);
    return newCredential;
};


export const validateCredential =async (validateCredentialDto: validateCredentialDto): Promise<Credential> =>  {
     const {username, password } = validateCredentialDto;
     const foundCredential: Credential | null = await credentialModel.findOneBy({username})
     if(!foundCredential) throw Error("usuario no encontrado");
     if(password !== foundCredential.password) throw Error("Password incorrecto");
    return foundCredential;
}