import React, { Component, Fragment } from 'react';
import CardList from '../components/CardList';
// import { robots } from '../robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
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
            robots: [],
            searchfield: ""
        }
    }

    componentDidMount(){
        // fetch is a method on window object
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => this.setState({ robots: users }))
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render() {
        const { robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        if(!robots.length){
            return <h1 className='f1 tc'>Loading</h1>
        }else{
            return (
                <Fragment>
                    <div className='tc'>
                        <h1 className='f1'>Robofriends</h1>
                        <SearchBox searchChange={this.onSearchChange} />
                        <Scroll>
                            <CardList robots={filteredRobots} />
                        </Scroll>
                    </div>
                </Fragment>
            );
        }
    }
}

export default App;
