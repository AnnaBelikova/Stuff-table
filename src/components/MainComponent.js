import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Table from './TableComponent';
import { WORKERS } from '../shared/workers';


class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        workers: WORKERS,
    };
  }
render() {
    return (
        <div className="main">
            <div className="wrapper__header"><Header/></div>
            <div className='content'>
                    <Table workers={this.state.workers}/>
            </div>
            <div className="wrapper__footer"><Footer /></div>
        </div>
    );
  }
}


export default Main;