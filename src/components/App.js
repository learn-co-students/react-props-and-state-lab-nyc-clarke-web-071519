import React from 'react'
import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (newType) => {
  // console.log(e.target) 
    this.setState({
      filters: {
        type: newType
      }
    })
  }
  //here I am calling onChangeType function
  //updating the state.filters.type by creating a newType state


  onFindPetsClick = (e) => {
    // console.log(e.target)
    let Url = (this.state.filters.type === 'all' ? '/api/pets' : `/api/pets?type=${this.state.filters.type}`)
    fetch(Url)
      .then(response => response.json())
      .then(petsArray => {
        this.setState({
          pets: petsArray
        })
      })
  }
  //calling the onFindPetsClick and defining a variable with the url
  //fetching the url then getting the response.json
  //after I am setting a petsArray to this states pet

  onAdoptPet = (id) => {
    this.setState( 
      {
      pets: this.state.pets.map(pet => {
        if (pet.id === id) {
          return { ...pet, isAdopted: true}
        } else {
          return pet
        }
      })
    });
  }
  //here the callback prop takes in the id when the user clicks the adopt pet button
  //saying if the pet id is equal to the id
  //return a copy of the original pet state with isAdopted true
  //else return the original pet object



  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters 

              onChangeType={this.onChangeType}
              //pass a callback prop onChangeType to <Filters/>
              //this callback needs to update App state.filters.type

              onFindPetsClick={this.onFindPetsClick}
              //filters needs a callback prop onFindPetsClick
              //when the filter component calls onFindPetsClick
              //app should fetch a list of pets
               />
              
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets}
              //giving the PetBrowser theis states pets props

               onAdoptPet={this.onAdoptPet}
               //onAdoptPet callback prop
                />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App