import React, { Component } from 'react';

class ProgressBar extends Component {




    render() {

        let barHighlight = (this.props.limitStatus && (this.props.selectedBar===this.props.barNo))?"cus-progress":"progress-bar"

        return (
            <div className="progress">
                <div id={this.props.barNo} className={barHighlight} role="progressbar" aria-valuenow={this.props.barValue}
                     aria-valuemin="0" aria-valuemax="100" style={{width:`${this.props.barValue}%`}}>
                   <span> {`${this.props.barValue}%`}</span>
                </div>
            </div>
        );
    }
}

export default ProgressBar;
