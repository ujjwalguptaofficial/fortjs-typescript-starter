import {
    View,
    declareView
} from "eshtml";

// you can give any name but make sure its unique among all other views.
@declareView('controller:default,action:default')
export class DefaultView extends View {
    render(model: object) {
        return `<p>Welcome to my new awesome <b>fort</b>.</p>`;
    }
}