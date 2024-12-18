// src/application/ports/UserRepositoryPort.ts
import { User } from "../../domain/entities/User";

export interface UserRepositoryPort 
{
    save(user: User): Promise<User>;
    findById(id: string): Promise<User | null>;
    findAll(): Promise<User[]>;
}
