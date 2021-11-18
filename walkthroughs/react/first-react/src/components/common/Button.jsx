const Button = (props) => {
  return (
    <button
      id={props.id}
      type={props.type || "button"}
      className={`btn ${props.className}`}
      onClick={props.onClick}
      onSubmit={props.onSubmit}
    >
      {props.children}
    </button>
  );
};

export default Button;
