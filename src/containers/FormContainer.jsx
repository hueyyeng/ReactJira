import React, { Component } from "react";

/* Import Components */
import Input from "../components/Input";
import Button from "../components/Button";

const url = 'https://jewelpaymentech.atlassian.net/rest/agile/1.0/board/45/sprint?state=active'
const proxyUrl = "https://cors-anywhere.herokuapp.com/";  // Allow for CORS
const sprintGoalStyle = {
  maxWidth: 500
}


class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: {
        email: "",
        password: "",
      },
      disabledButton: true,
      userTasks: "List of tasks will be display here...",
      sprintGoal: "Active sprint goal goes here...",
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleTasks = this.handleTasks.bind(this);
    this.handleSprintGoal = this.handleSprintGoal.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  /* This lifecycle hook gets executed when the component mounts */

  handleEmail(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        currentUser: {
          ...prevState.currentUser,
          name: value
        }
      }),
      // () => console.log(this.state.currentUser)
    );
  }

  handlePassword(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        currentUser: {
          ...prevState.currentUser,
          name: value
        }
      }),
      // () => console.log(this.state.currentUser)
    );
  }

  handleTasks(issues) {
    return (
      <ol>
        {issues.map(value => {
          return (
            <li key={value['key']}>{value['key']} : {value['fields']['summary']}</li>
          )
        })}
      </ol>
    );
  }

  handleSprintGoal(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        sprintGoal: {
          ...prevState.sprintGoal,
          name: value
        }
      }),
      // () => console.log(this.state.sprintGoal)
    );
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    if (value) {
      this.setState(
        prevState => ({
          currentUser: {
            ...prevState.currentUser,
            [name]: value
          },
          disabledButton: (this.state.currentUser.email === "" || this.state.currentUser.password === "") ? true: false
        }),
        // () => console.log(this.state.currentUser)
        // () => console.log(this.state.disabledButton)
      );
    } else {
      console.log(this.state.disabledButton);
      this.setState({
        disabledButton: true
      });
    };
  }

  async handleFormSubmit(e) {
    let jiraAuthResponse = await this.handleJiraAuth(e);
    this.setState({sprintGoal: jiraAuthResponse['values'][0]['goal']})
    let activeSprintId =  jiraAuthResponse['values'][0]['id'];

    if (activeSprintId !== null) {
      let activeSprintUrl = `https://jewelpaymentech.atlassian.net/rest/agile/1.0/sprint/${activeSprintId}/issue?jql=assignee=currentuser()&fields=summary`

      // Retrieve tasks from active sprint
      let userData = this.state.currentUser;
      let headers = new Headers();
      headers.set('Authorization', 'Basic ' + Buffer.from(userData.email + ":" + userData.password).toString('base64'));
      headers.append("Content-Type", "application/json");
      
      return fetch((proxyUrl + activeSprintUrl), {
        method: "GET",
        headers: headers,
      })
      .then((response) => response.json())
      .then((responseData) => {
        let issues = responseData['issues'];
        this.setState({
          userTasks: this.handleTasks(issues)
        });
      })
      .catch(error => console.warn(error));
    } else {
      this.setState({
        userTasks: "Something went wrong... please try again later."
      })
    }
  }

  handleJiraAuth(e) {
    e.preventDefault();
    let userData = this.state.currentUser;
    let headers = new Headers();
    headers.set('Authorization', 'Basic ' + Buffer.from(userData.email + ":" + userData.password).toString('base64'));
    headers.append("Content-Type", "application/json");

    return fetch((proxyUrl + url), {
      method: "GET",
      headers: headers,
    })
    .then((response) => response.json())
    .then((responseData) => {
      return responseData;
    })
    .catch(error => console.warn(error));
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      currentUser: {
        email: "",
        password: "",
      },
      disabledButton: true
    });
  }

  render() {
    return (
      <form className="container-fluid" onSubmit={this.handleFormSubmit}>
        <Input
          inputtype={"text"}
          title={"Username (Email Address): "}
          name={"email"}
          value={this.state.currentUser.email}
          placeholder={"Enter your email"}
          onChange={this.handleInput}
        />{" "}
        {/* Email */}
        <Input
          inputtype={"text"}
          type="password"
          title={"Password (JIRA Auth Token): "}
          name={"password"}
          value={this.state.currentUser.password}
          placeholder={"Enter your password"}
          onChange={this.handleInput}
        />{" "}
        {/* Password */}
        <Button
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Submit"}
          style={buttonStyle}
          disabled={this.state.disabledButton}
        />{" "}
        {/* Submit */}
        <Button
          action={this.handleClearForm}
          type={"secondary"}
          title={"Clear"}
          style={buttonStyle}
        />{" "}
        {/* Clear the form */}
        <div>
          <h3>Sprint Goal:</h3>
        </div>
        <div>
          <div style={sprintGoalStyle}>{this.state.sprintGoal}</div>
        </div>
        {/* Sprint Goal */}
        <div>
          <h3>Tasks:</h3>
        </div>
        <div>
          {this.state.userTasks}
        </div>
        {/* Tasks */}
      </form>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default FormContainer;
