import React, {Component} from 'react';

class ProgressButton extends Component {

    /**
     * button click callback
     * @param btnVal
     */
    handleOnClick(btnVal) {
        this.props.handleOnClick(btnVal)
    }

    render() {
        return (
            <button className="btn btn-default"
                    onClick={() => this.handleOnClick(this.props.btnValue)}>{this.props.btnValue}</button>);
    }
}

export default ProgressButton;