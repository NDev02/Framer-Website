import Framer from './Framer.js';
import { FramerComponent } from './Framer.js';
Framer.css('./framer_components/AppBar.css');

export default class MobileAppBar extends FramerComponent {
    
    props: {
        title: "",
        appBarStyle: {
            background: "",
            foreground: ""
        },
        onMenuClick: () => {}
    }

    init() {
        
        this.className = "MobileAppBar";

        for(let styleProperty of Object.keys(this.props.appBarStyle))
            this.style.setProperty(`--${styleProperty}`, this.props.appBarStyle[styleProperty]);

        let  menu = <i className="material-icons">menu</i>;
        
        menu.addEventListener("click", this.props.onMenuClick);

        this.append(
            menu,
            <h1>{this.props.title}</h1>
        );

    }
    
}