import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo5.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/fitrianurfatmawati/">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=fitrianurfatmawati701@gmail.com">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="https://www.instagram.com/fitrianurfa_12/">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p></p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
