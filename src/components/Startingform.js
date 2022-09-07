
import React from "react";
import Updatedform from "./Updatedform";
import Table from "./Table";

class Startingform extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
          items: [],
          runningTask: {
          firstname: "",
          lastname: "",
          key: "",
          },
        };

        this.deleteItem = this.deleteItem.bind(this);
      }

   
  handleInput = (e) => {
    if (e.target.name === "firstname") {
      this.setState({
        runningTask: {
          ...this.state.runningTask,
          firstname: e.target.value,
          key: Date.now(),
        },
      });
    }

    if (e.target.name === "lastname") {
      this.setState({
        runningTask: {
          ...this.state.runningTask,
          lastname: e.target.value,
          key: Date.now(),
        },
      });
    }
  };



addItem = (e) => {
    e.preventDefault();

    if (
      this.state.runningTask.firstname !== "" &&
      this.state.runningTask.lastname !== ""
    ) {
      this.setState({
        items: [...this.state.items, this.state.runningTask],

        runningTask: {
          firstname: "",
          lastname: "",
          key: "",
        },
      });
    }
  };


  deleteItem(key) {
    const removedItems = this.state.items.filter((item) => item.key !== key);
    this.setState({
      items: removedItems,
    });
  }

  // setUpdate(data1) {
  //   console.log(data1);
  // }

  updateItem(data) {
    this.setState({
      items: data,
    });
  }




    render() {
        return (
          <div className="forming_list">
          <Updatedform 
                 items={this.state.items}
                 setUpdate={(data1) => this.setUpdate(data1)}
                deleteItem={this.deleteItem}
                updateItem={(data) => this.updateItem(data)}
          />
            <form id="Updated-form" onSubmit={this.addItem}>
              <input
                type="text"
                className="starting_fname"
                value={this.state.runningTask.firstname}
                onChange={this.handleInput}
                placeholder="Enter First Name"
                name="firstname"
              ></input>
              
              <input
                type="text"
                className="starting_lname"
                value={this.state.runningTask.lastname}
               onChange={this.handleInput}
                placeholder="Enter Last Name"
                name="lastname"
              ></input>
             
              <button
                id="add"
                disabled={
                  this.state.runningTask.firstname === "" ||
                  this.state.runningTask.lastname === ""
                }
              >
                Add
              </button>
            </form>
            <Table tableItems={this.state.items} />
          </div>
        );
      }

}

export default Startingform;

