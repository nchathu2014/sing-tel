import React, {Component} from 'react';

class DropDown extends Component {

    /**
     * drop down select functionality
     */
    handleBarsSelect() {
        let selectedBar = document.getElementById("barsList").value;
        this.props.handleBarIndex(selectedBar)
    }

    render() {
        let renderBarsItem = this.props.bars.map((itemVal, index) => {
            return (<option value={index} key={index}>#Progress{index + 1}</option>);
        });
        return (
            <div>
                <select name="barsList" id="barsList" onChange={() => this.handleBarsSelect()}>
                    {renderBarsItem}
                </select>
            </div>
        );
    }

}

export default DropDown;