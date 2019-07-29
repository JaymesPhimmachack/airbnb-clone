import React from 'react';
import { handleErrors } from '@utils/fetchHelper';


class listingBookedWidget extends React.Component {
  state = {
    properties_listing: [],
  }
  componentDidMount() {
    /*fetch(`/api/booked_properties/${this.props.user_id}/bookings`)
      .then(handleErrors)
      .then(data => {
        this.setState({
          properties_listing: data.properties_listing,
        })
        console.log(this.state.properties_listing)
      })*/
  }
  render() {
    const { properties_listing } = this.state;

    if (properties_listing.length > 0) {

      properties_listing.map(property => {
        return (
          <React.Fragment>
                       <div key={property.id}>
                       <image src={property.image_url} />
                       <p>{property.title}</p>
                       <p>{property.description}</p>
                       <p>{property.userName}</p>
                       <p>{property.email}</p>
                       <p>{property.start_date}</p>
                       <p>{property.end_date}</p>
                       <p>BookedStatus {property.complete}</p>
                        </div>
      </React.Fragment>
        )
      })
    }

    return (
      <React.Fragment>
           <p>No Booked Properties</p>
      </React.Fragment>
    )
  }
}

export default listingBookedWidget
