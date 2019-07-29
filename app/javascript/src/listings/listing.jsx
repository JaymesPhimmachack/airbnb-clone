import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '@src/layout';
import BookedPropertyWidget from './bookedPropertyWidget';
import ListedPropertyWidget from './listedPropertyWidget';
import ListPropertyWidget from './listPropertyWidget';
import { safeCredentials, handleErrors } from '@utils/fetchHelper';

class Listing extends React.Component {

  state = {
    isOpen: false,
    title: '',
    description: '',
    city: '',
    country: '',
    property_type: '',
    image_url: '',
    price_per_night: '',
    max_guests: '',
    bedrooms: '',
    beds: '',
    baths: '',
    error: '',
    trigger: null
  }

  componentDidMount() {

  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  getProperty = (data) => {
    this.setState({
      property: data.property
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  handleCancel = (e) => {
    this.setState({
      title: '',
      description: '',
      city: '',
      country: '',
      property_type: '',
      image_url: '',
      price_per_night: '',
      max_guests: '',
      bedrooms: '',
      beds: '',
      baths: ''
    });
    this.toggleModal()
  }

  handleSubmit = (e) => {

    if (e) { e.preventDefault(); }

    const {
      title,
      description,
      city,
      country,
      property_type,
      image_url,
      price_per_night,
      max_guests,
      bedrooms,
      beds,
      baths
    } = this.state;

    this.setState({
      error: '',
    });

    fetch('/api/properties', safeCredentials({
        method: 'POST',
        body: JSON.stringify({
          property: {
            title: title,
            description: description,
            city: city,
            country: country,
            property_type: property_type,
            image_url: image_url,
            price_per_night: price_per_night,
            max_guests: max_guests,
            bedrooms: bedrooms,
            beds: beds,
            baths: baths
          }
        })
      }))
      .then(handleErrors)
      .then(data => {
        console.log(data.success)
        if (data.success) {
          this.setState({
            title: '',
            description: '',
            city: '',
            country: '',
            property_type: '',
            image_url: '',
            price_per_night: '',
            max_guests: '',
            bedrooms: '',
            beds: '',
            baths: ''
          })
          this.toggleModal()
        }
      })
      .catch(error => {
        this.setState({
          error: 'Could not add property.',
        })
      })

  }


  render() {

    return (
      <Layout>
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-9 col-lg-6 mx-auto my-4">
                <div className="border p-4">
                  <p className="mb-0">List your place</p>
                  <p className="mb-0">Earn up to 2,223 a month</p>
                </div>
                <div className="border p-4">
                  <button onClick={this.toggleModal} className="mb-0">House icon</button>
                  <p className="mb-0">List Property</p>
                  <ListPropertyWidget show={this.state.isOpen} cancel={this.handleCancel} handleSubmit={this.handleSubmit} handleChange={this.handleChange} property={this.state} />
                </div>
              </div>
            </div>
             <div className="row">
              <div className="col-12 col-md-9 col-lg-6 mx-auto my-4">
                 <p>Booked Properties</p>
                <BookedPropertyWidget user_id={this.props.user_id} />
              </div><
              /div>
             <div className="row">
              <div className="col-12 col-md-9 col-lg-6 mx-auto my-4">
                 <p>Listed Properties</p>
                <ListedPropertyWidget user_id={this.props.user_id} getProperty={this.getProperty} toggleModal={this.toggleModal} />
              </div>
            </div>
          </div>
        </Layout>
    );
  }
}
export default Listing;
