import { Controller, defaultWorker, htmlResult, textResult, renderView, viewResult } from "fortjs";

export class DefaultController extends Controller {
    @defaultWorker()
    async default() {
        try {
            const result = await viewResult('controller:default,action:default');
            return result;
        } catch (ex) {
            console.log(ex);
            // handle exception and show user a good message.
            // save this ex in a file or db, so that you can know what's the issue and where
            const result = await textResult(`Our server is busy right now. Please try later.`);
            return result;
        }
    }
}