import "./logoutpage.css";

const Logout = (props) => {
  const { onClickLogout } = props;

  return (
    <button type="button" className="button" onClick={onClickLogout}>
      Logout
    </button>
  );
};

export default Logout;
