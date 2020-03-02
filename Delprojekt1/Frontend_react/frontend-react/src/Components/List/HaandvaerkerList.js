import React from "react";
import haandvaerkerJson from "../../testHaandvaerker"
import "./HaandvaerkerList.scss"

class haandvaerkerList extends React.Component {
    constructor(props) {
        super(props);
        let arr = [];
        haandvaerkerJson.haandvaerkere.forEach(function (jsonItem) {
            arr.push(jsonItem);
        });
        this.items = arr.map((item) =>
            <tr>
                <td>{item.haandvaerkerId}</td>
                <td>{item.hvEfternavn}</td>
                <td>{item.hvFornavn}</td>
                <td>{item.hvAnsaettelsedato}</td>
                <td><button type={"button"} className={"btn btn-link p-0"}>Rediger Værktøjskasse</button></td>
                <td><button type={"button"} className={"btn btn-link p-0"} onClick={() => this.props.handleOnClick(item)}>Rediger</button></td>
            </tr>);
    }

    render() {
        if (this.props.showList === "haandvaerker") {
            return (
                <div className={"container"}>
                    <table className={"table table-striped"}>
                        <thead>
                        <tr>
                            <th>
                                Id:
                            </th>
                            <th>
                                Efternavn:
                            </th>
                            <th>
                                Fornavn:
                            </th>
                            <th>
                                Ansættelses dato:
                            </th>
                            <th>
                                Værktøjskasse:
                            </th>
                            <th>
                                
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                            {this.items}
                        </tbody>
                    </table>
                </div>
            )
        } else {
            return null

        }
    }
}


export default haandvaerkerList