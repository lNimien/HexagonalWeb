// src/application/ports/AuthServicePort.ts
import { User } from "../../domain/entities/User";

export interface AuthServicePort {
    authenticateUser(email: string, password: string): Promise<User | null>;
    generateAuthToken(user: User): Promise<string>;
}
