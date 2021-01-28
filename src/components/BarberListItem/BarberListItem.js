import React, { Component } from 'react';
import BarberListContext from '../../contexts/BarberListContext';
import BarberApiService from '../../services/barber-api-service';
import { Link } from 'react-router-dom';

// handleEditBarber = evt => {
//   const { setBarber } = this.context;
//   const { barber } = this.context;
//   evt.preventDefault();
//   const barberToEdit = JSON.stringify({
//     barber_name: this.context.barber.barber_name,
//     barber_location: this.context.barber.barber_location,
//     services: this.context.barber.services,
//     phone_number: this.context.barber.phone_number,
//     email: this.context.barber.email,
//   });

//   let param = this.props.match.params.barber_id;
//   BarberApiService.patchBarber(
//     evt.target.barber_name.value,
//     evt.target.barber_location.value,
//     services,
//     evt.target.phone_number.value,
//     evt.target.email.value
//   )
//     .then(res => this.context.setBarber(res))
//     .catch(this.context.setError);
// };
export default class BarberListItem extends Component {
  static contextType = BarberListContext;

  handleDeleteBarber = barber_id => {
    const { removeFromBarberList } = this.context;
    console.log(barber_id);
    BarberApiService.deleteBarber(barber_id)
      .then(res => {
        removeFromBarberList(barber_id);
      })
      .catch(this.context.setError);
  };

  render() {
    const { barber } = this.props;
    // const { handleDeleteBarber } = this.props;
    // const { key } = this.props;
    return (
      // <Link to={`/barber-profile/${key}`} className="BarberListItem">
      <div className="BarberListItem__details" value={barber.barber_id}>
        <h2 className="BarberListItem__heading" value={barber.barber_name}>
          {barber.barber_name}
        </h2>
        <h3 className="Services__label">Services Offered</h3>
        <p className="BarberListItem__services" value={barber.services}>
          {barber.services}
        </p>
        <div className="BarberListItem__description">
          <div className="BarberListItem__item" value={barber.barber_location}>
            {barber.barber_location}
          </div>
          <div className="BarberListItem__item" value={barber.phone_number}>
            {barber.phone_number}
          </div>
          <div className="BarberListItem__item" value={barber.email}>
            {barber.email}
          </div>
        </div>
        <Link to={`/edit-barber/${barber.barber_id}`}>
          <button type="button" className="editButton">
            Edit
          </button>
        </Link>
        <button
          type="button"
          className="deleteButton"
          onClick={() => this.handleDeleteBarber(barber.barber_id)}
        >
          Delete
        </button>
      </div>
      // </Link>
    );
  }
}

// function truncate(text) {
//   const words = text.split(' ');

//   if (words.length > 10) {
//     return words.slice(0, 10).join(' ') + ' ...';
//   }

//   return text;
// }
