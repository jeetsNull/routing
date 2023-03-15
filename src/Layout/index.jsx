import React, { useState, useEffect } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar/Sidebar";
import { Container, Col, Row} from "reactstrap"
import LayoutRouting from "./LayoutRouting";

const Layout = (props) => {

 return (
    <Container>
      <Header  />
      <Row>
        <Col lg={3}>
          <Sidebar  />
        </Col>

        <Col lg={9}>
          <div className="main-page-content">
            <LayoutRouting />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
