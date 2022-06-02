//class component
import React, { Component } from 'react';


export class EvenAndOdd extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    handleChange(input) {
        this.setState({ userInput: input })
    }

    solveProblem(userInput) {
        let arr = userInput.split(',');
        let evens = [];
        let odds = [];
    
        for (let num of arr) {
            num % 2 === 0 ?
            evens.push(+num) :
            odds.push(+num) 
          }
        
        
        this.setState({ evenArray: evens, oddArray: odds });
    }

    render() {
        return (
            <div className='puzzleBox EvenAndOddPB'>
                <h4>EvenAndOdd</h4>
                <input 
                    className='inputLine' 
                    onChange={ (e) => this.handleChange(e.target.value) }>
                </input>
                <button 
                    className='confirmationButton'
                    onClick={ () => {this.solveProblem(this.state.userInput)} }>Solve It!
                </button>
                <span className='resultsBox'>Evens: {JSON.stringify(this.state.evenArray)}</span>
                <span className='resultsBox'>Odds: {JSON.stringify(this.state.oddArray)}</span>               
            </div>
        )
    }
}


// //functional component expression
// export function EvenAndOdd() {
//     return (
//         <h1>{ EvenAndOdd }</h1>
//     )
// }

export default EvenAndOdd
