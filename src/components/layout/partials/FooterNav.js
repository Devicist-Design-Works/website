import React from 'react';
import classNames from 'classnames';
import { Link } from "react-scroll";

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav {...props} className={classes}>
      <ul className="list-reset">
        <li>
          <Link to="portfolio" smooth={true} duration={500}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="process" smooth={true} duration={500}>
            Process
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;