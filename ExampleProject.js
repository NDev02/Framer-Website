import Framer from './framer_components/Framer.js';
import { FramerComponent } from './framer_components/Framer.js';
export default class MyComponent extends FramerComponent {
    init() {
        this.append(Framer.createElement("div", { className: "container" },
            Framer.createElement("div", { className: "section-center" },
                Framer.createElement("article", null,
                    Framer.createElement("h1", null, "Example Projects"),
                    Framer.createElement("p", null, "General Disclaimer: In case this has not been said enough times, this framework is still super early in development! As of writing this it is only 4 days old. That said the example projects, tutorials, and documentation may be on the light side. You can however download this website as an example project to play around with from the GitHub link found below, or if you download the GitHub repo the framework is on it will come with an example \"startup\" project right away."))),
            Framer.createElement("hr", { className: "varient" }),
            Framer.createElement("div", { className: "section-center" },
                Framer.createElement("article", null,
                    Framer.createElement("h1", null,
                        " ",
                        Framer.createElement("a", { target: "_blank", href: "https://github.com/Ndev02/Framer" }, "Startup Project")),
                    Framer.createElement("p", null, "When you go to download the files from github that include the framework code if you download the whole repository it will come with an already set up example project that you can get started right away with."))),
            Framer.createElement("hr", { className: "varient" }),
            Framer.createElement("div", { className: "section-center" },
                Framer.createElement("article", null,
                    Framer.createElement("h1", null,
                        " ",
                        Framer.createElement("a", { href: "https://github.com/Ndev02/Framer-Website" }, "This Website")),
                    Framer.createElement("p", null, "Visit the GitHub repo linked above and download the whole repo as a .zip file, this will serve as a pretty neat example project as this website was created using Framer. Pretty cool, right?!")))));
    }
}
