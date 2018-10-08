import React from "react";
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.edit = this.edit.bind(this);
    this.remove = this.remove.bind(this);
  }
  edit() {
    alert("Edit!");
  }
  remove() {
    alert("Remove!");
  }
  render() {
    return (
      <div className="note">
        <p>Learn React</p>
        <span>
          <button onClick={this.edit} id="edit">
            <FaEdit />
          </button>
          <button onClick={this.remove} id="remove">
            <FaTrashAlt />
          </button>
        </span>
      </div>
    );
  }
}

export default Note;
