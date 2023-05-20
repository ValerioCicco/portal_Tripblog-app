import { Link } from "react-router-dom";
import "./Footer.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTiktok, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faMapPin, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";


const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="row pt-4">
                <div className="col-4">
                    <h4>SOCIAL NETWORK</h4>
                    <ul className="list-unstyled">
                        <li>
                            <FontAwesomeIcon icon={faFacebook} style={{ color: "white" }} />
                            <Link to="https://it-it.facebook.com/" style={{ color: "white", textDecoration: "none" }}> Facebook</Link>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faInstagram} style={{ color: "white" }} />
                            <Link to="https://www.instagram.com/" style={{ color: "white", textDecoration: "none" }}> Instagram</Link>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faTwitter} style={{ color: "white" }} />
                            <Link to="https://twitter.com/" style={{ color: "white", textDecoration: "none" }}> Twitter</Link>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faTiktok} style={{ color: "white" }} />
                            <Link to="https://tiktok.com/" style={{ color: "white", textDecoration: "none" }}> TikTok</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-4">
                    <h4>HEADQUARTER</h4>
                    <ul className="list-unstyled">
                        <li><FontAwesomeIcon icon={faMapPin} style={{ color: "white" }} /> Via Sparano 24, Bari</li>
                        
                    </ul>
                </div>
                <div className="col-4">
                    <h4>CONTATTI</h4>
                    <ul className="list-unstyled">
                        <li><FontAwesomeIcon icon={faPhone} style={{ color: "white" }} /> +39 0803341647</li>
                        <li><FontAwesomeIcon icon={faEnvelope} style={{ color: "white" }} /> trip.blog@gmail.com</li>
                    </ul>
                </div>
                <div className="footer-bottom">
                    <p className="text-xs-center p-white">
                        &copy; {new Date().getFullYear()} Tripblog App - All Right Reserved
                    </p>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
