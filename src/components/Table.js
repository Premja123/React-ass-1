import React from "react";

class Table extends React.Component {
    render() {
      return (
        <div>
          <table className="list">
            <thead>
              <tr>
                <th className="table_1">
                  <b>SLNO</b>
                </th>
  
                <th className="table_2">
                  <b>FirstName </b>
                </th>
  
                <th className="table_3">
                  <b>LastName </b>
                </th>
              </tr>
            </thead>
  
          
            {this.props.tableItems.map((item, index) => {
              return (
                //key={item.key}
                <tbody key={item.key}>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.firstname}</td>
                    <td>{item.lastname}</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      );
    }
  }

  export default Table;
  







