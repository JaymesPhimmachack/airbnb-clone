import React from 'react';
import { safeCredentials, handleErrors } from '@utils/fetchHelper';


class listingWidget extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user_properties: [],
      property: {}
    }
  }

  componentDidMount() {
    fetch(`/api/users/${this.props.user_id}/properties`)
      .then(handleErrors)
      .then(data => {
        this.setState({
          user_properties: data.user_properties,
        })
      })
  }

  handleDelete = (e) => {
    e.preventDefault()
    let id = e.target.parentNode.id
    console.log(id)
    /*fetch(`api/properties/${id}`, safeCredentials({
        method: 'DELETE'
      }))
      .then(handleErrors)
      .then(() => {
        fetch(`/api/users/${this.props.user_id}/properties`)
          .then(handleErrors)
          .then(data => {
            this.setState({
              user_properties: data.user_properties,
            })
          })
      })
      .catch(error => console.log(error));*/
  }

  handleEdit = (e) => {
    e.preventDefault()
    let id = e.target.parentNode.id

    this.props.toggleModal(e)
    fetch(`/api/properties/${id}/edit`)
      .then(handleErrors)
      .then(data => {
        this.props.getProperty(data);
      })
  }



  render() {
    if (this.state.user_properties.length > 0) {
      return (
        <React.Fragment>
                 { this.state.user_properties.map(property => {
                     return (
                       <div key={property.id} id={property.id}>
                       <img src={property.image_url} />
                       <p>{property.title}</p>
                       <p>{property.description}</p>
                        <button onClick={this.handleDelete}>Delete</button>
                        <button onClick={this.handleEdit}>Edit</button>
                        </div>
                    );
                 })
                 }
      </React.Fragment>
      )
    }
    return (
      <React.Fragment>

           <p>No Property Listing</p>
      </React.Fragment>
    )
  }
}

export default listingWidget
