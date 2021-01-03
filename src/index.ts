import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as helmet from "helmet";
import * as cors from "cors";

import routes from "./routes/index";

createConnection().then(async connection => {

    // create express app
    const app = express();

    app.use(helmet());
    app.use(cors());
    app.use(express.json());

    app.use("/", routes)

    app.listen(3000);

    console.log("Server started");

}).catch(error => console.log(error));
