import React, { Component } from 'react';

class ProgressBar extends Component {




    render() {
        return (
            <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow={this.props.barValue}
                     aria-valuemin="0" aria-valuemax="100" style={{width:`${this.props.barValue}%`}}>
                    {`${this.props.barValue}%`}
                </div>
            </div>
        );
    }
}

export default ProgressBar;
