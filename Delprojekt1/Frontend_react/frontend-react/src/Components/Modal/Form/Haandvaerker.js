﻿import React from "react";
import dateformat from "dateformat";


class Haandvaerker extends React.Component {
    
constructor(props) {
    super(props);
}
    render() {
            return (
                <form className={"form"} action={this.props.action} method={this.props.method}>
                    <div>
                        <input type={'hidden'} name={'HaandvaerkerId'} defaultValue={this.props.haandvaerkerId}/>
                    </div>
                    <div className={"form-group"}>
                        <label>Fornavn:</label>
                        <input className={"form-control"} type={'text'} name={'HVFornavn '} defaultValue={this.props.content.hvFornavn}/>
                    </div>
                    <div className={"form-group"}>
                        <label>Efternavn:</label>
                        <input className={"form-control"} type={'text'} name={'HVEfternavn '} defaultValue={this.props.content.hvEfternavn}/>
                    </div>
                    <div className={"form-group"}>
                        <label>Fagområde:</label>
                        <input className={"form-control"} type={'text'} name={'HVFagomraade '} defaultValue={this.props.content.hvFagomraade}/>
                    </div>
                    <div className={"form-group"}>
                        <label>Ansættelsesdato</label>
                        <input className={"form-control"} type={'date'} name={'HVAnsaettelsedato '} defaultValue={dateformat(this.props.content.hvAnsaettelsedato,"yyyy-mm-dd")}/>
                    </div>
                    <div className={"form-group"}>
                        <button className={"btn btn-primary"}>
                            {this.props.submitType == null ? 'submit' : this.props.submitType}
                        </button>
                    </div>
                </form>
            );
    }
}

export default Haandvaerker