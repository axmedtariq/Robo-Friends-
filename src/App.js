import React, {component} from 'react';
import { connect } from "react-redux";
//import './App.css';
import Cardlist from '../Components/cardlist';
import SearchBox from '../Components/search';
import Scroll from '../Components/scroll';
import 'tachyons';
//import { robots } from './robots';

import { setSearchField } from "../actions";


const mapStateToProps = state => {

  return{

    searchField: state.searchField
  }
}

const mapDispatchToProps = (dispatch) => {

  return {

  onSearchChange: (event) => dispatch(setSearchField(event.target.value))
}
}

class  App extends  React.Component {
  constructor() {
    super()
    this.state = {

      robots: []
    }
  }

  componentDidMount() {

    console.log(this.props.store.getstate());

    fetch('https://jsonplaceholder.typicode.com/users').then(response => {

      return response.json();
    }).then(users => {

      this.setState({ robots : users})
    });
      
  }

 
  render() {

    const { robots } = this.state;
    const { searchField, onSearchChange } = this.props;

    const filteredRobots = robots.filter(robots =>{
      return robots.name.toLowerCase().includes(searchField.toLowerCase());
    });
    if(robots.length === 0)  {

      return <h1>Loading</h1>
    }
  return (
    <div className='tc'>
    <h1>Robo Friends </h1>
    <SearchBox searchChange={onSearchChange}/>
    <Scroll>
    <Cardlist robots={filteredRobots} />

    </Scroll>
  
    </div>
  );
}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
