import React from "react";

class  Input extends React.Component{
    constructor(props) {
        super(props);
        this.state = null;
        if(this.props.onChange != null)
        {
            this.state = {changeBinding:this.props.onChange};
        }
        else{
            this.state = {changeBinding:this.handleChange};
        }
        
        this.state += {inputVal:""}
    }
    handleChange(event) {
        this.setState({inputVal:event.target.value});
    };
    
    render() {
        return(
            <div className={"form-group"}>
                <label>{this.props.label}</label>
                <input className={this.props.className} type={this.props.type} onChange={this.state.changeBinding} name={this.props.name} defaultValue={this.props.defaultValue}/>
            </div>
        )
    }
}
export default Input