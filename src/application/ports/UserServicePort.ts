import { User } from "../../domain/entities/User";

export interface UserServicePort 
{
    createUser(name: string, email: string): Promise<User>;
    getUser(id: string): Promise<User | null>;
}