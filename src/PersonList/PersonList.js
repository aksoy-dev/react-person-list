import "./PersonList.css";
import PropTypes from "prop-types";
import Accordion from "react-bootstrap/Accordion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Person = ({ img, namesurname, job, children }) => {
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;

  return (
    <>
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <img className="img-person-list" src={url} alt="person" />
            <b className="person-name-list">{namesurname}</b>
          </Accordion.Header>
          <Accordion.Body>
            <Row>
              <Col xs={4}>
                <img className="img-person" src={url} alt="person" />
                <h4 className="namesurname">{namesurname}</h4>
                <b className="job">{job}</b>
              </Col>
              <Col xs={8}>{children}</Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

Person.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  job: PropTypes.string,
  children: PropTypes.string,
};
Person.defaultProps = {
  img: "1",
  name: "Silinen kullanıcı",
  job: "Null",
  children: "Null",
};

export default Person;
