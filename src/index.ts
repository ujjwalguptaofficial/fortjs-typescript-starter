import { Fort } from 'fortjs';
import { routes } from './routes';
import { FortViewEngine } from 'eshtml';

export * from './views/index';

export class App extends Fort {
    constructor() {
        super();
        this.routes = routes
    }
}

new App().create({
    defaultPath: "default",
    viewEngine: FortViewEngine
});

console.log("Your fort is located at address - localhost:4000");