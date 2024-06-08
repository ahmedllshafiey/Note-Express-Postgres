import { Router } from "express";
import IRouter from "./IRoutes";

abstract class Routes implements IRouter {
    public router: Router;
    constructor() {
        this.router = Router();
        this.routes();
    }
    abstract routes(): void;
}

export default Routes;