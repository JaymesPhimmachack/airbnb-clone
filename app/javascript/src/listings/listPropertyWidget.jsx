import React from 'react';
import ReactDOM from 'react-dom';
import { safeCredentials, handleErrors } from '@utils/fetchHelper';

class listPropertyWidget extends React.Component {

  render() {

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
    } = this.props.property;

    if (!this.props.show) {
      return null;
    }

    return (
      <div className="backdrop">
         <form onSubmit={this.props.handleSubmit}>
           <input name="title" type="text" className="form-control" placeholder="Title" value={title} onChange={(e) => this.props.handleChange(e)} required />
           <input name="description" type="text" className="form-control" placeholder="Description" value={description} onChange={(e) => this.props.handleChange(e)} required />
           <input name="city" type="text" className="form-control" placeholder="City" value={city} onChange={(e) => this.props.handleChange(e)} required />
           <input name="country" type="text" className="form-control" placeholder="Country" value={country} onChange={(e) => this.props.handleChange(e)} required />
           <input name="property_type" type="text" className="form-control" placeholder="Property Type" value={property_type} onChange={(e) => this.props.handleChange(e)} required />
           <input name="price_per_night" type="text" className="form-control" placeholder="Price Per Night" value={price_per_night} onChange={(e) => this.props.handleChange(e)} required />
           <input name="max_guests" type="text" className="form-control" placeholder="Max Guests" value={max_guests} onChange={(e) => this.props.handleChange(e)} required />
           <input name="bedrooms" type="text" className="form-control" placeholder="Bedrooms" value={bedrooms} onChange={(e) => this.props.handleChange(e)} required />
           <input name="beds" type="text" className="form-control" placeholder="Beds" value={beds} onChange={(e) => this.props.handleChange(e)} required />
           <input name="baths" type="text" className="form-control" placeholder="Baths" value={baths} onChange={(e) => this.props.handleChange(e)} required />
           <input name="image_url" type="text" className="form-control" placeholder="Image URL" value={image_url} onChange={(e) => this.props.handleChange(e)} required />
           <button type="button" className="btn btn-danger btn-block btn-lg" onClick={this.props.cancel} >Cancel</button><button type="submit" className="btn btn-danger btn-block btn-lg" >Save</button>
         </form>
       </div>
    );
  }
}

export default listPropertyWidget;
