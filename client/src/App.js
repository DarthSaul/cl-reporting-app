import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import BarChart from './components/BarChart';
import Statistics from './components/Statistics';
import Deployment from './components/Deployment';
import Settings from './components/Settings';

function App() {
    return (
        <Router>
            <Navbar />
            <div className='container'>
                <Switch>
                    <Route exact path='/'>
                        <BarChart />
                        <Statistics />
                    </Route>
                    <Route exact path='/deploy'>
                        <Deployment />
                    </Route>
                    <Route exact path='/settings'>
                        <Settings />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
