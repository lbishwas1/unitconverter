import React, { Component } from 'react';

import FromToInput from '../components/FromToInput';
import { connect } from 'react-redux'

class InputHandling extends Component {
    state = {
        fromUnitVal: '',
        toUnitVal: ''
    }

    unitConvertingHandler = (fromVal) => {
        setTimeout(() => {
            let toVal;
            const fromUnitRatio = this.props.fromRatio;
            const toUnitRatio = this.props.toRatio;
            
                toVal = fromVal * fromUnitRatio / toUnitRatio;
            toVal = toVal.toFixed(7);
            this.setState({ toUnitVal: toVal })
        }, 1)
    }

    // function to handle typing in "fromUnit" input field
    fromChangeHandler = (e) => {
        let fromVal = e.target.value;
        this.unitConvertingHandler(fromVal);
        this.setState({ fromUnitVal: fromVal });
    }
    render() {
        return (
            <FromToInput
                fromChgHdl={this.fromChangeHandler}
                fromValue={this.state.fromUnitVal}
                toValue={this.state.toUnitVal}
                disableFromInput={this.props.disableFromInput} />
        )
    }
}

const mapStateToProps = state => {
    return {
        unTypeId: state.unitTypeId,
        fromRatio: state.fromUnitRatio,
        toRatio: state.toUnitRatio,
        disableFromInput: state.disableFromInput
    };
};

export default connect(mapStateToProps)(InputHandling)
