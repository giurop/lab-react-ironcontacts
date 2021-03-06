import React, { Component } from "react";
import Image from './Image';

class TableBody extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <tbody>
        { this.props.actorsContacts.map((oneContact, idx) => {
          return (
            <tr>
              <td key={`tbodypic-${idx}`}>
                <Image picUrl={oneContact.pictureUrl} style={{width: "100px"}} />
              </td>
              <td key={`tbodyname-${idx}`}>{oneContact.name}</td>
              <td key={`tbodypop-${idx}`}>{oneContact.popularity.toFixed(2)}</td>
              <td key={`tbodydel-${idx}`}>
                <button onClick={() => this.props.clickToDelete(idx)}>Delete</button>
              </td>
            </tr>
          )
        }
        )}
      </tbody>
    )
  }
}

export default TableBody;