import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {useState, useEffect} from 'react'
import './index.scss';
import Navigation from './Components/Navigation/Navigation'
import HaandvaerkerList from './Components/List/HaandvaerkerList'
import Modal from "./Components/Modal/Modal"
import VaerktoejsListe from "./Components/List/VaerktoejListe"

let api = "https://localhost:5001/api/";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showList: '',
            showModal: '',
            modalContent: {},
            haandvaerkere: {},
            vaerktoej: {},
            method: 'PUT'
        };
        
    };
    componentDidMount() {
        this.fetchHaandvaerkere();
        this.fetchVaerktoej();
    }

    fetchHaandvaerkere = () => {
        fetch(api + "Haandvaerker").then(res => res.json()).then(result => {
            this.setState({haandvaerkere: result});
        });
    };
    fetchVaerktoej = () => {
        fetch(api + "vaerktoej").then(res => res.json()).then(result => {
            this.setState({vaerktoej:result});
        });
    };
    handleOnClickNav = (state) => {
        this.setState({showList: state});
    };
    handleOnClickList = (content) => {
        this.setState({showModal: 'haandvaerker'});
        this.setState({modalContent: {content}});
        this.setState({method: 'PUT'});
    };
    handleOnClickListVaerktoej = (content) => {
        this.setState({showModal:'vaerktoej'});
        console.log(content);
        this.setState({modalContent:{content}});
        this.setState({method:'Put'});
    };
    handleOnClickModal = () => {
        console.log('modal exit');
        this.setState({showModal: ''});
        this.setState({modalContent: {}});
    };
    showCreateModal() {
        this.setState({showModal: 'haandvaerker'});
        this.setState({method: 'POST'});
    }

    render() {
        let DisplayCreateHaanvaerker = "block";
        if(this.state.showList != "haandvaerker")
        {
            DisplayCreateHaanvaerker = "none";
        }
        return (
            <React.Fragment>
                <Navigation handleOnClick={this.handleOnClickNav}/>
                <div className={"container"} style={{display:DisplayCreateHaanvaerker}}>
                    <button onClick={this.showCreateModal.bind(this)} className={"btn btn-primary"}>
                        Create
                    </button>
                </div>
                <HaandvaerkerList fetchList={this.fetchHaandvaerkere} api={api} list={this.state.haandvaerkere} handleOnClick={this.handleOnClickList}
                                  showList={this.state.showList}/>
                 <VaerktoejsListe handleOnClick={this.handleOnClickListVaerktoej} fetchList={this.fetchVaerktoej} api={api} list={this.state.vaerktoej} showList={this.state.showList}/>
                <Modal api={api} fetchVaerktoej={this.fetchVaerktoej} fetchHaandvaerker={this.fetchHaandvaerkere} method={this.state.method} handleExit={this.handleOnClickModal}
                       modalContent={this.state.modalContent} showModal={this.state.showModal}/>
            </React.Fragment>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('wrapper'));