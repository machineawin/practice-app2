import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class Counter extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <button className="m-2 badge-primary ">Increment</button>
                
            </React.Fragment>
        );
    }
}
 
export default Counter;