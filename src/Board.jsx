import React from "react";
import Note from "./Note";

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [
        {
          id: 0,
          note: "Eat spinach"
        },
        {
          id: 1,
          note: "Bunnies are coming"
        }
      ]
    };

    this.eachNote = this.eachNote.bind(this);
    this.update = this.update.bind(this);
  }

  update(newText, i) {
    console.log(i, newText);
    this.setState(prevState => ({
      notes: prevState.notes.map(
        note => (note.id !== i ? note : { ...note, note: newText })
      )
    }));
  }

  eachNote(note, i) {
    return (
      <Note key={i} index={i} onChange={this.update}>
        {note.note}
      </Note>
    );
  }

  render() {
    return <div className="board">{this.state.notes.map(this.eachNote)}</div>;
  }
}

export default Board;
