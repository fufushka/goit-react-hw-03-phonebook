import PropTypes from 'prop-types';
import React, { Component } from 'react';
import css from './ContactForm.module.scss';
export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  onSubmitForm = event => {
    event.preventDefault();
    if (this.state.number === '') {
      alert('Please enter number');
      return;
    }
    this.props.onAddContact(this.state);
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <>
        <form className={css.form} onSubmit={this.onSubmitForm}>
          <input
            type="text"
            placeholder="Name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            className={css.form__input}
            // pattern="^[a\-zA\-Zа\-яА-Я]+((['\-][a\-zA\-Zа\-яА\-Я ])?[a\-zA\-Zа\-яА\-Я]*)*$"
            id="name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
          <label htmlFor="name" className={css.form__label}>
            Name:
          </label>

          <input
            type="tel"
            name="number"
            placeholder="Number"
            className={css.form__input}
            id="email"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            // pattern="^\+?\d{1,4}[#\-.\s]?\(?\d{1,3}\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}$"
            value={this.state.number}
            onChange={this.handleChange}
          />
          <label htmlFor="email" className={css.form__label}>
            Number
          </label>

          <button type="submit" className={css.button_56}>
            Add contact
          </button>
        </form>
      </>
    );
  }
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};
