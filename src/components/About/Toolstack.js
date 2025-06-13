import React from "react";
import canvaIcon from "../../Assets/canva-icon.png";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiAdobephotoshop,
  SiPowerbi,
  SiTableau,
  SiJira,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
  <SiAdobephotoshop />
</Col>
<Col xs={4} md={2} className="tech-icons">
  <SiPowerbi />
</Col>
<Col xs={4} md={2} className="tech-icons">
  <SiTableau />
</Col>
<Col xs={4} md={2} className="tech-icons">
  <SiJira />
</Col>
<Col xs={4} md={2} className="tech-icons">
  <img src={canvaIcon} alt="Canva" style={{ width: "90px" }} />
</Col>


    </Row>
  );
}

export default Toolstack;
