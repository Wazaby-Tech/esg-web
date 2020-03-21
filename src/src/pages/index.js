import React from "react"
import Layout from "../components/layout"
import AddressAutocomplete from "../components/addressAutocomplete"
import Youtube from "react-youtube"

// <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places"></script>

export default () => (
    <Layout>
        <Youtube
            videoId="kTkxZ18yldc"
            // https://www.youtube.com/watch?v=kTkxZ18yldc
        />
        <AddressAutocomplete />
    </Layout>
)
