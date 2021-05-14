import { Route, Switch } from "react-router";
import "./App.css";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Project from "./components/Project/Project";
import Resume from "./components/Resume/Resume";
import Sidebar from "./components/Sidebar/Sidebar";

// let firebaseConfig = {
//   apiKey: "AIzaSyDQlKXe0IE9PfQ5_DdfeswlxP0PVgmgWMU",
//   authDomain: "portfolio-website-850e4.firebaseapp.com",
//   projectId: "portfolio-website-850e4",
//   storageBucket: "portfolio-website-850e4.appspot.com",
//   messagingSenderId: "204280528191",
//   appId: "1:204280528191:web:c3ddc0a41973a73fd3a78a"
// };

function App() {
  // firebase.initializeApp(firebaseConfig);
  return (
    <Switch>
      <section id="main-page">
        <Route exact path='/'>
          <Sidebar />
          <Home/>
        </Route>
        <Route exact path='/home'>
          <Sidebar />
          <Home/>
        </Route>
        <Route exact path='/about'>
          <Sidebar />
          <About/>
        </Route>
        <Route exact path='/contact'>
          <Sidebar />
          <Contact/>
        </Route>
        <Route exact path='/blog'>
          <Sidebar />
          <Blog/>
        </Route>
        <Route exact path='/resume'>
          <Sidebar />
          <Resume/>
        </Route>
        <Route exact path='/project'>
          <Sidebar />
          <Project/>
        </Route>
      </section>
    </Switch>
  );
}

export default App;
