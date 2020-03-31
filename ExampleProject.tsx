import Framer from './framer_components/Framer.js';
import { FramerComponent } from './framer_components/Framer.js';

export default class MyComponent extends FramerComponent {
    
    init() {
        
        this.append(
            <div className="container">
                <div className="section-center">
                    <article>
                        <h1>Example Projects</h1>
                        <p>General Disclaimer: In case this has not been said enough times, this framework is still super early in development! As of writing this it is only 4 days old. That said the example projects, tutorials, and documentation may be on the light side. You can however download this website as an example project to play around with from the GitHub link found below, or if you download the GitHub repo the framework is on it will come with an example "startup" project right away.</p>
                    </article>
                </div>
                <hr className="varient"/>
                <div className="section-center">
                    <article>
                        <h1>Startup Project</h1>
                        <p>When you go to download the files from github that include the framework code if you download the whole repository it will come with an already set up example project that you can get started right away with.</p>
                    </article>
                </div>
                <hr className="varient"/>
                <div className="section-center">
                    <article>
                        <h1>This Website</h1>
                        <p>Visit the GitHub repo linked above and download the whole repo as a .zip file, this will serve as a pretty neat example project as this website was created using Framer. Pretty cool, right?!</p>
                    </article>
                </div>
            </div>
        );

    }
    
}