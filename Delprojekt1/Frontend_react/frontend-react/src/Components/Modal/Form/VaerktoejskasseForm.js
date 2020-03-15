import React, {Component} from "react";
import dateformat from "dateformat";
import Input from "../../FormComponents/Input";
import Select from "../../FormComponents/Select";

class vaerktoejskasseForm extends Component {
    constructor(props) {
        super(props);
        try {
            console.log("model: " + props.content);
            this.state = {
                id: props.content.vtkId,
                ejesAf: props.content.vtkEjesAf,
                model: props.content.vtkModel,
                serienummer: props.content.vtkSerienummer,
                farve: props.content.vtkFarve,
                anskaffet: props.content.vtkAnskaffet,
                EjesAfNav: props.content.EjesAfNavigation,
                fabrikant: props.content.vtkFabrikat
            }
        } catch (e) {
            this.state = {
                id: 0,
                ejesAf: null,
                model: null,
                serienummer: null,
                farve: null,
                anskaffet: null,
                EjesAfNav: 0,
                fabrikant: null
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
        fetch(this.props.api + "Vaerktoejskasse",
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
                {console.log(this.props.haandvaerker)}
                <Select label={"EjesAf:"} selectItem={this.props.haandvaerker} className={"form-control"} type={'text'}
                        name={'vtkEjesAf'} defaultValue={this.state.EjesAfNav}/>
                <Input label={"Model:"} className={"form-control"} type={'text'} name={'vtkModel'}
                       defaultValue={this.state.model}/>
                <Input label={"Serienummer:"} className={"form-control"} type={'text'} name={'vtkSerienummer'}
                       defaultValue={this.state.serienummer}/>
                <Input label={"Fabrikant:"} className={"form-control"} type={'text'} name={'vtkFabrikat'}
                       defaultValue={this.state.fabrikant}/>
                <Input label={"Type:"} className={"form-control"} type={'text'} name={'vtkFarve'}
                       defaultValue={this.state.farve}/>
                <Input label={"Anskaffet:"} className={"form-control"} type={'date'} name={'vtAnskaffet'}
                       defaultValue={dateformat(this.state.anskaffet, "yyyy-mm-dd")}/>
    
                <div className={"form-group"}>
                    <button onClick={this.submitForm} className={"btn btn-primary"}>
                        submit
                    </button>
                </div>
            </div>
        )
    }
}

export default vaerktoejskasseForm