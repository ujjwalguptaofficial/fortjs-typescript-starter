import { DefaultController } from "../../controllers/default_controller";
import { viewResult, Fort } from "fortjs";
import { createApp } from "../..";

describe('DefaultController', () => {
    let app: Fort;
    beforeAll(async () => {
        app = await createApp() as any;
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