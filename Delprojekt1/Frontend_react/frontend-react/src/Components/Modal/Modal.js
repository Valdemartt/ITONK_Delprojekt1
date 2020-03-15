import React from "react";
import Haandvaerkerform from "./Form/Haandvaerker"
import "./modal.scss"
import VaerktoejForm from "./Form/VaerktoejForm";
import VaerktoejskasseForm from "./Form/VaerktoejskasseForm"

class Modal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.showModal === 'haandvaerker') {
            return (
                <div className={"modalForm"}>
                    <div className={"modalForm-content"}>
                        <button onClick={this.props.handleExit} className={"btn btn-link exitButton"}>X</button>
                        <Haandvaerkerform fetch={this.props.fetchHaandvaerker} api={this.props.api} handleExit={this.props.handleExit} method={this.props.method} content={this.props.modalContent.content} />
                    </div>
                    <div className={'modalForm'} onClick={this.props.handleExit}>
                        
                    </div>
                </div>
            );
        } else if (this.props.showModal === 'vaerktoej') {
            return (
                <div className={"modalForm"}>
                    <div className={"modalForm-content"}>
                        <button onClick={this.props.handleExit} className={"btn btn-link exitButton"}>X</button>
                        <VaerktoejForm vaerktoejskasse={this.props.vaerktoejskasse} fetch={this.props.fetchVaerktoej} api={this.props.api} handleExit={this.props.handleExit} method={this.props.method} content={this.props.modalContent.content}/>
                    </div>
                    <div className={'modalForm'} onClick={this.props.handleExit}>

                    </div>
                </div>
            )
        } else if (this.props.showModal === 'vaerktoejskasse') {
            return (
                <div className={"modalForm"}>
                    <div className={"modalForm-content"}>
                        <button onClick={this.props.handleExit} className={"btn btn-link exitButton"}>X</button>
                        <VaerktoejskasseForm haandvaerker={this.props.haandvaerker} fetch={this.props.fetchVaerktoejskasse} api={this.props.api} handleExit={this.props.handleExit} method={this.props.method} content={this.props.modalContent.content}/>
                    </div>
                    <div className={'modalForm'} onClick={this.props.handleExit}>

                    </div>
                </div>
            )
        } else {
            return null
        }
    }
}

export default Modal