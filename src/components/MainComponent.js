import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Table from './TableComponent';
import FormComp from './FormComponent';
import EditForm from './EditFormComponent';
import { WORKERS } from '../shared/workers';
import { fetchWorkers } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';

const mapStateToProps= state => {
    return {
        workers: state.workers
    }
}

const mapDispatchToProps = (dispatch) =>({
    fetchWorkers: () => { dispatch(fetchWorkers())},
});

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }
    componentDidMount() {
        this.props.fetchWorkers();    
    }
    
render() {
     const FormWithId = ({match}) => {
          return(
                <EditForm worker={this.props.workers.workers.filter((worker) => worker.id == parseInt(match.params.workerId,10))[0]}/>
          );
    };

    return (
        <div className="main">
            <div className="wrapper__header"><Header/></div>
            <div className='content'>
                <Switch>
                    <Route exact path='/' component={() => <Table workers={this.props.workers.workers} isLoading={this.props.workers.isLoading}
                    errMess={this.props.workers.errMess} />} />
                    <Route exact path='/form' component={() => <FormComp />} />
                    <Route path="/:workerId" component={FormWithId} />
                </Switch>
            </div>
            <div className="wrapper__footer"><Footer /></div>
        </div>
    );
  }
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));