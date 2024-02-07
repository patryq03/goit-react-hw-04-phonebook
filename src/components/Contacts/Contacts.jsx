import React  from 'react';
import PropTypes from 'prop-types';

const Contacts = ({ contacts, onRemoveContact }) => {

  return(
    <ul>
      {contacts.map(contact => (
        <li key={contact.id} id={contact.id}>
          {contact.name + ' : ' + contact.number}
          {
            <button
              type="button"
              name="delete"
              onClick={() => onRemoveContact(contact.id)}>
              Delete
            </button>
          }
        </li>
      ))}
    </ul>)
    };

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};

export default Contacts;