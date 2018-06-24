import React, { Component } from 'react';
import ProgressBar from './ProgressBar';
import ProgressButton from './ProgressButton';
import DropDown from './DropDown';

class ProgressBarApp extends Component {


/*constructor(props){
    super(props);
    this.renderBars = this.renderBars.bind(this);
}*/



    /*renderBars(){

        if(this.props.bars && this.props.bars.length > 0){

           this.props.bars.map((bar,index)=>{
               console.log(bar)
                return(<p>ddd</p>)
            });
        }
    }
*/
    handleOnClick(btnValue){
        this.props.handleOnClick(btnValue)
    }



    render() {

            let renderBars = this.props.bars.map((barValue, index) => {
                return (<ProgressBar key={index} barValue={barValue}/>);
            });



            let renderButtons = this.props.buttons.map((btnValue, index) => {
                return (
                        <ProgressButton key={index} btnValue={btnValue} handleOnClick={(btnVal)=>this.handleOnClick(btnVal)}/>
                );
            });





        return (
           <div>
               {renderBars}
               <div className="row">
                   <div className="col-lg-6">
                       {(this.props.bars && this.props.bars.length > 0) && <DropDown bars={this.props.bars}/>}
                   </div>
                   <div className="col-lg-6">
                       {renderButtons}
                   </div>
               </div>




           </div>

        );
    }
}

export default ProgressBarApp;
