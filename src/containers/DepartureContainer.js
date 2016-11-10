import React, {Component} from 'react';
import * as DeparuteServiceAction from '../actions/DepartureServiceAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

class DepartureService extends Component{

    constructor(props) {
        super(props);
    }
    
    fetchData(){
        console.log('calling')
        console.log('serviceProvider', this.props.serviceProvider)
        this.props.actions.fetchDepartureDetails();
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
            <div> {this.props.serviceProvider} data</div>
        )
    }


}

/*function mapStateToProps(state) {
    console.log('mapStateToProps')
    console.log('prosssss',this.state)

    return {
        serviceProvider: state.serviceProvider,
    }
}*/

function mapStateToProps(state) {
    return {
        serviceProvider: state.serviceProvider,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(DeparuteServiceAction, dispatch)
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(DepartureService)
