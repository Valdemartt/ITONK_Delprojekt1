import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {useState, useEffect} from 'react'
import './index.scss';
import Navigation from './Components/Navigation/Navigation'
import HaandvaerkerList from './Components/List/HaandvaerkerList'
import Modal from "./Components/Modal/Modal"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showList: '',
            showModal: '',
            modalContent: {}
        }
    };
    handleOnClickNav = () => {
        this.setState({showList: 'haandvaerker'});
    };
    handleOnClickList = (content) => {
        this.setState({showModal:'haandvaerker'});
        this.setState({modalContent: {content}});
    };
    handleOnClickModal = () => {
      this.setState({showModal:''});
      this.setState({modalContent: {}})
    };

    render() {
        return (
            <React.Fragment>
                <Navigation handleOnClick={this.handleOnClickNav}/>
                <HaandvaerkerList handleOnClick={this.handleOnClickList} showList={this.state.showList}/>
                <Modal handleExit={this.handleOnClickModal} modalContent={this.state.modalContent} showModal={this.state.showModal}  />

            </React.Fragment>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('wrapper'));