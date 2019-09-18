  
import React from 'react'

class Filters extends React.Component {
  
  handleChangeType = event => {
    this.props.onChangeType(event.target.value)
  }
  //calling the handleChangeType to this.props value

  
  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" 
          //the select should recieve an onChangeType that changes
          //the value of the select element
           onChange={this.handleChangeType}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.props.onFindPetsClick}>Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters