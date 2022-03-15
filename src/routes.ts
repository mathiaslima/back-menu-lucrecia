import { Router } from "express";

import { PostsCompanyController } from "./controllers/PostsCompanyController";
import { UsersController } from "./controllers/UsersController";

const routes = Router();

const postsCompanyController = new PostsCompanyController();
const usersController = new UsersController();

routes.post("/posts-company", postsCompanyController.create);
routes.get("/posts-company", postsCompanyController.showAll);
routes.post("/users", usersController.create);

export { routes };
