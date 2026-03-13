import "./loginpage.css";

const Login = (props) => {
  const { onClickLogin } = props;

  return (
    <button type="button" className="button" onClick={onClickLogin}>
      Login
    </button>
  );
};

export default Login;
