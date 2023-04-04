import PropTypes from "prop-types";

const FirstApp = ({ title, name }) => {
  return (
    <div>
      {title} {name}
    </div>
  );
};

export default FirstApp;

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
  title: "No hay título",
  name: "Hello there",
};
