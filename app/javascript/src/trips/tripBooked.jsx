import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '@src/layout';
import { safeCredentials, handleErrors } from '@utils/fetchHelper';

class TripBooked extends React.Component {
  state = {
    trips: [],
  }
  componentDidMount() {
    fetch(`/api/users/${this.props.user_id}/bookings`)
      .then(handleErrors)
      .then(data => {
        /*this.setState({
          trips: data.trips,
        })*/
        console.log(data.trips)
      })
  }

  render() {
    const { trips } = this.state;

    return (
      <Layout>
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-9 col-lg-6 mx-auto my-4">
               <div>
                 {/*
                  trips.length > 0 ? trips.map(trip => {
                  return (
                  <div key={trip.id}>
                  <img src={trip.image_url} />
                   <p>{trip.title}</p>
                   <p>{trip.description}</p>
                   <p>Check In: {trip.start_date}</p>
                   <p>Check Out: {trip.end_date}</p>
                   {
                     trip.complete > 0 ? 
                     <button>View Booked Property</button> :
                   <div>
                   <button>Complete Booking</button>
                   <button>Cancel Booking</button>
                   </div>
                     
                   }
                  </div>
                  );
                  }) :  <p>No booked trip </p>
                      */
                 }
               </div> 
              </div>
            </div>
          </div>
        </Layout>
    );
  }
}

export default TripBooked;
