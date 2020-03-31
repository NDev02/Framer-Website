import Framer from './Framer.js';
import { FramerComponent } from './Framer.js';
Framer.css('./framer_components/NavigationDrawer.css');
export default class NavigationDrawer extends FramerComponent {
    constructor() {
        super(...arguments);
        this.props = {
            title: "",
            items: [],
            navStyle: {
                background: "",
                foreground: "",
                active: "",
                hover: "",
                transition: ""
            },
            state: "",
            blocker: null,
            router: null
        };
    }
    init() {
        this.className = "NavigationDrawer";
        for (let styleProperty of Object.keys(this.props.navStyle))
            this.style.setProperty(`--${styleProperty}`, this.props.navStyle[styleProperty]);
        this.append(Framer.createElement("h2", null, this.props.title));
        this.append(Framer.createElement("hr", null));
        this.append(Framer.createElement("ul", null, this.props.items.map(item => {
            if (item.href)
                return Framer.createElement("li", null,
                    Framer.createElement("a", { target: item.target, href: item.href }, item.label));
            else if (item.to)
                return Framer.createElement("li", null,
                    Framer.createElement("a", { to: item.to, onclick: this.navigateTo.bind(this) }, item.label));
        })));
        this.onPropertyChange("state", this.changeState);
        this.changeState("open", "close");
        window.addEventListener("resize", () => { this.changeState("open", "close"); });
    }
    navigateTo(event) {
        console.log(this);
        this.props.router.display(event.target.to);
    }
    changeState(newVal, oldVal) {
        switch (newVal) {
            case 'open':
                {
                    this.props.blocker.hidden = true;
                    if (this.classList.contains("close"))
                        this.classList.remove("close");
                    if (!this.classList.contains("open"))
                        this.classList.add("open");
                    if (Framer.isMobileSize()) {
                        this.props.blocker.hidden = false;
                        this.props.blocker.onclick = () => {
                            this.props.state = "close";
                        };
                    }
                }
                break;
            case 'close': {
                if (this.classList.contains("open"))
                    this.classList.remove("open");
                if (!this.classList.contains("close"))
                    this.classList.add("close");
                setTimeout(() => {
                    this.props.blocker.hidden = true;
                    this.style.display = "none";
                }, 0.2 * 1000);
            }
        }
    }
}
