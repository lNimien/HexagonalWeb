import { Router, Request, Response  } from "express";
import { UserService } from "../application/services/UserService";
import { UserRepositoryImpl } from "../infrastructure/adapters/UserRepositoryImpl";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { CreateUserDto } from "../application/dto/CreateUserDto";


const router = Router();
const userRepository = new UserRepositoryImpl();
const userService = new UserService(userRepository);

router.post(
    "/users",
    async (req: Request, res: Response): Promise<void> => {
        try {
            const dto = plainToClass(CreateUserDto, req.body as object);
            const errors = await validate(dto);

            if (errors.length > 0) {
                res.status(400).json({ errors });
                return;
            }

            const { name, email } = dto;
            const user = await userService.createUser(name, email);
            res.status(201).json(user);
        } catch (err) {
            res.status(500).json({ message: "Internal server error", error: err });
        }
    }
);

export default router;