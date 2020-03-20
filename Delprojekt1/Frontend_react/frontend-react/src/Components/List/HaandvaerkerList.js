import React from "react";
import haandvaerkerJson from "../../testHaandvaerker"
import "./HaandvaerkerList.scss"
import dateformat from "dateformat";

class haandvaerkerList extends React.Component {
    constructor(props) {
        super(props);

    }

    deleteItem(Id) {
        console.log("deleting item with id: " + Id);
        fetch(this.props.api + "haandvaerker",
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({haandvaerkerId: Id})
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
            (this.items = arr.map((item) =>
                <tr>
                    <td>{item.haandvaerkerId}</td>
                    <td>{item.hvEfternavn}</td>
                    <td>{item.hvFornavn}</td>
                    <td>{dateformat(item.hvAnsaettelsedato, "yyyy-mm-dd")}</td>
                    <td>
                        <button type={"button"} className={"btn btn-link p-0"}
                                onClick={() => this.props.handleOnClick(item)}>Rediger
                        </button>
                    </td>
                    <td>
                        <button type={"button"} onClick={(e) => {
                            if (window.confirm('Are you sure you wish to delete this item?')) this.deleteItem(item.haandvaerkerId)
                        }} className={"btn btn-link p-0"}>
                            Slet
                        </button>
                    </td>
                </tr>));
        }
    };

    render() {

        if (this.props.showList === "haandvaerker") {
            this.setItems();
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