import Counter from "./Counter";
import React, { Component } from 'react';

class Counters extends Component {
    state = { 
        counters: [
            {id:1, value:3},
            {id:2, value:4},
            {id:3, value:6},
            {id:4, value:5}
        ]
     }; 
    render() { 
        return (
            <React.Fragment>
                {this.state.counters.map (c => <Counter key={c.id} id = {c.id} value = {c.value} />)}
            </React.Fragment>
            
        );
    }
}
 
export default Counters;
