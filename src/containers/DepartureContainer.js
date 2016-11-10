import React, {Component} from 'react';
import * as DeparuteServiceAction from '../actions/DepartureServiceAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

class DepartureService extends Component{

    constructor(props) {
        super(props);
    }

    fetchData(){

        this.props.actions.fetchDepartureDetails();
        console.log('this.props.services:', this.props.services)
        //this.props.disptach(DeparuteServiceAction.fetchDepartureDetails());
        //dispatch(DeparuteServiceAction.fetchDepartureDetails());
        clearTimeout(this.timer);
        this.timer = setTimeout(this.fetchData.bind(this), 10000);
    }

    componentDidMount(){
        this.fetchData();
    }

    render(){
        return(
            <div> {this.props.services} data</div>
        )
    }


}

function mapStateToProps(state) {
    console.log('mapStateToProps')
    console.log('state.departures.services:',state.departures.services)

    return {
        services: state.departures.services,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(DeparuteServiceAction, dispatch)
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(DepartureService)
