const { Circle, CheckCircle } = require("react-feather");

const CheckBox = (props) => {
  const { checked, onClick } = props;
  return <div onClick={() => onClick()} className="cursor-pointer">{checked ? <CheckCircle /> : <Circle /> }</div>;
};

export default CheckBox
