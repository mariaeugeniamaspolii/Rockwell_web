import React from 'react';
import './Hero.scss'

import ButtonNav from "../ButtonNav/ButtonNav"
import { Container, Row, Col } from "react-bootstrap"
import * as Icon from 'react-bootstrap-icons';
import Reveal from "../Reveal/Reveal";

const Hero = () => {
  return (
    <section className="hero-section">
      <Container>
        <Row>
          <Col sm={6} md={7} lg={7}>
            <Reveal delay={100}>
              <h1 className='text-white'>hall of <br /><span className='text-primary'>legends</span></h1>
            </Reveal>
            <Reveal delay={250}>
              <p><span>Top 50 all-time rock and metal ultimate collection</span></p>
            </Reveal>
            <Reveal delay={400}>
              <ButtonNav iconPosition="right" variant="light" size="lg" text="Explore hall" icon={<Icon.ArrowDown />} />
            </Reveal>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero;
