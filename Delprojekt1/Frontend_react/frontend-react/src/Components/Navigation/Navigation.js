﻿import React from "react";
import './Navigation.scss'


class Navigation extends React.Component {
    render() {
        return (
            <div className={"container mt-2 mb-2"}>
                <ul className={"nav"}>
                    <li>
                        <button type={"button"} className={"btn btn-link p-0"}
                                onClick={() => this.props.handleOnClick("haandvaerker")}>Håndværker
                        </button>
                    </li>
                    <li>
                        <button type={"button"} className={"btn btn-link p-0 pl-3"} onClick={() => this.props.handleOnClick("vaerktoej")}>
                            Værktøj
                        </button>
                    </li>
                    <li>
                        <button type={"button"} className={"btn btn-link p-0 pl-3"} onClick={() => this.props.handleOnClick("vaerktoejskasse")}>
                            Værktøjskasse
                        </button>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Navigation