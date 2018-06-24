import React, { Component } from 'react';
import  ProgressBarApp from './components/ProgressBarApp';
import {fetchProgressBarData} from './api/fetchData';
//import './App.css';
import './main.scss';



class App extends Component {

constructor(props){
    super(props);
    this.state={
        bars:[],
        buttons:[],
        limit:0,
        selectedBar:0,
        limitStatus:false
    }
}

    handleBarIndex(selectedBar,barNo){

        this.setState({
            selectedBar,
            barNo
        });
    }

handleOnClick(btnValue){
    let bars = this.state.bars;
    let barIndex= this.state.selectedBar;
    let newValue = this.state.bars[barIndex]+btnValue;
    bars[barIndex] = newValue;

    console.log(this.state.limit,newValue)

    if(this.state.limit < newValue){
        this.setState({
            limitStatus: true
        });
    }
    else{
        this.setState({
            limitStatus: false
        });
    }
    /*if(this.state.limit > newValue){
        this.setState({
            limitStatus: true
        });
    }else{
        this.setState({
            limitStatus: false
        });
    }*/


    this.setState({
        bars: bars
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
              handleBarIndex = {(selectedBar)=>{this.handleBarIndex(selectedBar)}}
              selectedBar={this.state.selectedBar}
              bars={this.state.bars}
              buttons={this.state.buttons}
              limitStatus={this.state.limitStatus}
              limit = {this.state.limit}
          />
      </div>
    );
  }
}

export default App;
