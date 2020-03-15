import React, {Component} from "react";
import dateformat from "dateformat";

class Vaerktoejskasse extends Component{
    constructor(props) {
        super(props);
        console.log("kasse");
    }
    deleteItem(Id) {
        console.log("deleting item with id: " + Id);
        fetch(this.props.api + "vaerktoejskasse",
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({vtkId: Id})
            }).then(response => {
            console.log(response);
        }).then(() => {
            this.props.fetchList();
        });

    }
    setItems = () => {
        let arr = [];
        if (this.props.list.length > 0) {
            this.props.list.forEach(function (jsonItem) {
                arr.push(jsonItem);
            });
            console.log(arr);
            (this.items = arr.map((item) =>
                <tr>
                    <td>{item.vtkId}</td>
                    <td>{dateformat(item.vtkAnskaffet, "yyyy-mm-dd")}</td>
                    <td>{item.vtkEjesAf}</td>
                    <td>{item.vtkModel}</td>
                    <td>{item.vtkSerienummer}</td>
                    <td>{item.vtkFabrikat}</td>
                    <td>{item.vtkFarve}</td>
                    <td>
                        <button type={"button"} className={"btn btn-link p-0"}
                                onClick={() => this.props.handleOnClick(item)}>Rediger
                        </button>
                    </td>
                    <td>
                        <button type={"button"} onClick={(e) => {
                            if (window.confirm('Are you sure you wish to delete this item?')) this.deleteItem(item.vtkId)
                        }} className={"btn btn-link p-0"}>
                            Slet
                        </button>
                    </td>
                </tr>));
        }
    };
    
    
    render() {
            if (this.props.showList === "vaerktoejskasse") {
            this.setItems();
            return (
                <div className={"container"}>
                    <table className={"table table-striped"}>
                        <thead>
                        <tr>
                            <th>
                                ID:
                            </th>
                            <th>
                                Anskaffet:
                            </th>
                            <th>
                                Ejes af:
                            </th>
                            <th>
                                Serienummer:
                            </th>
                            <th>
                                Fabrikant:
                            </th>
                            <th>
                                Farve:
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
            );
        } else {
            return null;
        }
    }
}

export default Vaerktoejskasse