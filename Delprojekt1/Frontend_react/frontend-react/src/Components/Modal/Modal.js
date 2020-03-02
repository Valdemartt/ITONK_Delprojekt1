import React from "react";
import Haandvaerkerform from "./Form/Haandvaerker"
import "./modal.scss"

class Modal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.showModal === 'haandvaerker') {
            return (
                <div className={"modalForm"} onClick={this.props.handleExit}>
                    <div className={"modalForm-content"}>
                        <button onClick={this.props.handleExit} className={"btn btn-link exitButton"}>X</button>
                        <Haandvaerkerform content={this.props.modalContent.content} />
                    </div>
                </div>
            );
        } else if (this.props.showModal === 'tools') {
            return (
                <div className={"modalForm"}>
                    <div className={"modalForm-content"}>

                    </div>
                </div>
            )
        } else {
            return null
        }
    }
}

export default Modal