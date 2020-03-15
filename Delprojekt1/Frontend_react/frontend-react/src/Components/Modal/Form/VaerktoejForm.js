import React from "react";
import Input from "../../FormComponents/Input"
import dateformat from "dateformat";
import Select from "../../FormComponents/Select";

class VaerktoejForm extends React.Component {
    constructor(props) {
        super(props);
        try {
            console.log("model: " + props.content);
            this.state = {
                id: props.content.vtId,
                model: props.content.vtModel,
                fabrikant: props.content.vtFabrikat,
                type: props.content.vtType,
                serienummer: props.content.vtSerienr,
                anskaffet: props.content.vtAnskaffet,
                liggerI: props.content.liggerIvtk
            }
        } catch (e) {
            this.state = {
                id: 0,
                model: ""
            }
        }
    }

    submitForm = () => {
        let arr = {};
        let data = document.querySelectorAll('#form input').forEach(function (dataItem) {
            let key = dataItem.getAttribute('name');

            let value = dataItem.value;
            if (key === "vtId") {
                value = parseInt(value);
            }
            arr[key] = value;
        });
        data += document.querySelectorAll('#form select').forEach(function (dataitem) {
            let key = dataitem.getAttribute('name');
            let value = dataitem.options[dataitem.selectedIndex].value;
            value = parseInt(value);
            arr[key] = value;
        });
        console.log(arr);
        fetch(this.props.api + "Vaerktoej",
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
                    <input type={'hidden'} name={'vtId'} value={this.state.id}/>
                </div>
                <Input label={"Model:"} className={"form-control"} type={'text'} name={'vtModel'}
                       defaultValue={this.state.model}/>
                <Input label={"Fabrikant:"} className={"form-control"} type={'text'} name={'vtFabrikat'}
                       defaultValue={this.state.fabrikant}/>
                <Input label={"Serienummer:"} className={"form-control"} type={'text'} name={'vtSerienr'}
                       defaultValue={this.state.serienummer}/>
                <Select selectItem={this.props.vaerktoejskasse} type={"vaerktojskasse"} label={"Ligger i:"} className={"form-control"} name={'liggerIvtk'}
                        defaultValue={this.state.liggerI}/>
                <Input label={"Type:"} className={"form-control"} type={'text'} name={'vtType'}
                       defaultValue={this.state.type}/>
                <Input label={"Anskaffet:"} className={"form-control"} type={'date'} name={'vtAnskaffet'}
                       defaultValue={dateformat(this.state.anskaffet, "yyyy-mm-dd")}/>

                <div className={"form-group"}>
                    <button onClick={this.submitForm} className={"btn btn-primary"}>
                        submit
                    </button>
                </div>
            </div>
        );
    }
}

export default VaerktoejForm;