import React from "react";
class Updatedform extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          ArrayList: props.items,
           Update_it: true,
        };
        this.setUpdate = this.setUpdate.bind(this);
        this.updateItem = this.updateItem.bind(this);
      }


      static getDerivedStateFromProps(props, state) {
        if (state.Update_it) {
          return {
            ArrayList: state.ArrayList,
           Update_it: false,
          };
        } else if (props.items !== state.ArrayList) {
          return {
            ArrayList: props.items,
          };
        }
    
        return null;
      }



      setUpdate(element, key) {
  
        let newArray = [...this.state.ArrayList];
        const index = newArray.findIndex((i) => i.key === key);
        console.log(index);
        const new_one_create = {
          firstname: newArray[index].firstname,
          lastname: newArray[index].lastname,
          key: key,
        };
    
        if (element.target.name === "firstname") {
          new_one_create.firstname = element.target.value;
    
        }
        if (element.target.name === "lastname") {
          new_one_create.lastname = element.target.value;
        }
      
    
        newArray.splice(index, 1, new_one_create);
    
        this.setState({
          ArrayList: newArray,
         Update_it: true,
        });
      }

      updateItem(element, key) {
        this.props.updateItem(this.state.ArrayList);
      }


      render() {
  
        return (
          <div>
            {this.state.ArrayList.map((item, index) => {
              return (
                <div className="list_items" key={item.key}>
                  <p>
                    <input
                      type="text"
                     className="updated_fname"
                       value={item.firstname}
                      name="firstname"
           
                      onChange={(e) => {
                        this.setUpdate(e, item.key);
                      }}
    
                    ></input>
                    <input
                      type="text"
                      className="updated_lname"
                      value={item.lastname}
                      id={item}
                      name="lastname"
                     
                      onChange={(e) => {
                        this.setUpdate(e, item.key);
                      }}
                    ></input>
    
                    <button onClick={() => this.props.deleteItem(item.key)} className="remove">
                      Remove
                    </button>
                    <button
                     
                      onClick={() => this.updateItem(item.key)}
                      className="edit"
                    >
                      Edit
                    </button>
                  </p>
                </div>
              );
            })}
          </div>
        );
      }

}
export default Updatedform;





