import React, { Component, Fragment } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';
import './App.css';

// const App = () => {
//     return (
//         <Fragment>
//             <div className='tc'>
//                 <h1>Robofriends</h1>
//                 <SearchBox />
//                 <CardList robots={robots} />
//             </div>
//         </Fragment>
//     );
// }

// export default App;

// props are simply things that come out of state
// A "parent" feeds "state" into the "child" component. And as soon as the child component receives the "state", it is a property and that child can never change that property. The parent just tells what the state is and the child receives it as "robots(here)"

class App extends Component {
    constructor() {
        super();
        this.state = {
            // robots: robots,
            searchfield: ""
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render() {
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <Fragment>
                <div className='tc'>
                    <h1 className='f1'>Robofriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <CardList robots={filteredRobots} />
                </div>
            </Fragment>
        );
    }
}

export default App;
