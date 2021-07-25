import React from "react";

function Filter(props) {
    return (
        <div className="Filter">
            <details>
                <summary>{props.title}</summary>
                { props.filters.map(filter =>  <label> <input type="checkbox" /> {filter}</label>) }
            </details>
        </div>
    )
}

export default Filter;