import { DefaultController } from "../../controllers/default_controller";
import { viewResult } from "fortjs";
import { App } from "../../app";
import * as path from "path";

describe('DefaultController', () => {
    let app: App;
    beforeAll((done) => {
        app = new App();
        app.create({
            folders: [{
                alias: "/",
                path: path.join(__dirname, "../static")
            }]
        });
        done();
    });

    it('index', async (done) => {
        const expectedResult = await viewResult('default/index.html', {
            title: 'FortJs'
        });
        const indexMethodOutput = await new DefaultController().index();
        expect(indexMethodOutput).toEqual(expectedResult);
        done();
    });

    afterAll(() => {
        return app.destroy();
    });
});