import React, { forwardRef } from 'react';
import { Link } from "react-router-dom";

import CustomCard from "../../components/Card/CustomCard";
import { Row, Col } from 'react-bootstrap';
import FeaturedSection from '../FeaturedSection/FeaturedSection';
import DetailInfo from '../DetailInfo/DetailInfo';

const Catalogue = ({ array }, ref) => {
    const bannerInterval = 12;

    return (
        <Row ref={ref} className="mt-5">
            {array.map(({ id, name, cover, formats, year, artist }, index) => {
                const mostrarBanner = (index + 1) % (bannerInterval + 1) === 0;
                
                return (
                    <>
                        {mostrarBanner && (
                            <div className='my-4 '>
                                <FeaturedSection bgColor="black" customClass="featured-card p-5" title="Must have"
                                    content={
                                        <Link to={`/albums/${id}`} key={id}>
                                            <DetailInfo item={array[index]}></DetailInfo>
                                        </Link>
                                    }>
                                </FeaturedSection>
                            </div>
                        )}
                        {!mostrarBanner && (
                            <Col sm={6} md={4} lg={3} className="gy-3">
                                <div className="mb-4 h-100">
                                    <Link to={`/albums/${id}`} key={id}>
                                        <CustomCard img={cover} title={artist.name} text={formats.join(', ')} description={year} subtitle={name} />
                                    </Link>
                                </div>
                            </Col>
                        )}
                    </>
                );
            })}
        </Row>
    )
}

export default forwardRef(Catalogue);
