import Framer from './Framer.js';
import { FramerComponent } from './Framer.js';
Framer.css('./framer_components/Blocker.css');

export default class Blocker extends FramerComponent {

    init() {

        this.hidden = true;
        this.className = "Blocker";

    }

}