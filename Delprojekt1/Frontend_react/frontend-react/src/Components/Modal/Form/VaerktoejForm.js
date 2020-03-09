import React from "react";

class VaerktoejForm extends React.Component {
    constructor(props) {
        super(props);
        try {
            console.log("model: " + props.content);
            this.state = {
                id: props.content.vtId,
                model: props.content.vtModel
            }
        } catch (e) {
            this.state = {
                id: 0,
                model: ""
            }
        }
    }

    render() {
        return (
            <div id={'form'} className={"form"}>
                <div>
                    <input type={'hidden'} name={'vtId'} value={this.state.id}/>
                </div>
                <div className={"form-group"}>
                    <label>Model:</label>
                    <input className={"form-control"} type={'text'} name={'vtModel'} defaultValue={this.state.model}/>
                </div>
            </div>
        );
    }
}

export default VaerktoejForm;