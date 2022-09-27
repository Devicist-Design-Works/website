import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import Mailchimp from "react-mailchimp-form";

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool,
};

const defaultProps = {
  ...SectionProps.defaults,
  split: false,
};

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {
  const outerClasses = classNames(
    "cta section center-content-mobile reveal-from-bottom",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",

    className
  );

  const innerClasses = classNames(
    "cta-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider",
    split && "cta-split"
  );

  return (
    <section {...props} className={outerClasses} id="contact">
      <div className="container">
        <div className={innerClasses}>
          <div className="cta-slogan">
            <h3 className="m-0">We'd love to chat, drop us a line!</h3>
            <p>
              <a href="mailto:info@devicist.com">info@devicist.com</a>
            </p>

            <p>
              Periodically, we release news about the studio and articles on{" "}
              <b>interaction design</b> and <b>fabrication</b>.<br /> Join our
              mailing list.
            </p>
          </div>
          <div>
            <Mailchimp
              action="https://devicist.us14.list-manage.com/subscribe/post?u=1960e060b6a123cf33b617dd7&amp;id=19f122e29b"
              fields={[
                {
                  name: "FNAME",
                  placeholder: "Name",
                  type: "text",
                  require: true,
                },
                {
                  name: "EMAIL",
                  placeholder: "Email",
                  type: "email",
                  require: true,
                },
              ]}
              messages={{
                sending: "Sending...",
                success: "Thank you for subscribing!",
                error: "An unexpected internal error has occurred.",
                empty: "You must write an e-mail.",
                duplicate: "Too many subscribe attempts for this email address",
                button: "Submit",
              }}
              className="form-input"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;
