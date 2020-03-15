import React from "react";
import dateformat from "dateformat";

class vaerktoejListe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {list: this.props.list}
    }

    deleteItem(Item) {
        console.log("deleting item with id: " + Item);
        fetch(this.props.api + "Vaerktoej",
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({vtId: Item})
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
                    <td>{item.vtId}</td>
                    <td>{item.vtModel}</td>
                    <td>{item.vtFabrikat}</td>
                    <td>{item.vtType}</td>
                    <td>{item.vtSerienr}</td>
                    <td>{item.liggerIvtk}</td>
                    <td>{dateformat(item.vtAnskaffet, "yyyy-mm-dd")}</td>
                    <td>
                        <button type={"button"} className={"btn btn-link p-0"}
                                onClick={() => this.props.handleOnClick(item)}>Rediger
                        </button>
                    </td>
                    <td>
                        <button type={"button"} onClick={(e) => {
                            if (window.confirm('Are you sure you wish to delete this item?')) this.deleteItem(item.vtId)
                        }} className={"btn btn-link p-0"}>
                            Slet
                        </button>
                    </td>
                </tr>));
        }
    };

    render() {
        if (this.props.showList === "vaerktoej") {
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
                                Model:
                            </th>
                            <th>
                                Fabrikant:
                            </th>
                            <th>
                                Type:
                            </th>
                            <th>
                                Serienummer:
                            </th>
                            <th>
                                Ligger i:
                            </th>
                            <th>
                                Anskaffet:
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

export default vaerktoejListe