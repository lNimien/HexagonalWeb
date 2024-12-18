import { UserService } from "../src/application/services/UserService"; // todo: i should always use user not User, prob in a long term change it into a relative route. 
import { UserRepository } from "../src/domain/repositories/userRepository"; 
import { User } from "../src/domain/entities/User";

class MockUserRepository implements UserRepository 
{
    private users: User[] = [];

    async save(user: User): Promise<User> {
        this.users.push(user);
        return user;
    }

    async findById(id: string): Promise<User | null> {
        return this.users.find(user => user.id === id) || null;
    }
}

describe("UserService", () => 
{
    it("should create a new user", async () => {
        const repo = new MockUserRepository();
        const service = new UserService(repo);

        const user = await service.createUser("Juan", "juan@example.com");

        expect(user.name).toBe("Juan");
        expect(user.email).toBe("juan@example.com");
    });
});
