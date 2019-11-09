import React from "react";
import CounterCard from "./CounterCard";

// By extending the React.Component class, Counter inherits functionality from it
class Counter extends React.Component {
    // Setting the initial state of the Counter component
    state = {
        clickCount: 0
    }

    // handleIncrement increases this.state.count by 1
    handleIncrement = () => {
        // We always use the setState method to update a component's state
        this.setState({ clickCount: this.state.clickCount + 1 });
    };

    // handleDecrement decreases this.state.count by 1
    handleDecrement = () => {
        // We always use the setState method to update a component's state
        this.setState({ clickCount: this.state.clickCount - 1 });
    };

    // The render method returns the JSX that should be rendered
    render() {
        return (
            <div className="card text-center">
                <CounterCard
                    clickCount={this.state.clickCount}
                    handleIncrement={this.handleIncrement}
                    handleDecrement={this.handleDecrement}
                />

            </div>
        );
    }
}

export default Counter;