import { UserModel } from "./UserModel";
import { User } from "../../domain/entities/User";
import { UserRepository } from "../../domain/repositories/userRepository";

export class UserRepositoryImpl implements UserRepository 
{


    async save(user: User): Promise<User> 
    {
        const createdUser = new UserModel({ name: user.name, email: user.email });
        await createdUser.save();
        return new User(createdUser.id, createdUser.name, createdUser.email);
    }

    async findById(id: string): Promise<User | null> 
    {
        const user = await UserModel.findById(id);
        if (!user) return null;
        return new User(user.id, user.name, user.email);
    }
}
