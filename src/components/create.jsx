import React, { Component } from "react";
import "../css/create.css";



class Create extends Component {
  render() {
    return (
      <div>
        <div className="d-flex justify-content-between controller">
          <input
            type="text"
            onChange={(e) =>
              this.props.onChange("tempVal", e.currentTarget.value)
            }
            value={this.props.state.tempVal}
            placeholder="Add task"
          />
          <button onClick={this.props.onCreate}>Add</button>
          <button onClick={this.props.onReset} className="btn-bg-red">
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Create;
