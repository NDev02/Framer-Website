import Framer from './framer_components/Framer.js';
import NavigationDrawer from './framer_components/NavigationDrawer.js';
import MobileAppBar from './framer_components/AppBar.js';
import Blocker from './framer_components/Blocker.js';
import Router from './framer_components/Router.js';
import HomePage from './HomePage.js';
import GetStarted from './GetStarted.js';
import ExampleProject from './ExampleProject.js';
Framer.css('styles.css');

class App extends Framer {

    constructor() {

        super("#root");

    }

    init() {

        let navigationItems = [
            {
                "label": "Home",
                "to": <HomePage/>
            },{
                "label": "Get Started",
                "to": <GetStarted/>
            },{
                "label": "Documentation",
                "href": "./docs/index.html"
            },{
                "label": "Example Project",
                "to": <ExampleProject/>
            },{
                "label": "GitHub",
                "href": "https://github.com/NDev02/Framer",
                "target": "_blank"
            }
        ];

        let navigationStyle = {
            background: "#4A6DE5",
            foreground: "white",
            hover: "#00208233",
            transition: "0.2s"
        };

        let appBarStyle = {
            background: "#284BC2",
            foreground: "white"
        };

        let mobileAppBar = <MobileAppBar title="Framer" appBarStyle={appBarStyle}/>
        let router = <Router/>;
        let blocker = <Blocker></Blocker>;
        let navigationDrawer = <NavigationDrawer state="open" title="Framer" router={router} blocker={blocker} items={navigationItems} navStyle={navigationStyle}/>;
        mobileAppBar.props.onMenuClick = () => {

            navigationDrawer.props.state = "open";

        };

        this.append(blocker, navigationDrawer, mobileAppBar, router);

        router.display(navigationItems[0].to);
    
    }

    periodic() {}

}

export default (new App());