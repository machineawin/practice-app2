import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Counter extends Component {
         
    countFormat () {
        if (this.props.value == 0)
        return (<span className='badge bg-dark'> Zero </span>);
        return (<span className='badge bg-secondary'> {this.props.value} </span>);

    };

    handleIncrement = () => {
        const value = this.props.value +1;
        this.setState ({value});
    }

    render() { 

        console.log ('id', this.props.id);
        console.log ('value', this.props.value);


        return (
            <div>
                <button 
                className="btn btn-primary m-2"
                onClick={ this.handleIncrement }
                >
                    Increment
                </button>
                {this.countFormat()}
                
            </div>
        );
    }
}
 
export default Counter;