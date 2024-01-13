import { Container, Row, Col } from "react-bootstrap"
import HeroImage from "../assets/img/img-header.png";
import ProductImage from "../assets/img/product1.png";
import Slider1 from "../assets/img/product2.png";
import Profile from "../assets/img/Ellipse 3.png";

import { FaRegHeart, FaStar, FaRegStar } from "react-icons/fa";

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules"
const HomePage = () => {
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center overflow-hidden">
        <Container>
          <Row className="header-box d-flex align-items-center pt-lg-5">
            <Col lg='6'>
              <img src={HeroImage} alt="hero-image"/>
            </Col>
            <Col lg='6' className="pt-lg-0 pt-5">
              <h1 className="mb-4 fw-bold">Sahara Graphics.</h1>
              <p className="mb-4">Design For Sale | Commisions Open<br />DM or Email For Info</p>
              <button className="btn btn-dark btn-lg rounded-1 me-1">See All Design</button>
              {/* <button className="btn btn-danger btn-lg rounded-1 me-1 mb-xs-0 mb-2" onClick={() => navigate("/kelas")}>Lihat Kelas</button> */}
            </Col>
          </Row>
        </Container>
      </header>
      <div className="design mt-5">
        <Container>
          <Row className="d-flex align-items-center">
            <Col>
              <h1 className="fw-bold text-center">Design</h1>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="col-lg-3 col-6">
              <div className="d-flex justify-content-center position-relative">
                <img src={ProductImage} alt="product" />
                <FaRegHeart className="position-absolute top-0 end-0" />
              </div>
              <p className="fw-bold">HOLY YOUTH</p>
              <p>$80</p>
              <p>PNG, PSD, Mockup Preview</p>
            </Col>
            <Col className="col-lg-3 col-6">
              <div className="d-flex justify-content-center position-relative">
                <img src={ProductImage} alt="product" />
                <FaRegHeart className="position-absolute top-0 end-0" />
              </div>
              <p className="fw-bold">HOLY YOUTH</p>
              <p>$80</p>
              <p>PNG, PSD, Mockup Preview</p>
            </Col>
            <Col className="col-lg-3 col-6">
              <div className="d-flex justify-content-center position-relative">
                <img src={ProductImage} alt="product" />
                <FaRegHeart className="position-absolute top-0 end-0" />
              </div>
              <p className="fw-bold">HOLY YOUTH</p>
              <p>$80</p>
              <p>PNG, PSD, Mockup Preview</p>
            </Col>
            <Col className="col-lg-3 col-6">
              <div className="d-flex justify-content-center position-relative">
                <img src={ProductImage} alt="product" />
                <FaRegHeart className="position-absolute top-0 end-0" />
              </div>
              <p className="fw-bold">HOLY YOUTH</p>
              <p>$80</p>
              <p>PNG, PSD, Mockup Preview</p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="about mt-5">
          <Row>
            <Col>
              <h1 className="fw-bold text-center">About</h1>
            </Col>
          </Row>
          <Row className="bg-image min-vh-100 d-flex align-items-center text-center">
            <Col>
              <h3>Sahara <br /> Graphics.</h3>
            </Col>
          </Row>
      </div>
      <div className="testimonial mt-5">
        <Container fluid>
        <Row>
          <Col>
            <h1 className="fw-bold text-center">Testimonial</h1>
          </Col>
        </Row>
        <Row>
        <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              pagination={{ el: '.swiper-pagination', clickable: true }}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                clickable: true,
              }}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="swiper_container"
            >
              <SwiperSlide className="bg-slider d-flex justify-content-center align-items-center">
                <div className="d-flex justify-content-center">
                  <img src={Slider1} alt="image" />
                  <div className="ms-3">
                    <div className="d-flex align-items-center">
                      <img src={Profile} alt="profile"  className="me-3"/>
                      <div>
                        <h5 className="">Iqna raidan</h5>
                        <FaStar />
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaRegStar />
                      </div>
                    </div>
                    <p className="mt-3 text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus perspiciatis eius facilis expedita vero magni vel in officia temporibus neque!</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="bg-slider d-flex justify-content-center align-items-center">
                <div className="d-flex justify-content-center">
                  <img src={Slider1} alt="image" />
                  <div className="ms-3">
                    <div className="d-flex align-items-center">
                      <img src={Profile} alt="profile"  className="me-3"/>
                      <div>
                        <h5 className="">Iqna raidan</h5>
                        <FaStar />
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaRegStar />
                      </div>
                    </div>
                    <p className="mt-3 text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus perspiciatis eius facilis expedita vero magni vel in officia temporibus neque!</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="bg-slider d-flex justify-content-center align-items-center">
                <div className="d-flex justify-content-center">
                  <img src={Slider1} alt="image" />
                  <div className="ms-3">
                    <div className="d-flex align-items-center">
                      <img src={Profile} alt="profile"  className="me-3"/>
                      <div>
                        <h5 className="">Iqna raidan</h5>
                        <FaStar />
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaRegStar />
                      </div>
                    </div>
                    <p className="mt-3 text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus perspiciatis eius facilis expedita vero magni vel in officia temporibus neque!</p>
                  </div>
                </div>
              </SwiperSlide>

              {/* <div className="slider-controler">
                <div className="swiper-button-prev slider-arrow">
                  <FaArrowCircleLeft className="icon" />
                </div>
                <div className="swiper-button-next slider-arrow">
                  <FaArrowCircleRight className="icon" />
                </div>
                <div className="swiper-pagination"></div>
              </div> */}
            </Swiper>
        </Row>
        </Container>
      </div>
    </div>
  )
}

export default HomePage