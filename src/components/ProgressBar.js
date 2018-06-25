import React from 'react';

const ProgressBar = (props) => {
    return (
        <div className="progress">
            <div id={"bar-item" + props.barIndex}
                 className={props.barHighlight}
                 role="progressbar"
                 aria-valuenow={props.barValue}
                 aria-valuemin="0"
                 aria-valuemax="100"
                 style={{width: `${props.barValue}%`}}>
                <span> {`${props.barValue}%`}</span>
            </div>
        </div>
    );
};

export default ProgressBar;
