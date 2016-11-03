import React, {Component} from 'react';
import {connect} from 'react-redux';

import ServiceActions from '../actions/ServiceActions';

class ServiceContainer extends Component{

    fetchService() {
        console.log('fetchService');
        ServiceActions();
        clearTimeout(this.timer);
        this.timer = setTimeout(this.fetchService.bind(this), 10000);

    }

    componentDidMount(){
        console.log('componentDidMount');
        this.fetchService();
    }
    render(){

        if(!this.props.service) {
            return (
                <div> Service</div>
            )
        }
        else{
            return (
                <div>Fetching Service</div>
            )
        }
    }
}

function mapStateToProps(state){
    return{
        service: state.service
    }
}

export default connect(mapStateToProps)(ServiceContainer);