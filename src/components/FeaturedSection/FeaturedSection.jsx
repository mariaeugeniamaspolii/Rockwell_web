import React from 'react'

import { Container } from 'react-bootstrap'
import Reveal from '../Reveal/Reveal'

const FeaturedSection = ({ title, content, color = "dark-gray", bgColor = "light-gray", customClass = "" }) => {
  return (
    <section className={`bg-${bgColor} text-${color} ${customClass}`}>
      <Container>
        <Reveal>
          <h4 className='text-black mb-5'>{title}</h4>
        </Reveal>
        {content}
      </Container>
    </section>
  );
};

export default FeaturedSection