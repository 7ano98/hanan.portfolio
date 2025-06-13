import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import rahamall from "../../Assets/rahamall.png";
import cxdash from "../../Assets/cxdash.png";
import jira from "../../Assets/jira.png";
import tab from "../../Assets/tab.png";
import bussapp from "../../Assets/bussapp.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bussapp}
              isBlog={false}
              title="School Bus Tracking Application"
              description="An Android application designed to support drivers, schools, and parents. The app enables real-time tracking of school buses, provides notifications for arrivals and departures, and ensures enhanced safety and communication among all stakeholders."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tab}
              isBlog={false}
              title="Multi-Tab Dashboard Report with Tableau and Live Data"
              description="A comprehensive dashboard report built using Tableau, integrating multiple data sources and live data feeds. The dashboard provides interactive visualizations and actionable insights, supporting data-driven decision-making."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jira}
              isBlog={false}
              title="Record Management Project in Jira"
              description="A full project setup in Jira for record management, including workflow design, issue tracking, and custom dashboards. The project streamlines record-keeping processes and enhances team collaboration and transparency."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cxdash}
              isBlog={false}
              title="Customer Experience Dashboard (React + Data Sources)"
              description="A web-based dashboard built with React, aggregating data from various sources to visualize and analyze customer experience metrics. The dashboard offers real-time insights and customizable views to support business strategy."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rahamall}
              isBlog={false}
              title="Al Raha Mall Application — UI/UX Prototype"
              description="A comprehensive prototype application for Al Raha Mall, focusing on implementing modern UI/UX principles. The design emphasizes user-friendly navigation, attractive visuals, and seamless interaction for an enhanced mall experience."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
