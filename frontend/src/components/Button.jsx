import PropTypes from "prop-types";

function Button({ value }) {
  return (
    <div className="flex justify-center items-center  ">
      <button
        type="button"
        className="border duration-300 hover:shadow-sm  hover:shadow-[#f6f1f1] border-white px-4 py-2 rounded-lg hover:bg-white/30 block w-44 md:h-36  md:w-[20rem] lg:w-[24rem] md:text-2xl text-white"
      >
        {value}
      </button>
    </div>
  );
}
Button.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Button;
