import React from 'react'

import { Container } from 'react-bootstrap'

const FeaturedSection = ({ title, content, color = "dark-gray", bgColor = "light-gray", customClass = "" }) => {
  return (
    <section className={`bg-${bgColor} text-${color} ${customClass}`}>
      <Container>
        <h4 className='text-black mb-5'>{title}</h4>
        {content}
      </Container>
    </section>
  );
};

export default FeaturedSection