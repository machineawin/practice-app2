import Counter from "./Counter";
import React, { Component } from 'react';

class Counters extends Component {
    state = { 
        counters: [
            {id:1, value:0},
            {id:2, value:4},
            {id:3, value:6},
            {id:4, value:5}
        ]
    }; 
    
    handleIncrement = counter => {
        const counters = [...this.state.counters];        
        const index = counters.indexOf(counter);         
        counters[index] = {...counter};
        counters[index].value++;
        this.setState ({counters});
    };

    handleDelete = (counterID) => {
        console.log ('handleDelete Clicked');
        const counters = this.state.counters.filter (counter => (counter.id !== counterID) );
        this.setState ({counters});
    }
10
    handleReset = () => {
        const counters = this.state.counters.map (counter => {
            counter.value = 0
            return counter
         });
        console.log ('counters after reset ', counters)
        this.setState ({counters});
    }
    
    render() { 
        return (
            <React.Fragment>
                <button 
                onClick={this.handleReset}
                className="btn btn-primary m-2">
                    Reset
                </button>

                {this.state.counters.map (counter =>
                     <Counter 
                     key = {counter.id}
                     counter={counter} 
                     handleIncrement = {this.handleIncrement}
                     handleDelete = {this.handleDelete}                     
                     />)}
            </React.Fragment>
            
        );
    };
}
 
export default Counters;
