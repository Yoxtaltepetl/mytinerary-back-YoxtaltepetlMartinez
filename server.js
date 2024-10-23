import express from "express";
import "dotenv/config.js";
import "./config/database.js";
import cors from "cors";
import morgan from "morgan";
import main from "./router/main.js";
import bad_request from "./middlewares/bad_request.js";
import error_handler from "./middlewares/error_handler.js";
import not_found_handler from "./middlewares/not_found_handler.js";


const server = express();
const PORT = process.env.PORT;
const ready = () => console.log("port: " + PORT);
server.use(express.json());
server.use(express.urlencoded({extended:true}));
server.use(cors());
server.use(morgan('dev'));
server.use('/api', main);
server.use(not_found_handler);
server.use(bad_request);

server.use(error_handler)

server.listen(PORT, ready);