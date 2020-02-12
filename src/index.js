import React, { Component } from "react";
import { render } from "react-dom";
import FormContainer from "./containers/FormContainer";
import logo from "./images/jpt_logo2.png"

const docTitle = "Get Tasks from JPT JIRA Current Active Sprint"
const creditStyle = {
  position: "absolute",
  bottom: 0,
  width: "100%",
  height: "60px"
}
const logoStyle = {
  maxWidth: "100%",
  maxHeight: "100%"
}

class App extends Component {
  componentDidMount() {
    document.title = docTitle
  }
  
  render() {
    return (
      <div className="test">
        <img src={logo} style={logoStyle} width="500" alt="logo" />
        <h2>{docTitle}</h2>
        <FormContainer />
        <div style={creditStyle}>
          Author: Huey Yeng | Artwork: <a href="https://www.irasutoya.com/">https://www.irasutoya.com/</a>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
