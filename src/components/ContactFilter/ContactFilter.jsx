import React from 'react';
import css from '../ContactForm/ContactForm.module.scss';
import PropTypes from 'prop-types';
const ContactFilter = ({ filter, onChangeFilter }) => {
  return (
    <div className={css.filter_container}>
      <input
        type="text"
        placeholder="filter"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        className={css.form__input}
        id="filter"
        name="filter"
        value={filter}
        onChange={onChangeFilter}
        required
      />
      <label
        htmlFor="filter"
        className={`${css.form__label} ${css.filter_label}`}
      >
        Filter:
      </label>
    </div>
  );
};
ContactFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
export default ContactFilter;
