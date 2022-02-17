import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Counter extends Component {
    state = { 
        value: 0
     } 

    countFormat () {
        if (this.state.value == 0)
        return (<span className='badge bg-dark'> Zero </span>);
        return (<span className='badge bg-secondary'> {this.state.value} </span>);

    };

    handleIncrement = () => {
        const value = this.state.value +1;
        this.setState ({value});
    }

    render() { 
        return (
            <React.Fragment>
                <button 
                className="btn btn-primary m-2"
                onClick={ this.handleIncrement }
                >
                    Increment
                </button>
                {this.countFormat()}
                
            </React.Fragment>
        );
    }
}
 
export default Counter;