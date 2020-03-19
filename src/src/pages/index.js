import React from "react"
import Layout from "../components/layout"
import AddressAutocomplete from "../components/addressAutocomplete"

// <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places"></script>

export default () => (
    <Layout>
        <AddressAutocomplete />
    </Layout>
)
