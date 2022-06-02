import React, { Component } from 'react';

//class component
export class FilterObject extends Component {
    constructor() {
        super()

        this.state = {
            userInput: '',
            filteredArray: [],
            unfilteredArray: [
                { name: "Jimmy Joe", title: "Hacker", age: 12 },
                { name: "Reagan", title: "Pop Star", hairColor: "brown" },
                { name: "Andrew", title: "Web Developer", isCool: true }
            ]
        }
        this.filter = this.filter.bind(this)
    }



    filter() {
        let arr = this.state.unfilteredArray
        let entry = this.state.userInput
        let result = []

        arr.map((property) => {
            property.hasOwnProperty(entry) && result.push(property)
        })

        this.setState({ filteredArray: result })
    }



    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Unfiltered Array: {JSON.stringify(this.state.unfilteredArray)}
                </span>
                <input 
                    className="inputLine"
                    type="text"
                    onChange={ (e) => this.setState({userInput: e.target.value})}>
                </input>
                <button 
                    className="confirmationButton"
                    onClick={this.filter}>Filter
                </button>
                <span className="resultsBox filterObjectRB">Filtered: Array: {JSON.stringify(this.state.filteredArray)}
                </span>
            </div>
            
        )
    }
}

// //functional component arrow
// export const FilterObject = () => {
//     return (
//         <h1>{ FilterObject }</h1>
//     )
// }

// //functional component expression
// export function FilterObject() {
//     return (
//         <h1>{ FilterObject }</h1>
//     )
// }

export default FilterObject
