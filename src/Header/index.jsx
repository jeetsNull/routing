import React from "react";



import { Container, Col, Row} from "reactstrap"


const Header = ({handleMobileMenu}) => {
  return (
    <div className="header shadow-sm">
      <Container fluid className="header-container h-100 w-100">
        <Row className="header-row h-100 w-100">
          <Col lg={10} xs={8} className="d-flex align-items-center">
            <h2 className="header-logo-text"> Genyus</h2>
            <div className="header-icon" onClick={handleMobileMenu}>
              <i className="bx bx-menu"></i>
            </div>
          </Col>

          <Col
            lg={2}
            xs={4}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="header-profile">
              
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
