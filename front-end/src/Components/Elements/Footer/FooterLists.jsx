import React from "react";
import { Link } from "react-router-dom";

const FooterLists = (props) => {
    return (
        <div>
            <h6 className=" capitalize text-2xl mb-2 ">{props.title}</h6>{" "}
            <ul>
                {props.child.map((child, index) => {
                    return (
                        <li key={index} className=" capitalize py-1 ">
                            <Link to={child.url}>
                                {child.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>{" "}
        </div>
    );
};

export default FooterLists;
