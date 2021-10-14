import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import BarChart from './components/BarChart';

function App() {
    return (
        <Router>
            <Navbar />
            <div class='container'>
                <Switch>
                    <Route exact path='/'>
                        <BarChart />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
