import React from "react"
import AddressAutocomplete from "../components/addressAutocomplete"

// <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places"></script>

export default () => (
    <div>
        <p>Enter your address:</p>
        <AddressAutocomplete />
    </div>
)
