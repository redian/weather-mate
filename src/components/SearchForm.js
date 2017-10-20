import React from 'react';
import PropTypes from 'prop-types';
import Input from 'react-toolbox/lib/input/Input';
import Button from 'react-toolbox/lib/button/Button';

const sectionStyle = {
  marginLeft: "2.5rem",
  marginRight: "2.5rem",
}

const nearMeStyle = {
  textAlign: "center",
  paddingTop: "1rem",
}

const SearchForm = (props) => (
  <section style={sectionStyle}>
    <div style={nearMeStyle}>
      <Button 
        icon='near_me' 
        label='Near Me' 
        flat 
        primary 
        onClick={props.handleClick}/>
    </div>

    <div>
      <form onSubmit={props.handleSubmit}>
        <Input 
          type='text' 
          aria-label='Search'
          label='Search by City' 
          value={props.city} 
          onChange={props.handleInputChange} 
          maxLength={200} />
      </form>
    </div>
  </section>
);

export default SearchForm;

SearchForm.propTypes = {
  city: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired
}
