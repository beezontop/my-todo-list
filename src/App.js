import React, { Component } from "react";
import Header from "./components/header";
import List from "./components/list";
import './css/app.css';

class App extends Component {
  state = {
    tempId: 0,
    tempVal: "",
    tempEdit: "",
    action: "Edit",
    items: [
      { id: 0, val: "sleep"},
      { id: 1, val: "eat"},
    ],
  };

  handleChange = (key, value) => {
    this.setState({ [key]: value });
  };

  handleCreate = () => {
    if (this.state.tempVal !== "") {
      let item = {
        id: 1 + Math.random(),
        val: this.state.tempVal,
      };

      const items = [...this.state.items];

      items.push(item);
      this.setState({ items, tempVal: "" });
    }
  };

  handleUpdate = (key, value) => {
    const items = [...this.state.items];
    const item = items.find((item) => item.id === key);
    item.val = value;
    this.setState({ items });
  };

  handleDelete = (i) => {
    let items = [...this.state.items];
    items = items.filter((item) => item !== i);
    this.setState({ items });
    
  };

  handleReset = () => {
    this.setState({ items: [] });
  };

  componentDidUpdate(){

    const emptyEl=document.getElementById('empty');

    if(this.state.items.length<1){
      emptyEl.className="d-block";
    }else if (this.state.items.length>0){
      emptyEl.className="d-none";
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <Header />
          <List onChange={this.handleChange} onCreate={this.handleCreate} onUpdate={this.handleUpdate} onReset={this.handleReset} onDelete={this.handleDelete} state={this.state}/>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
