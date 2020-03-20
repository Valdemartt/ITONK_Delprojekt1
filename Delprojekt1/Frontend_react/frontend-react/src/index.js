import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {useState, useEffect} from 'react'
import './index.scss';
import Navigation from './Components/Navigation/Navigation'
import HaandvaerkerList from './Components/List/HaandvaerkerList'
import Modal from "./Components/Modal/Modal"
import VaerktoejsListe from "./Components/List/VaerktoejListe"
import Vaerktoejskasse from "./Components/List/Vaerktoejskasse";

let api = "http://34.76.28.213:80/api/";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showList: '',
            showModal: '',
            modalContent: {},
            haandvaerkere: {},
            vaerktoej: {},
            vaerktoejskasse : {},
            method: 'PUT'
        };
        
    };
    componentDidMount() {
        this.fetchHaandvaerkere();
        this.fetchVaerktoej();
        this.fetchVaerktoejskasse();
    }

    fetchHaandvaerkere = () => {
        fetch(api + "Haandvaerker").then(res => res.json()).then(result => {
            this.setState({haandvaerkere: result});
        });
    };
    fetchVaerktoej = () => {
        fetch(api + "vaerktoej").then(res => res.json()).then(result => {
            this.setState({vaerktoej: result});
        });
    };
    fetchVaerktoejskasse = () => {
        fetch(api + "Vaerktoejskasse").then(res => res.json()).then(result => {
            this.setState({vaerktoejskasse: result});
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
    handleOnClickListVaerktoejskasse = (content) => {
        this.setState({showModal:'vaerktoejskasse'});
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
    showCreateModalVaerktoej() {
        this.setState({showModal: 'vaerktoej'});
        this.setState({method: 'POST'});
    }
    showCreateModalVaerktoejskasse() {
        this.setState({showModal: 'vaerktoejskasse'});
        this.setState({method:'POST'});
    }

    render() {
        let DisplayCreateHaanvaerker = "block";
        if(this.state.showList != "haandvaerker")
        {
            DisplayCreateHaanvaerker = "none";
        }
        let DisplayCreateVaerktoej = "block";
        if(this.state.showList != "vaerktoej")
        {
            DisplayCreateVaerktoej = "none";
        }
        let DisplayCreateVaerktoejskasse = "block";
        if(this.state.showList != "vaerktoejskasse")
        {
            DisplayCreateVaerktoejskasse = "none"
        }
        return (
            <React.Fragment>
                <Navigation handleOnClick={this.handleOnClickNav}/>
                <div className={"container"} style={{display:DisplayCreateHaanvaerker}}>
                    <button onClick={this.showCreateModal.bind(this)} className={"btn btn-primary"}>
                        Create
                    </button>
                </div>
                <div className={"container"} style={{display:DisplayCreateVaerktoej}}>
                    <button onClick={this.showCreateModalVaerktoej.bind(this)} className={"btn btn-primary"}>
                        Create
                    </button>
                </div>
                <div className={"container"} style={{display:DisplayCreateVaerktoejskasse}}>
                    <button onClick={this.showCreateModalVaerktoejskasse.bind(this)} className={"btn btn-primary"}>
                        Create
                    </button>
                </div>
                <HaandvaerkerList fetchList={this.fetchHaandvaerkere} api={api} list={this.state.haandvaerkere} handleOnClick={this.handleOnClickList}
                                  showList={this.state.showList}/>
                 <VaerktoejsListe handleOnClick={this.handleOnClickListVaerktoej} fetchList={this.fetchVaerktoej} api={api} list={this.state.vaerktoej} showList={this.state.showList}/>
                <Vaerktoejskasse handleOnClick={this.handleOnClickListVaerktoejskasse} fetchList={this.fetchVaerktoejskasse} api={api} list={this.state.vaerktoejskasse} showList={this.state.showList} />
                 <Modal haandvaerker={this.state.haandvaerkere} vaerktoejskasse={this.state.vaerktoejskasse} api={api} fetchVaerktoej={this.fetchVaerktoej} fetchHaandvaerker={this.fetchHaandvaerkere} fetchVaerktoejskasse={this.fetchVaerktoejskasse} method={this.state.method} handleExit={this.handleOnClickModal}
                       modalContent={this.state.modalContent} showModal={this.state.showModal}/>
            </React.Fragment>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('wrapper'));