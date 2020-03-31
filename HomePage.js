import Framer from './framer_components/Framer.js';
import { FramerComponent } from './framer_components/Framer.js';
export default class HomePage extends FramerComponent {
    init() {
        this.append(Framer.createElement("div", { className: "container" },
            Framer.createElement("div", { className: "section-left-focus" },
                Framer.createElement("article", null,
                    Framer.createElement("h1", null, "Framer"),
                    Framer.createElement("p", null, "A janky-ish, in-development, web-framework. I mainly developed this framework because I was bored during quarantine, but hey why not put it online \uD83E\uDD37\u200D\u2642\uFE0F. Don't expect it to work amazingly, and definitely don't expect it to work all the time. This project is currently not in a place I would recommend for distribution... Let's call this v0.0.1 beta.")),
                Framer.createElement("img", { className: "img logo", src: "./assets/Framer.svg" })),
            Framer.createElement("hr", { className: "varient" }),
            Framer.createElement("div", { className: "section-center" },
                Framer.createElement("article", null,
                    Framer.createElement("h1", null, "Basics"),
                    Framer.createElement("p", null, "Alright so the rules here are pretty simple. You have an application (FramerApp) that everything is rendered in and components (FramerComponents) that act as HTML elements but more manipulatable. FramerComponents extend the HTMLElement class and therefore inherit all those cool functions but you are also able to write your own and get them to work how you want with custom HTML Framer Components. Everything here is intended to be written in TypeScript (except for obviously the HTML and CSS) and everything works as modules - much like the many other web frameworks out there. Speaking of many other frameworks, there is support for JSX - hooray! \uD83C\uDF89 - so it is super easy to write your HTML inline with your typescript code just like you would with a framework like React."))),
            Framer.createElement("hr", { className: "varient" }),
            Framer.createElement("div", { className: "section-left-focus" },
                Framer.createElement("article", null,
                    Framer.createElement("h1", null, "Setup"),
                    Framer.createElement("p", null,
                        "First and foremost, make sure you have the ",
                        Framer.createElement("a", { target: "_blank", href: "https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html" }, "TypeScript"),
                        " Compiler installed on your development machine. If you have npm installed you can just run the command ",
                        Framer.createElement("code", null, "npm install -g typescript"),
                        ". If you have ",
                        Framer.createElement("a", { target: "_blank", href: "https://code.visualstudio.com/download" }, "VSCode"),
                        " the remainder of the setup has been done for you, just download the example project and get started. In the example project you will find I have predefined two helpful VSCode snippets, ",
                        Framer.createElement("code", null, "cfa"),
                        " and ",
                        Framer.createElement("code", null, "cfc"),
                        ". ",
                        Framer.createElement("code", null, "cfa"),
                        " creates a template for a Framer Application and ",
                        Framer.createElement("code", null, "cfc"),
                        " creates a template for a Framer Component. To start developing you can use the ",
                        Framer.createElement("code", null, "ctrl + shift + b"),
                        " (Run Build Task) keyboard shortcut and choose the predefined ",
                        Framer.createElement("code", null, "tsc:watch - tsconfig.json"),
                        " task, which will basically start transpiling everything into JavaScript in the background and if you use the watch task it will even re-transpile your code as you save your TypeScript files automatically - nice! \uD83D\uDC4D Also to enhance your development experience, I would recommend installing ",
                        Framer.createElement("a", { target: "_blank", href: "https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer" }, "Live Server"),
                        " from the VSCode market place, after installing Live Server open up the index.html file for the project and right click anywhere ont the code, choose open with Live Server. This will serve your project and it automatically reloads the in-development webpage whenever it detects a change in code.")),
                Framer.createElement("img", { className: "img outsider-logo", src: "./assets/vscode.png" })),
            Framer.createElement("hr", { className: "varient" }),
            Framer.createElement("div", { className: "section-center" },
                Framer.createElement("article", null,
                    Framer.createElement("h1", null, "Future Plans"),
                    Framer.createElement("p", null, "I'd like to keep developing this framework to eventually be something that I'd use in production. What I really want to try to implement to sort of make this stand out among other frameworks is setup a \"package manager\" for custom FramerComponents so developers can quickly just pull an already developed component from the cloud and not have to reinvent the wheel - like NPM but for Framer. I also want to look in getting this to support javascript and not have to be transpiled by TypeScript, unfortunately as of right now its a hard task to achieve without losing JSX support \uD83D\uDE12 but we shall see...")))));
    }
}