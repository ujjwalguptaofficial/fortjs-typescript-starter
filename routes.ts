import { DefaultController } from "./controllers/default_controller";
import { ParentRoute } from "fortjs";

export const routes: ParentRoute[] = [{
    path: "/default",
    controller: DefaultController
}];