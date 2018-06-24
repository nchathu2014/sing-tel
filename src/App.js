import React, { Component } from 'react';
import  ProgressBarApp from './components/ProgressBarApp';
import {fetchProgressBarData} from './api/fetchData';
import './App.css';



class App extends Component {

constructor(props){
    super(props);
    this.state={
        bars:[],
        buttons:[],
        limit:0
    }
}

handleOnClick(btnValue,barIndex=1){


    var newValue = this.state.bars[barIndex]+btnValue;
    this.state.bars[barIndex] = newValue;

    this.setState({
        bars: this.state.bars
    });
}

 componentDidMount(){
      fetchProgressBarData((response)=>{
          console.log(response)
          this.setState({
              bars:response['bars'],
              buttons:response['buttons'],
              limit:response['limit']
          });
      }, (error)=>{
          console.log(error)
      });

 }

  render() {
    return (
      <div className="App">
          <ProgressBarApp
              handleOnClick={(btnVal)=>this.handleOnClick(btnVal)}
              bars={this.state.bars}
              buttons={this.state.buttons}
              limit={this.state.limit}
          />
      </div>
    );
  }
}

export default App;
