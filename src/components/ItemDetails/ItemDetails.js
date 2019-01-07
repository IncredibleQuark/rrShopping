import React, {Component} from 'react';
import {Button, Collapse, Well, Media, Row, Col} from 'react-bootstrap';

class ItemDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    render() {
        return (
            <div>
                <Button className="item-details-button" bsStyle="link"
                        onClick={() => this.setState({open: !this.state.open})}>
                    {this.state.open === false ? 'See' : 'Hide'} item details
                    {this.state.open === false ? ' +' : ' -'}
                </Button>

                <Collapse in={this.state.open}>
                    <div>
                        <Well>
                            <Media>
                                <Media.Left>
                                    <img width={100} height={100} alt="thumbnail"
                                         src="https://pix.bonprix.pl/imgc/0/0/1/7/2/3/3/7/5/5/_640/17233755/sweter-norweski-regular-fit-ciemnoniebieski-melanz.jpg"/>
                                </Media.Left>
                                <Media.Body>
                                    <p>Essentials by Sweter2123, Dark Blue, XL</p>
                                    <Row className="show-grid">
                                        <Col md={6}>
                                            <strong> {`$${this.props.price}`} </strong>
                                            <br/>
                                            <strong className="price-strike"> {`$${this.props.price}`} </strong>
                                        </Col>
                                        <Col md={6}>
                                            Qty: 1
                                        </Col>
                                    </Row>
                                </Media.Body>
                            </Media>
                        </Well>
                    </div>
                </Collapse>

            </div>
        );
    }
}

export default ItemDetails;