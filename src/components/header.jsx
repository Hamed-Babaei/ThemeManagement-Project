import { useThemeContext } from "../context";

const Header = () => {
  const theme = useThemeContext();
  const darkMode = theme.darkMode;

  const changeTheme = () => {
    theme.setDarkMode(!darkMode);
  }
  return (
    <header
      className={`navbar navbar-expand ${
        darkMode ? "navbar-dark bg-dark" : "bg-secondary navbar-light"
      }  shadow-sm`}
    >
      <div className="container">
        <ul className="navbar-nav">
          <li className="navbar-item">
            <a className="nav-link">صفحه اصلی</a>
          </li>
          <li className="navbar-item">
            <a className="nav-link">محصولات ما</a>
          </li>
          <li className="navbar-item">
            <a className="nav-link">درباره ما</a>
          </li>
          <li className="navbar-item">
            <a className="nav-link">ارتباط با ما</a>
          </li>
        </ul>
        <button onClick={changeTheme} className={`btn ${darkMode ? 'btn-light' : 'btn-dark'} `}>
            {darkMode ? 'روشن': 'تاریک'}
        </button>
      </div>
    </header>
  );
};

export default Header;
