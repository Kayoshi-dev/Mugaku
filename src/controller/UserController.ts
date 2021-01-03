import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {User} from "../entity/User";
import {validate} from "class-validator";

export class UserController {


    static listAll = async (request: Request, response: Response) => {
        const userRepository = getRepository(User);

        const users = await userRepository.find({
            select: ["id", "username", "role"]
        });

        response.send(users)
    }

    static getOneById = async (request: Request, response: Response) => {
        const userRepository = getRepository(User);
        let user: User;

        try {
            user = await userRepository.findOneOrFail(request.params.id, {
                select: ["id", "username", "role"]
            });
        } catch (error) {
            response.status(404).send("User not found");
        }

        response.send(user);
    }

    static newUser = async (request: Request, response: Response) => {
        let { username, password, role } = request.body;
        let user = new User();
        user.username = username;
        user.password = password;
        user.role = role;

        const errors = await validate(user);
        if(errors.length > 0) {
            response.status(400).send(errors);
            return;
        }

        const userRepository = getRepository(User);

        user.hashPassword();

        try {
            await userRepository.save(user);
        } catch (e) {
            response.status(409).send("Username already in use");
            return;
        }

        response.status(201).send("User Created");
    }

    static editUser = async (request: Request, response: Response, next: NextFunction) => {
        const id = request.params.id;
        const { username, role } = request.body;

        const userRepository = getRepository(User);
        let user: User;

        try {
            user = await userRepository.findOneOrFail(id);
        } catch (e) {
            response.status(404).send("User not found");
            return;
        }

        user.username = username;
        user.role = role;

        const errors = await validate(user);
        if(errors.length > 0) {
            response.status(400).send(errors);
            return;
        }

        try {
            await userRepository.save(user);
        } catch (e) {
            response.status(409).send("Username already in use");
            return;
        }

        response.status(204).send();
    }

    static deleteUser = async (request: Request, response: Response, next: NextFunction) => {
        const id = request.params.id;

        const userRepository = getRepository(User);
        let user: User;

        try {
            user = await userRepository.findOneOrFail(id);
        } catch (error) {
            response.status(404).send("User not found");
            return;
        }
        await userRepository.delete(id);

        response.status(204).send();
    }
}

export default UserController;