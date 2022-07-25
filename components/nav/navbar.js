const NavBar = (props) => {
  const { username } = props;
  return (
    <div>
      NavBar
      <p>{username}</p>
      <ul>
        <li>Home</li>
        <li>My List</li>
      </ul>
      <nav>
        <div>
          <button>
            <p>{username}</p>
          </button>

          <div>
            <a>Sign out</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
