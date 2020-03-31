import Framer from './Framer.js';
import { FramerComponent } from './Framer.js';
Framer.css('./framer_components/Router.css');
export default class Router extends FramerComponent {
    init() {
        this.className = "Router";
    }
    display(component) {
        this.clear();
        this.append(component);
    }
    clear() {
        this.innerHTML = "";
    }
}
