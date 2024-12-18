import express from "express";
import router from "./http/routes";
import { connectToDatabase } from "./infrastructure/config/database";
import { errorHandler } from "./http/middleware/errorHandler";
import { swaggerRouter } from "./http/swagger";


// todo: limiter would be nice avoiding multiples fetch from others ip's
// todo: i must implement webSocket io, in order to refresh some data from client, but atm not necesary


const app = express();
app.use(express.json());
app.use("/api", router);
app.use(errorHandler);
app.use(swaggerRouter);


const startServer = async () => 
{
    await connectToDatabase();
    app.listen(3000, () => {
        console.log("Server running on http://localhost:3000"); //todo: i may change this into a relative port
    });
};

//todo: not so practically to use it as here
startServer();


