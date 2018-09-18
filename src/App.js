const User = props => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.type),
    React.createElement("h2", {}, props.last_login)
  ]);
};
// class components has more flexibility
class App extends React.Component {
  handleTitleClick() {
    alert("you clicked title!");
  }
  render() {
    return React.createElement("div", {}, [
      React.createElement(
        "h1",
        { onClick: this.handleTitleClick },
        "Current user"
      ),
      React.createElement(User, {
        name: "Mike",
        type: "Admin",
        last_login: "09/19/18"
      }),
      React.createElement(User, {
        name: "Kim",
        type: "Admin",
        last_login: "09/19/18"
      })
    ]);
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
