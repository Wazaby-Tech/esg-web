import React from 'react'
import addressAutocompleteStyles from './addressAutocomplete.module.css'

class AddressAutocomplete extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.initialState()
    this.handlePlaceSelect = this.handlePlaceSelect.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.autocomplete = null
  }

  componentDidMount() {
    this.autocomplete = new window.google.maps.places.Autocomplete(document.getElementById('autocomplete'), {})

    this.autocomplete.addListener("place_changed", this.handlePlaceSelect)
  }

  initialState() {
    return {
      name: '',
      askingPrice: 0,
      street_address: '',
      city: '',
      state: '',
      zip_code: '',
      googleMapLink: ''
    }
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    window.open("mailto:wazabytech@outlook.com?subject=Property%20Inquiry");
  }

  handlePlaceSelect() {
    let addressObject = this.autocomplete.getPlace()
    console.log(addressObject);
    let address = addressObject.address_components
    console.log(address);
    this.setState({
      name: addressObject.name,
      street_address: `${address[0].long_name} ${address[1].long_name}`,
      city: address[3].long_name,
      state: address[5].short_name,
      zip_code: address[7].short_name,
      googleMapLink: addressObject.url
    })
  }

  render() {
    return(
      <div>
        <h4>Enter your address</h4>
        <form onSubmit={this.handleSubmit}>
          <input id="autocomplete"
            className={addressAutocompleteStyles.inputField}
            ref="input"
            type="text"/>
          <input name={"askingPrice"}
            className={addressAutocompleteStyles.formField}
            placeholder="Enter Asking Price..."
            value={this.state.askingPrice}
            type="number" step="500" min="0" />
            <input 
              name={"name"}
              className={addressAutocompleteStyles.formField}
              value={this.state.name}
              placeholder={"Name"}
              onChange={this.handleChange}
            />
            <br/>
            <input 
              name={"street_address"}
              className={addressAutocompleteStyles.formField}
              value={this.state.street_address}
              placeholder={"Street Address"}
              onChange={this.handleChange}
            />
            <input 
              name={"city"}
              className={addressAutocompleteStyles.formField}
              value={this.state.city}
              placeholder={"City"}
              onChange={this.handleChange}
            />
            <br/>
            <input
              name={"state"}
              className={addressAutocompleteStyles.formField}
              value={this.state.state}
              placeholder={"State"}
              onChange={this.handleChange}
            />
            <input 
              name={"zip_code"}
              className={addressAutocompleteStyles.formField}
              value={this.state.zip_code}
              placeholder={"Zipcode"}
              onChange={this.handleChange}
            />
            <br />
            <button onSubmit={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }

}

export default AddressAutocomplete