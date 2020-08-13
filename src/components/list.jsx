import React, { Component } from "react";
import Create from "./create";
import '../css/list.css';

class List extends Component {
  render() {
    const { onChange, onCreate, onUpdate, onDelete, onReset , state } = this.props;

    let items = state.items.map((i) => (
      <li key={i.id} id={i.id}>
        <input
          type="text"
          value={i.val}
          onChange={(e) => onUpdate(i.id, e.currentTarget.value)}
          className="item"
        />
        <button onClick={() => onDelete(i)} className="btn-delete">
          X
        </button>
      </li>
    ));

    return (
      <React.Fragment>
        <ul>{items}</ul>
        <div id="empty" className="d-none">No tasks!</div>
        <Create state={state} onChange={onChange} onCreate={onCreate} onReset={onReset}/>
      </React.Fragment>
    );
  }
}

export default List;
