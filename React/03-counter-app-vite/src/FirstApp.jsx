import PropTypes from "prop-types";

const FirstApp = ({ title, subTitle, name }) => {
  return (
    <div>
      <h1 data-testid="test-title">{title}</h1>
      <p>{subTitle}</p>
      <p>{name}</p>
    </div>
  );
};

export default FirstApp;

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};

FirstApp.defaultProps = {
  //title: "No hay título",
  name: "Nombre o k ase",
};
