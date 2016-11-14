
import React, { Component} from 'react';
import * as TrainCallingPointsAction from '../actions/TrainCallingPointsAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'


class TrainCallingPointContainer extends  Component{

    constructor(props) {
        super(props);
    }

    fetchService() {

        const {  params } = this.props;
        this.props.actions.fetchTrainCallingPoints(params.splat );
        clearTimeout(this.timer);
        this.timer = setTimeout(this.fetchService.bind(this), 10000);
    }

    componentDidMount() {
        this.fetchService();
    }

    render(){

        const { service, params } = this.props;

        return (
            <div>{service}</div>
        )
    }
}

function mapStateToProps(state) {
    return {
        service: state.service.service
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(TrainCallingPointsAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrainCallingPointContainer);
