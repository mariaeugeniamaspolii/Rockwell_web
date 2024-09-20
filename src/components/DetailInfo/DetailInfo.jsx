import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import CustomButton from '../Button/CustomButton';
import ButtonBack from "../../components/ButtonBack/ButtonBack";

import * as Icon from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import ArtistWikiDescription from "../ArtistWikiDescription/ArtistWikiDescription";

const DetailInfo = ({ item }) => {

    const descriptionContent = (item.artist)
        ? (
            <>
                <Link to={`/artists/${item.artist.id}`}>
                    <h5>{item.artist.name}</h5>
                </Link>
                <p><span>{item.year}</span></p>
                <p className="mb-5"><b>Formats:</b> {item.formats.join(', ')}</p>
            </>
        )
        : (
            <ArtistWikiDescription item={item} />
        );


    return (
        <section className="detail-info">
            <Container>
                <ButtonBack navigateTo={-1} className="" />
                <Row className='justify-content-center'>
                    <Col sm={12} md={4} lg={4}>
                        <img className="w-100" src={item.image || item.cover} alt={item.name + " cover"} />
                    </Col>
                    <Col sm={12} md={6} lg={6}>
                        <h3 className="mb-0">{item.name}</h3>
                        {descriptionContent}
                        <Col sm={12} className="mb-3 mt-4 d-flex">
                            <CustomButton className="me-3" variant="primary" size="lg" text="Save to collection" icon={<Icon.Bookmark />} />
                            <CustomButton className="me-3" size="lg" icon={<Icon.Youtube />} />
                            <CustomButton size="lg" icon={<Icon.Spotify />} />
                        </Col>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default DetailInfo;
