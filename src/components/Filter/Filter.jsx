import PropTypes from 'prop-types';

const Filter = ({ value, onChangeFilter }) => {

    return (
      <div>
        <h4>Find contacts by name</h4>
        <input onChange={onChangeFilter} value={value} placeholder='Contact name'/>
      </div>
    );
    }

Filter.propTypes = {
  value: PropTypes.string,
  onChangeFilter: PropTypes.func.isRequired,
};
export default Filter;