import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch,Link} from 'react-router-dom';
import Page1 from './routes/page1';
import Page2 from './routes/page2';
import Page3 from './routes/page3';
import scoreForm from './components/scoreForm';
import './index.css';


function App(){
    return (
        <div>
            <main>
                <section>
                    <Link to="/page1">
                        <button type="button" className="btn">
                            page 1
                        </button>
                    </Link>
                    <Link to="/page2">
                        <button type="button" className="btn">
                            page 2
                        </button>
                    </Link>
                    <Link to="/page3">
                        <button type="button" className="btn">
                            page3
                        </button>
                    </Link>
                    <Link to="/upload">
                        <button type="button" className="btn">
                            upload
                        </button>
                    </Link>
                </section>
                <Switch>
                    <Route exact path="/page1">
                        <Page1 />
                    </Route>
                    <Route path="/page2">
                        <Page2 />
                    </Route>
                    <Route path="/page3">
                        <Page3 />
                    </Route>
                    <Route path="/upload">
                        <scoreForm />
                    </Route>
                </Switch>
            </main>
        </div>
    )
}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
