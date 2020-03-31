import Framer from "./framer_components/Framer.js";
import { FramerComponent } from "./framer_components/Framer.js";

export default class GetStarted extends FramerComponent {
    
    init() {
        
        this.append(
            <div className="container">
                <div className="section-center">
                    <article>
                        <h1>Basics</h1>
                        <p>Alright so the rules here are pretty simple. You have an application (FramerApp) that everything is rendered in and components (FramerComponents) that act as HTML elements but more manipulatable. FramerComponents extend the HTMLElement class and therefore inherit all those cool functions but you are also able to write your own and get them to work how you want with custom HTML Framer Components. Everything here is intended to be written in TypeScript (except for obviously the HTML and CSS) and everything works as modules - much like the many other web frameworks out there. Speaking of many other frameworks, there is support for JSX - hooray! 🎉 - so it is super easy to write your HTML inline with your typescript code just like you would with a framework like React.</p>
                    </article>
                </div>
                <hr className="varient"/>
                <div className="section-left-focus">
                    <article>
                        <h1>Setup</h1>
                        <p>First and foremost, make sure you have the <a target="_blank" href="https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html">TypeScript</a> Compiler installed on your development machine. If you have npm installed you can just run the command <code>npm install -g typescript</code>. If you have <a target="_blank" href="https://code.visualstudio.com/download">VSCode</a> the remainder of the setup has been done for you, just download the example project and get started. In the example project you will find I have predefined two helpful VSCode snippets, <code>cfa</code> and <code>cfc</code>. <code>cfa</code> creates a template for a Framer Application and <code>cfc</code> creates a template for a Framer Component. To start developing you can use the <code>ctrl + shift + b</code> (Run Build Task) keyboard shortcut and choose the predefined <code>tsc:watch - tsconfig.json</code> task, which will basically start transpiling everything into JavaScript in the background and if you use the watch task it will even re-transpile your code as you save your TypeScript files automatically - nice! 👍 Also to enhance your development experience, I would recommend installing <a target="_blank" href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer">Live Server</a> from the VSCode market place, after installing Live Server open up the index.html file for the project and right click anywhere ont the code, choose open with Live Server. This will serve your project and it automatically reloads the in-development webpage whenever it detects a change in code.</p>
                    </article>
                    <img className="img outsider-logo" src="./assets/vscode.png"/>
                </div>
                <hr className="varient"/>
                {/* <div className="section-even">
                    <article>
                        <h1>Creating your first FramerApp</h1>
                        <p></p>
                    </article>
                    <code className="code-section"></code>
                </div>
                <div className="section-even">
                    <article>
                        <h1>Creating your first FramerComponent</h1>
                        <p></p>
                    </article>
                    <code className="code-section"></code>
                </div> */}
                <div className="section-center">
                    <article>
                        <h1>More Information</h1>
                        <p>As of right now this is all in early stages of development, that said there will likely be more helpful information added to this page soon. If you're in need of more information for now take a look at the example project and try to understand what's going on there. Also be sure to look through the provided documentation. Finally make sure to check in on these resources once in a while because they will be added to in the near future!</p>
                    </article>
                </div>
                <hr className="varient"/>
                <div className="section-center">
                    <article>
                        <h1>Learning Resources</h1>
                        <p>Below you can find links to helpful resources for learning different web-development skills.
                            <ul>
                                <li>W3Schools: <a target="_blank" href="https://www.w3schools.com/">Tons of helpful general tutorials</a></li>
                                <li>MDN web docs: <a target="_blank" href="https://developer.mozilla.org/en-US/">Another resource with tons of great tutorials and information</a></li>
                                <li>Codecademy: <a target="_blank" href="https://www.codecademy.com/learn/learn-html">Introduction to HTML</a></li>
                                <li>Codecademy: <a target="_blank" href="https://www.codecademy.com/learn/learn-css">Learn CSS</a></li>
                                <li>TypeScript: <a target="_blank" href="https://www.typescriptlang.org/docs/home.html">Documentation and Resources</a></li>
                                <li>ReactJS: <a target="_blank" href="https://reactjs.org/docs/introducing-jsx.html">Introducing JSX</a> (just ignore the information about React unless you want to learn that instead)</li>
                                <li>GitHub: <a target="_blank" href="https://try.github.io/">Resources to learn Git</a></li>
                            </ul>
                        </p>
                    </article>
                </div>
            </div>
        );

    }
    
}