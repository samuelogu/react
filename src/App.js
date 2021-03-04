import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

import Header from './components/Header';
import Footer from './components/Footer';

import './css/app.css';

function App() {
  return (
    <Router>
        <Header />
        <main className="main pt-4">
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
            </Switch>
        </main>
        <Footer />
    </Router>
  );
}

export default App;
