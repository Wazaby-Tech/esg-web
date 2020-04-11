// require('custom-env').env();
import React from 'react'
import sgMail from '@sendgrid/mail'
import addressAutocompleteStyles from './addressAutocomplete.module.css'

class AddressAutocomplete extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.initialState()
    this.handlePlaceSelect = this.handlePlaceSelect.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.autocomplete = null
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  }

  componentDidMount() {
    this.autocomplete = new window.google.maps.places.Autocomplete(document.getElementById('autocomplete'), {})

    this.autocomplete.addListener("place_changed", this.handlePlaceSelect)
  }

  initialState() {
    return {
      email: '',
      asking_price: '1000',
      name: '',
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
    event.preventDefault();
    let emailBody = `You have a property inquiry from ${this.state.email} with asking price of $${this.state.asking_price} for:\n\n${this.state.name}.`;
    const msg = {
      to: 'wazabytech@outlook.com',
      from: 'wazabytech@outlook.com',
      subject: 'Property Inquiry',
      text: emailBody,
      html: `<p>${emailBody}</p>`,
    };
    sgMail.send(msg);
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
            className={addressAutocompleteStyles.addressField}
            ref="input"
            type="text"/>
            <button onSubmit={this.handleSubmit}>Get Cash Offer</button>
            <table>
              <tr>
                <td>Email Address:</td>
                <td>
                  <input id="email-address"
                    className={addressAutocompleteStyles.inputField}
                    placeholder="Enter email address..."
                    type="email" />
                </td>
              </tr>
              <tr>
                <td>Asking Price:</td>
                <td>$
                  <input id="asking-price"
                    className={addressAutocompleteStyles.inputField}
                    min="1000" placeholder="Enter asking price..."
                    type="number" />
                </td>
              </tr>
            </table>
                <input type="hidden"
                name={"name"}
                className={addressAutocompleteStyles.formField}
                value={this.state.name}
                placeholder={"Name"}
                onChange={this.handleChange}
              />
                <input type="hidden"
                name={"street_address"}
                className={addressAutocompleteStyles.formField}
                value={this.state.street_address}
                placeholder={"Street Address"}
                onChange={this.handleChange}
              />
                <input type="hidden"
                  name={"city"}
                  className={addressAutocompleteStyles.formField}
                  value={this.state.city}
                  placeholder={"City"}
                  onChange={this.handleChange}
                />
                <input type="hidden"
                  name={"state"}
                  className={addressAutocompleteStyles.formField}
                  value={this.state.state}
                  placeholder={"State"}
                  onChange={this.handleChange}
                />
                <input type="hidden"
                  name={"zip_code"}
                  className={addressAutocompleteStyles.formField}
                  value={this.state.zip_code}
                  placeholder={"Zipcode"}
                  onChange={this.handleChange}
                />
        </form>
      </div>
    )
  }

}

export default AddressAutocomplete