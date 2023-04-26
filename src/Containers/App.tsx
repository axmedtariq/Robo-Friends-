import React, {Component} from 'react';
//import './App.css';
import Cardlist from '../Components/cardlist.tsx';
import SearchBox from '../Components/search.tsx';
import Scroll from '../Components/scroll.tsx';
import 'tachyons';
//import { robots } from './robots';

class  App extends  React.Component {
  constructor() {
    super()
    this.state = {

      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {

    fetch('https://jsonplaceholder.typicode.com/users').then(response => {

      return response.json();
    }).then(users => {

      this.setState({ robots : users})
    });
      
  }

  onSearchChange = (event) => {

    this.setState({ searchfield: event.target.value})
    
  }
  render() {

    const { robots, searchfield} = this.state;

    const filteredRobots = robots.filter(robots =>{
      return robots.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    if(robots.length === 0)  {

      return <h1>Loading</h1>
    }
  return (
    <div className='tc'>
    <h1>Robo Friends </h1>
    <SearchBox searchChange={this.onSearchChange}/>
    <Scroll>
    <Cardlist robots={filteredRobots} />

    </Scroll>
  
    </div>
  );
}
}

export default App;
