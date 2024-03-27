const CustomButton = ({ title, containStyles, iconRight, type, onclick }) => (
  <button
    onClick={onclick}
    type={type || "button"}
    className={`inline-flex items-center text-base ${containStyles}`}
  >
    {title}
    {iconRight && <div className="ml-2">{iconRight}</div>}
  </button>
);

export default CustomButton;
