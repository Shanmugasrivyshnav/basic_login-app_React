import "./messpage.css";

const Message = (props) => {
  const { isLoggedIn } = props;

  return (
    <h1 className="message">{isLoggedIn ? "Welcome User" : "Please Login"}Here</h1>
<h1 className='message'>Good to you {isLoggedIn ? "Welcome User" : "Please Login"}</h1
  );
};

export default Message;
