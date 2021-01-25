import React from "react";
import { Link } from "react-router-dom";


class Footer extends React.Component {
  render() {
    return (
      <div>
        <head>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"
                integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossorigin="anonymous" />
                <link rel="stylesheet" href="https://use.fontwesome.com/releases/v5.4.1/css/all.css" />
        </head>
          <footer id="footer">
          <div className="footer--text">
          <Link className="footer--a" to="/"> <p> KICKING IT WITH TYREK ! SNEAKER HEAD WITH COLLECTABLES!   &copy;{" "}</p></Link>
            
            
            
  
          </div>

          <div className="footer--socialLinks">
           <a className="social" href="https://github.com/TyrekThompson" target="_blank" rel="noopener noreferrer">
           <i class="fab fa-github"></i>
           </a>
           <a className="social" href="https://www.linkedin.com/in/tyrek-thompson-306164202/" target="_blank" rel="noopener noreferrer">
           <i class="fab fa-linkedin"></i>
           </a>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
