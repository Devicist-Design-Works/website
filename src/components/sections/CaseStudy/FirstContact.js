import React from "react";
import inboxIcon from "../../../assets/images/inbox-icon.svg"


const FirstContact = (FirstContactContent) => {

  return (
    <section>
      <div className="container-sm">
        <h3 className=" ta-l reveal-from-bottom">First Contact</h3>
        <div className="first-contact-inner reveal-from-bottom">
          <div></div>
          <h4 className=" mt-0 email-subject">
            {FirstContactContent.subject}
            <svg
              id="email important icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 33.51 28.19"
              width="15"
              height="15"
              style={{ fill: "#F8CC4D", marginLeft: "8px" }}
            >
              <path d="M0,28.13c2.41-3.62,4.77-7.16,7.14-10.7,.62-.93,1.22-1.88,1.88-2.78,.33-.45,.2-.75-.07-1.15C6,9.11,3.08,4.71,.15,.31c-.04-.06-.06-.12-.12-.26C.3,.03,.52,0,.75,0,8.37,0,15.99,0,23.61,0c.41,0,.7,.05,.96,.45,2.89,4.39,5.81,8.76,8.73,13.12,.26,.38,.29,.63,.02,1.03-2.93,4.37-5.84,8.76-8.78,13.13-.15,.22-.48,.43-.73,.44-7.84,.02-15.68,.02-23.51,.01-.07,0-.14-.02-.3-.06Z" />
            </svg>
            <img
              src={inboxIcon}
              alt="inbox icon"
              width={45}
              className={"ml-8 "}
            />
          </h4>

          <p className="ta-l reveal-from-bottom text-color-primary">
            {FirstContactContent.greeting} <br/><br/>
            {FirstContactContent.body}
          </p>

          <div className="reveal-from-bottom"></div>
        </div>
      </div>
    </section>
  );
};


export default FirstContact;
