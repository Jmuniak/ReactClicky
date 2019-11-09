import React from "react";

// If we want a child component to update or pass data to its parent, we can create a method inside the parent for the update
// Then bind the method to the parent, and pass it to the child as a prop
function CounterCard(props) {
    return (
        <div className="card">
            <p className="clicker">Click Count: {props.clickCount}</p>
            <div>
                <button className="btn btn-primary btn-sm" type="button" onClick={props.handleIncrement}>
                    Increment Count
            </button>
            </div>
            <div>
                <button className="btn btn-danger btn-sm" type="button" onClick={props.handleDecrement}>
                    Decrement Count
            </button>
            </div>
        </div>
    );
}

export default CounterCard;