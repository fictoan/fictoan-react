import React from "react";
import { Link } from "react-router-dom";
import icon from "../assets/images/logo/icon-ft-on-dp.svg";

const Footer = () => (
    <footer className="row content-padding-tiny bg-pearly-coke padding-top-tiny padding-bottom-tiny">
        <div className="portion one-fourth half-on-mobile">
            <Link to="/" className="margin-bottom-fixed">
                <img className="icon-large" src={icon} alt="Setu logo" />
            </Link>
            <p className="text-small">
                &copy;2019 BrokenTusk
                <br />
                Technologies Pvt. Ltd.
            </p>
        </div>

        <div className="portion one-fourth half-on-mobile">
            <p className="text-deep-purple text-small opacity-60">DEVELOPERS</p>
            <Link to="/tech" className="text-deep-purple">
                Tech
            </Link>
        </div>

        <div className="portion one-fourth half-on-mobile">
            <p className="text-deep-purple text-small opacity-60">COMPANY</p>
            <a className="text-deep-purple" href="mailto:hello@setu.co">
                Get in touch
            </a>
            <Link to="/careers" className="text-deep-purple">
                Careers{" "}
                <span
                    id="pill-hiring"
                    className="ff-button shape-rounded size-small bg-salmon-rouge text-deep-purple weight-400"
                >
                    We’re hiring!
                </span>
            </Link>
            <Link to="/about" className="text-deep-purple">
                About
            </Link>
        </div>

        <div className="portion one-fourth half-on-mobile">
            <p className="text-deep-purple text-small opacity-60">RESOURCES</p>
            <Link to="/privacy" className="text-deep-purple">
                Privacy policy
            </Link>
        </div>
    </footer>
);

export default Footer;
