import PropTypes from 'prop-types';

const Welcome = ({name, prodi, gender}) => {
  return(
    <h1>Hi {name} from {prodi} major. This is ReactJS. Gender: {gender}</h1>
  );
}

// function Welcome({name}) {
//   return(
//     <h1>Hi {name}. This is ReactJS</h1>
//   );
// }

Welcome.defaultProps = {
  gender: 'Male'
};

Welcome.propTypes = {
  name: PropTypes.string.isRequired,
  prodi: PropTypes.number,
  gender: PropTypes.string,
};

export default Welcome;
