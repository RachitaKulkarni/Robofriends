import React, { Component} from 'react';
import CardList from '../Components/CardList';
// import {robots} from './robots';
import SearchBox from '../Components/SearchBox';
import './App.css';
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundary';

class App extends Component{
    constructor(){
        super();
        this.state = {
            robots : [],
            searchfield : '',
        }
    }

    componentDidMount() {
        // console.log('check');
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            return response.json();
        })   
        .then(users=>{
            this.setState({robots: users});
        })
    }

    onsearchchange=(event)=>{
        // console.log(event.target.value);
        this.setState({searchfield : event.target.value});
        // const filteredRobots= this.state.robots.filter((robot,index) => {
        //     return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        //  }
        // )
        // console.log(filteredRobots);
    }
    render() {
        //const{robots,searchfield}=this.state; //destructure it
        const filteredRobots= this.state.robots.filter((robot,index) => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
         })
        if (this.state.robots.length===0) //or if(!robots.length) & use ternary operator for if-else
        {
            return <h1>LOADING</h1>
        }else{
        return (
                 <div className='tc'>
                    <h1>ROBOFRIENDS</h1>
                    <SearchBox searchChange={this.onsearchchange}/>
                    <Scroll>  
                        <ErrorBoundary>   
                        <CardList robots={filteredRobots} />
                        </ErrorBoundary>
                    </Scroll>
                    </div>  
                ); 
            }
    }
};

// const App=()=>{
//     return (
//         <div className='tc'>
//             <h1>ROBOFRIENDS</h1>
//             <SearchBox />
//             <CardList robots={robots} />
//         </div>
        
//     );
// };
export default App;