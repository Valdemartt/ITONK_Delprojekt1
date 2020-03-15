﻿import React from "react";
import dateformat from "dateformat";
import Input from "../../FormComponents/Input"

class Haandvaerker extends React.Component {
    constructor(props) {
        super(props);
        try{
        this.state = {
            id: this.props.content.haandvaerkerId,
            fornavn: this.props.content.hvFornavn,
            efternavn: this.props.content.hvEfternavn,
            ansaettelsesdato: this.props.content.hvAnsaettelsedato,
            fagomraade: this.props.content.hvFagomraade
        }
        }
        catch (e) {
            this.state = {
                id: 0,
                fornavn: "",
                efternavn: "",
                ansaettelsesdato: Date.now(),
                fagomraade: ""
            }
        }
    }

    handleChangeFornavn(event) {
        this.setState({fornavn:event.target.value})
    };
    handleChangeEfternavn(event) {
        this.setState({efternavn:event.target.value})
    };
    handleChangeFagomraade(event) {
        this.setState({fagomraade:event.target.value})
    };
    handleChangeAnsaettelse(event) {
        this.setState({ansaettelsesdato:event.target.value})
    };
    
    submitForm = () => {
        let arr = {};
        let data = document.querySelectorAll('#form input').forEach(function (dataItem) {
            let key = dataItem.getAttribute('name');
 
            let value = dataItem.value;
            if(key === "haandvaerkerId")
            {
                value = parseInt(value);
            }
            arr[key] = value;
        });
        console.log(arr);
        fetch(this.props.api + "haandvaerker",
            {
                method: this.props.method,
                headers: {
                    "Content-Type": "application/json"  
                },
                body: JSON.stringify(arr)
            }).then(response => {
                if (response.status >= 200 && response.status < 300) {
                    return response;
                    console.log(response);
                    window.location.reload();
                } else {
                    console.log('Somthing happened wrong');
                }
            }
        ).then(r => {
            this.props.fetch();
            this.props.handleExit();
        });
        
    };

    render() {
        return (
            <div id={'form'} className={"form"}>
                <div>
                    <input type={'hidden'} name={'haandvaerkerId'} value={this.state.id}/>
                </div>
                    <Input label={"Fornavn"} className={"form-control"} type={'text'} onChange={this.handleChangeFornavn} name={'hvFornavn'}
                           defaultValue={this.state.fornavn}/>
                    <Input label={"Efternavn"} className={"form-control"} type={'text'} onChange={this.handleChangeEfternavn} name={'hvEfternavn'}
                           defaultValue={this.state.efternavn}/>
                    <Input label={"Fagområde"} className={"form-control"} type={'text'} onChange={this.handleChangeFagomraade} name={'hvFagomraade'}
                           defaultValue={this.state.fagomraade}/>
                    <Input label={"ansættelsesdato"} className={"form-control"} type={'date'} onChange={this.handleChangeAnsaettelse} name={'hvAnsaettelsedato'}
                           defaultValue={dateformat(this.state.ansaettelsesdato, "yyyy-mm-dd")}/>
                <div className={"form-group"}>
                    <button onClick={this.submitForm} className={"btn btn-primary"}>
                        {this.props.submitType == null ? 'submit' : this.props.submitType}
                    </button>
                </div>
                
            </div>
        );
    }
}

export default Haandvaerker