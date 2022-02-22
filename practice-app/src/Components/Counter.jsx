import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Counter extends Component {
         
    countFormat () {
        if (this.props.counter.value == 0)
        return (<span className='badge bg-dark'> Zero </span>);
        return (<span className='badge bg-secondary'> {this.props.counter.value} </span>);

    };


    render() { 
        
        return (
            <div>
                <h4>Counter #{this.props.counter.id}</h4>
                <button 
                className="btn btn-primary m-2"
                onClick={ () => this.props.handleIncrement(this.props.counter) }>
                    Increment
                </button>
                {this.countFormat()}
                
                <button
                onClick={() => this.props.handleDelete(this.props.counter.id)}
                className="btn btn-danger m-2">
                    Delete
                </button>
                
            </div>
        );
    }
}
 
export default Counter;