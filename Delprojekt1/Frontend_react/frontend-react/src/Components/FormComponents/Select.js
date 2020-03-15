import React from "react";

class Select extends React.Component {

    constructor(props) {
        super(props);
        this.state = null;
        if (this.props.onChange != null && this.props.defaultValue) {
            this.state = {
                changeBinding: this.props.onChange,
                selectItems: [],
                inputVal: this.props.defaultValue
            };
        } else {
            this.state = {
                changeBinding: this.handleChange,
                selectItems: [],
                inputVal: this.props.defaultValue
            };
        }
        
    }
    componentDidMount() {
    }


    mapSelectItems() {
        var mapItems = [];
        console.log("selectItem:");
        console.log(this.props.selectItem);
        if(this.props.selectItem != null && this.props.type !== "vaerktojskasse")
        {
            console.log("foreach:");
            this.props.selectItem.forEach((item) => {
                console.log(item);
                mapItems.push(item);
            });
            
            this.items = mapItems.map((item) =>
              <option value={item.haandvaerkerId}>
                  {item.hvFornavn + " " + item.hvEfternavn}
              </option>   
            );
        }
        else if(this.props.selectItem != null){
            console.log("foreach:");
            this.props.selectItem.forEach((item) => {
                console.log(item);
                mapItems.push(item);
            });

            this.items = mapItems.map((item) =>
                <option value={item.vtkId}>
                    {item.vtkId}
                </option>
            );
        }
    }
    
    handleChange(event) {
        this.setState({inputVal: event.target.value});
    }

    render() {
        this.mapSelectItems();
        return (
            <div className={"form-group"}>
                <label>{this.props.label}</label>
                <select className={this.props.className} onChange={e => this.handleChange(e)} name={this.props.name} value={this.state.inputVal}>
                    {this.items}
                </select>
            </div>
        )
    }
}

export default Select