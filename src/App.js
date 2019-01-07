import React, {Component} from 'react';
import {Grid} from 'react-bootstrap';
import './App.css';
import Subtotal from './components/Subtotal/Subtotal';
import PickupSavings from './components/PickupSavings/PickupSavings';
import TaxesFees from './components/TaxesFees/TaxesFees';
import EstimatedTotal from './components/EstimatedTotal/EstimatedTotal';
import ItemDetails from './components/ItemDetails/ItemDetails';
import PromoCode from './components/PromoCode/PromoCode';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            total: 100,
            pickupSavings: -3.95,
            taxes: 0,
            estimatedTotal: 0,
            disablePromo: false
        }
    }

    componentDidMount() {
        this.setState({
                taxes: (this.state.total + this.state.pickupSavings) * 0.07
            },
            () => {
                this.setState({
                    estimatedTotal: this.state.total + this.state.pickupSavings + this.state.taxes
                })
            })
    }

    render() {
        return (
            <div className="container">
                <Grid className="purchase-card">
                    <Subtotal price={this.state.total.toFixed(2)}/>
                    <PickupSavings price={this.state.pickupSavings}/>
                    <TaxesFees taxes={this.state.taxes.toFixed(2)}/>
                    <hr/>
                    <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)}/>
                    <ItemDetails price={this.state.estimatedTotal.toFixed(2)}/>
                    <hr/>
                    <PromoCode giveDiscount={() => this.giveDiscountHandler()}
                               isDisabled={this.state.disablePromoButton}/>
                </Grid>
            </div>
        );
    }
}

export default App;
