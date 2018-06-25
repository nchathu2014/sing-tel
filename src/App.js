import React, {Component} from 'react';
import ProgressBarApp from './components/ProgressBarApp';
import {fetchProgressBarData} from './api/fetchData';
import './main.scss';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bars: [],
            buttons: [],
            limit: 0,
            selectedBar: 0,
            limitStatus: false
        }
    }

    /**
     * Save selected bar index to local state
     * @param selectedBar
     */
    handleBarIndex(selectedBar) {
        this.setState({
            selectedBar
        });
    }

    /**
     * handle button onclick functionality
     * @param btnValue
     */
    handleOnClick(btnValue) {
        let bars = this.state.bars;
        let barIndex = this.state.selectedBar;
        let newValue = this.state.bars[barIndex] + btnValue;

        if (newValue < 0) { //cannot go zero requirement
            newValue = 0
        }
        bars[barIndex] = newValue;

        this.setState({
            bars: bars,
            limitStatus: (this.state.limit < newValue)
        });
    }

    componentDidMount() {
        fetchProgressBarData((response) => {
            console.log(response)
            this.setState({
                bars: response['bars'],
                buttons: response['buttons'],
                limit: response['limit']
            });
        }, (error) => {
            console.log(error)
        });

    }

    render() {
        return (
            <div className="App">
                <ProgressBarApp
                    handleOnClick={(btnVal) => this.handleOnClick(btnVal)}
                    handleBarIndex={(selectedBar) => {
                        this.handleBarIndex(selectedBar)
                    }}
                    selectedBar={this.state.selectedBar}
                    bars={this.state.bars}
                    buttons={this.state.buttons}
                    limitStatus={this.state.limitStatus}
                    limit={this.state.limit}
                />
            </div>
        );
    }
}

export default App;
