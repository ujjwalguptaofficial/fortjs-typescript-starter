import { App } from "./app";
import * as path from "path";

export const createApp = () => {
    const app = new App();
    return new Promise((res, rej) => {
        app.create({
            folders: [{
                alias: "/",
                path: path.join(__dirname, "../static")
            }]
        }).then(() => {
            res(app);
        }).catch(rej);
    });
};
if (process.env.NODE_ENV !== "test") {
    createApp().then(() => {
        console.log("Your fort is located at address - localhost:4000");
    }).catch(err => {
        console.error(err);
    });
}

