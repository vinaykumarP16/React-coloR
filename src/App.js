import React,{Component} from 'react';
import './App.css';
import randomcolor from 'randomcolor';

export default class App extends Component {
    constructor(){
        super()
        this.state={
            count:0,
            color:'',
            colorCode:'#0000',
            colorArray:[]
        }
        this.increment=this.increment.bind(this);
    }

    increment(){
        this.setState(prevState=>{
            return{
                 count:prevState.count+1
            }
        })
    }


    componentDidMount(){
        console.log('mounted')
    }

    componentDidUpdate(prevProps,prevState){
        if(prevState.count !== this.state.count){
            const newColor=randomcolor()
            this.setState({color:newColor}); 
            this.setState(prevState=>{
                return{
                    colorCode:newColor.toUpperCase()
                }
            })   
        }
        
    }



    render() {
        return (
            <div className='App' style={{backgroundColor:this.state.color}} >
               {/*<h1 style={{color:this.state.color}}>{this.state.count}</h1>*/}
               <h1 style={{color:this.state.color}}>{this.state.colorCode}</h1>
               <button onClick={this.increment}> C O L O R </button>
            </div>
        );
    }
}


