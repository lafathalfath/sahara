import { Col, Container, Row } from "react-bootstrap"
import { FaPhone, FaGlobe, FaMapMarkerAlt, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom"

const FooterComponent = () => {
  return (
    <div className="footer pt-5">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg="5">
            <h3 className="fw-bold">Contact</h3>
            <div className="no mt-3">
              <Link className="text-decoration-none">
                <FaPhone />
                <p className="m-0">+62 812-1269-1529</p>
              </Link>
            </div>
            <div className="mail mt-3">
              <Link className="text-decoration-none">
                <MdEmail />
                <p className="m-0">saharagraphics@gmail.com</p>
              </Link>
            </div>
            <div className="mail mt-3">
              <Link className="text-decoration-none">
                <FaGlobe />
                <p className="m-0">saharagraphics.keanu</p>
              </Link>
            </div>
            <div className="mail mt-3">
              <Link className="text-decoration-none">
                <FaMapMarkerAlt />
                <p className="m-0">Kota Bogor, Jawa Barat 16143</p>
              </Link>
            </div>
          </Col>
          <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
            <h5 className="fw-bold">Menu</h5>
              <Link to="">Home</Link>
              <Link to="catalog">Catalog</Link>
              <Link to="freebies">Freebies</Link>
              <Link to="about">About</Link>
              <Link to="contact">Contact</Link>
          </Col>
          <Col lg="4" className="mt-lg-0 mt-5 ">
            <div className="icon mb-3 text-left d-flex justify-content-end">
              <FaInstagram size={35} />
              <FaWhatsapp size={35} className="ms-2" />
              <FaXTwitter size={35} className="ms-2"/>
            </div>
            <div className="subscribes d-flex justify-content-end">
              <input type="text" placeholder="Subscribe..." className="rounded-5"/>
              <button className="btn btn-light rounded-5">Subscribe</button>
            </div>
            <div className="social mt-3">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center px-md-0 px-3">&copy; Copyright {new Date().getFullYear()} by <span className="fw-bold">Sahara Graphics</span>, All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default FooterComponent