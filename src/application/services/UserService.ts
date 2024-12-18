import { User } from "../../domain/entities/User";
import { UserRepository } from "../../domain/repositories/userRepository";

export class UserService 
{
    constructor(private userRepository: UserRepository) {}

    async createUser(name: string, email: string): Promise<User> {
        const user = new User(Date.now().toString(), name, email);
        return this.userRepository.save(user);
    }
}
