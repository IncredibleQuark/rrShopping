import React, {Component} from 'react';
import {Grid} from 'react-bootstrap';
import './App.css';
import Subtotal from './components/Subtotal/Subtotal';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            total: 100
        }
    }

    render() {
        return (
            <div className="container">
                <Grid className="purchase-card">
                    <Subtotal price={this.state.total.toFixed(2)}/>
                </Grid>
            </div>
        );
    }
}

export default App;
