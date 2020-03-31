import Framer from './Framer.js';
import { FramerComponent } from './Framer.js';
Framer.css('./framer_components/AppBar.css');
export default class MobileAppBar extends FramerComponent {
    init() {
        this.className = "MobileAppBar";
        for (let styleProperty of Object.keys(this.props.appBarStyle))
            this.style.setProperty(`--${styleProperty}`, this.props.appBarStyle[styleProperty]);
        let menu = Framer.createElement("i", { className: "material-icons" }, "menu");
        menu.addEventListener("click", this.props.onMenuClick);
        this.append(menu, Framer.createElement("h1", null, this.props.title));
    }
}
