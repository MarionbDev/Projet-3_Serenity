import PropTypes from "prop-types";

function HeaderPreparation({ text, color }) {
  return (
    <div
      className={`flex justify-center items-center text-white rounded-xl m-8 ${color} p-4 h-20 text-xl mt-auto`}
    >
      {text}
    </div>
  );
}

HeaderPreparation.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default HeaderPreparation;
