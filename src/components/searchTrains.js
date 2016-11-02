import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTrainsDetails } from '../actions/index'

class SearchTrains extends Component{

    constructor(props){
        super(props);
        this.state = {originStation:''};
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    //All DOM event handlers pass event
    onInputChange(event){
        console.log(event.target.value)
        this.setState({originStation:event.target.value})
    }

    onFormSubmit(event){
        event.preventDefault();
        this.props.fetchTrainsDetails(this.state.originStation);
        this.setState({ originStation: '' });
    }

    render(){
        return(
                <form onSubmit={this.onFormSubmit} className="input-group">
                    <input
                        placeholder="Enter station"
                        className="from-control"
                        value={this.state.origin}
                        onChange={this.onInputChange}
                    />
                    <span className="input-group btn">
                        <button type="submit" className="btn btn-primary">Load</button>
                    </span>
                </form>
        )
    }
}


// Binding action
function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchTrainsDetails }, dispatch);
}

// null means this container dont care abt any state
export default connect(null,mapDispatchToProps)(SearchTrains);


