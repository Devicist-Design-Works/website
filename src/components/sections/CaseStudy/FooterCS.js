import React from "react";
import classNames from "classnames";
import Logo from "../../layout/partials/Logo";
import FooterNav from "./../../layout/partials/FooterNavCS";
import FooterSocial from "../../layout/partials/FooterSocial";

const FooterCS = ({ className, topOuterDivider, topDivider, ...props }) => {
  const classes = classNames(
    "site-footer center-content-mobile",
    topOuterDivider && "has-top-divider",
    className
  );

  return (
    <footer {...props} className={classes}>
      <div className="container">
        <div
          className={classNames(
            "site-footer-inner",
            topDivider && "has-top-divider"
          )}
        >
          <div className="footer-top space-between text-xxs">
            <Logo />
            <FooterSocial />
          </div>
          <div className="footer-bottom space-between text-xxs invert-order-desktop">
            <FooterNav />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterCS;
