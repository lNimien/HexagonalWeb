import swaggerUi from "swagger-ui-express";
import { Router } from "express";

const swaggerDocument = 
{
    openapi: "3.0.0",
    info: {
        title: "Test User",
        version: "1.0.0",
    },
    paths: {
        "/api/users": {
            post: {
                summary: "Create a new user",
                requestBody: {
                    content: {
                        "application/json": { //todo: Not always necesary to be a json, but atm is more than fine
                            schema: {
                                type: "object",
                                properties: {
                                    name: { type: "string" },
                                    email: { type: "string" },
                                },
                                required: ["name", "email"],
                            },
                        },
                    },
                },
                responses: {
                    201: { description: "User created successfully" },
                },
            },
        },
    },
};

export const swaggerRouter = Router();
swaggerRouter.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
