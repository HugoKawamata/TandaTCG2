import React from "react";
import { Link } from "react-router-dom";

// type Props = {
//     userDetails: {},
// }

export default (props) => (
    <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
        <div className="jumbotron jumbotron-fluid bg-transparent">
            <div className="contatiner secondary-color">
                <h1 className="display-4">Tanda TCG</h1>
                {props.userDetails == null ? <Login /> : <Main />}
            </div>
        </div>
    </div>
);