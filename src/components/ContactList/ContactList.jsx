import React from 'react';
import css from './ContactList.module.scss';
import PropTypes from 'prop-types';
const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <>
      <ul>
        {contacts.map(contact => {
          return (
            <li key={contact.id}>
              {contact.name}: {contact.number}
              <button
                onClick={() => onDeleteContact(contact.id)}
                className={css.button_30}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
