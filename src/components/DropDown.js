import React, {Component} from 'react';

class DropDown extends Component {

    constructor(props){
        super(props);
        this.state={
            selectedBar:0
        }
    }

    handleBarsSelect(){
        let selectedBar = document.getElementById("barsList").value;
        this.setState({
            selectedBar
        });

    }



    render(){
        console.log(this.state.selectedBar)
        let renderBarsItem = this.props.bars.map((itemVal, index) => {
            return (<option value={index} key={index}>#Progress{index+1}</option>);
        });
        return(
            <div>
                <select name="barsList" id="barsList" onChange={()=>this.handleBarsSelect()}>
                    {renderBarsItem}
                </select>
            </div>
        );
    }

}

export default DropDown;