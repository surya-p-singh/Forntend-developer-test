import React, {Component} from 'react';
import * as DeparturesAction from '../actions/DeparturesAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

class DeparturesContainer extends Component{

    constructor(props) {
        super(props);
    }

    fetchData(){

        this.props.actions.fetchDepartureDetails();
        const { services } = this.props;
        //console.log('this.props.services:', this.props.services)
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
    return {
        services: state.departures.services,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(DeparturesAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeparturesContainer)
