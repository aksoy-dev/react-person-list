import {
  faFacebook,
  faInstagram,
  faTwitter,
  faFlipboard,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { LoremIpsum } from "react-lorem-ipsum";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Modal.css";

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 1000));
}

const MydModalWithGrid = (props) => {
  const url = `https://randomuser.me/api/portraits/thumb/men/${props.img}.jpg`;
  const [isLoading, setLoading] = useState(false);
  const handleClick = () => setLoading(true);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
        handleShow();
      });
    }
  }, [isLoading]);

  return (
    <>
      <Button
        variant="outline-secondary"
        size="sm"
        disabled={isLoading}
        onClick={!isLoading ? handleClick : null}
      >
        {isLoading ? "Yükleniyor..." : "Daha fazla"}
      </Button>

      <Offcanvas show={show} onHide={handleClose} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img className="img-person-list" src={url} alt="person" />
            <b className="person-name-list">{props.namesurname}</b>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Row>
            <Col xs={4}>
              <img className="img-person" src={url} alt="person" />
            </Col>
            <Col xs={8}>
              <h4 className="namesurname">{props.namesurname}</h4>
              <b className="job">{props.job}</b>
            </Col>
            <Col className="about-txt">
              <LoremIpsum p={2} />
            </Col>
            <Row>
              <Col className="social-media">
                <a alt="social-media-link" href="#your-link">
                  <FontAwesomeIcon className="faFacebook" icon={faFacebook} />
                </a>
                <a alt="social-media-link" href="#your-link">
                  <FontAwesomeIcon className="faTwitter" icon={faTwitter} />
                </a>
                <a alt="social-media-link" href="#your-link">
                  <FontAwesomeIcon className="faInstagram" icon={faInstagram} />
                </a>
                <a alt="social-media-link" href="#your-link">
                  <FontAwesomeIcon className="faFlipboard" icon={faFlipboard} />
                </a>
              </Col>
            </Row>
          </Row>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default MydModalWithGrid;
