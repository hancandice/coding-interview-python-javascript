const React = require("react");
const ReactDOM = require("react-dom");

// ES6
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: [], open: false };
    this.onOpen = this.onOpen.bind(this);
    this.onClose = this.onClose.bind(this);
    this.saveToDo = this.saveToDo.bind(this);
    this.inputRef = React.createRef();
  }

  async componentDidMount() {
    // fetch and json
    const res = await fetch("http://localhost:3000/todos");
    const json = await res.json();
    this.setState({ todos: json });
  }

  async saveToDo(e) {
    e.preventDefault();
    const options = {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ todo: this.inputRef.current.value }),
    };

    const res = await fetch("http://localhost:3000/todos", options);
    const json = await res.json();
    this.setState({ todos: json });
    this.inputRef.current.value = null;
    return false;
  }

  onOpen(item) {
    this.setState(
      Object.assign({}, this.state, { open: true, clickedItem: item })
    );
  }

  onClose() {
    this.setState(Object.assign({}, this.state, { open: false }));
  }

  render() {
    return (
      <form onSubmit={this.saveToDo}>
        <ul>
          {this.state.todos.map((todo, i) => (
            <li key={i} onClick={() => this.onOpen(todo)}>
              {todo}
            </li>
          ))}
        </ul>
        <input placeholder="add todo" ref={this.inputRef} />
        <Modal
          open={this.state.open}
          onClose={this.onClose}
          content={this.state.clickedItem}
        ></Modal>
      </form>
    );
  }
}

let node = null;

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
}
