import React, {Component} from 'react';
import * as DeparturesAction from '../actions/DeparturesAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import ServiceList from '../components/ServicesList';

class DeparturesContainer extends Component{

    constructor(props) {
        super(props);
    }

    fetchData(){
        this.props.actions.fetchDepartures();
        clearTimeout(this.timer);
        this.timer = setTimeout(this.fetchData.bind(this), 10000);
    }

    componentDidMount(){
        this.fetchData();
    }

    render(){
        const { services, disruptionMessages, children } = this.props;

        return(
            <div>
                { disruptionMessages && disruptionMessages.length && <div className="col-xs-12">
                    <div className="service-disruptions">
                        <ul className="list-unstyled">
                            <li className="is-first">{ disruptionMessages[0].message } </li>
                        </ul>
                    </div>
                </div> }
                <div>
                    { services &&  <ServiceList services={ services } /> }
                </div>
                 { children }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        services: state.departures.services,
        disruptionMessages: state.departures.disruptionMessages
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(DeparturesAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeparturesContainer)
