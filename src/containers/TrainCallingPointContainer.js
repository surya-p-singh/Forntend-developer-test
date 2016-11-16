
import React, { Component} from 'react';
import * as TrainCallingPointsAction from '../actions/TrainCallingPointsAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Stops from '../components/Stops';

class TrainCallingPointContainer extends  Component{

    constructor(props) {
        super(props);
    }

    fetchService() {

        // TODO: Read abt params and params.splat
        const {  params } = this.props;
        this.props.actions.fetchTrainCallingPoints(params.splat );
        clearTimeout(this.timer);
        this.timer = setTimeout(this.fetchService.bind(this), 10000);
    }

    componentDidMount() {
        this.fetchService();
    }

    // TODO: Why did we use this?
    componentDidUpdate(prevProps) {
        const { params } = this.props;

        if (params.splat !== prevProps.params.splat) {
            // Fetch new data if route has changed
            // See Abramov's technique: https://egghead.io/lessons/javascript-redux-fetching-data-on-route-change
            this.fetchService();
        }
    }

    render(){

        const { service } = this.props;
        //console.log('service in base:', service);
        return (
            <div className="col-xs-12 col-sm-6">
                    {service &&  <div>
                        <Stops service={service} />
                        </div>
                    }
           </div>
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
