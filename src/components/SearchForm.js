import React from 'react';
import PropTypes from 'prop-types';
import Input from 'react-toolbox/lib/input/Input';

const sectionStyle = {
  marginLeft: "2.5rem",
  marginRight: "2.5rem",
}
const SearchForm = (props) => (
  <section style={sectionStyle}>
    <form >
      <Input 
        type='text' 
        label='Search by City' 
        value={props.city} 
        onChange={props.handleInputChange} 
        maxLength={200} />
    </form>
  </section>
);

export default SearchForm;

SearchForm.propTypes = {
  city: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired
}
