import React, {Component} from 'react';
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css'

class App extends Component { 
	//Declaring state
	constructor(){
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	}
	
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({robots: users}));
	}

	//create the 'searchChange' funcation evening to handle the search input.
	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	//{this.state.robots} is from the state now.
	render() {
		const {robots, searchfield} = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase())
		})
		return !robots.length? 	<h1> Loading </h1> :
								(
									<div className='tc'>
									<h1 className='f1'>RobotFriend</h1>
									<SearchBox searchChange = {this.onSearchChange} />
									<Scroll>
										<ErrorBoundry>
											<CardList robots={filteredRobots}/>
										</ErrorBoundry>
									</Scroll>
									</div>
								)
			}
}

export default App;