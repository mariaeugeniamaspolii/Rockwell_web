import React, { useEffect, useState, useRef } from "react";
import MenuBar from "../../components/MenuBar/MenuBar";
import Loader from "../../components/Loader/Loader";
import Hero from "../../components/Hero/Hero";
import Catalogue from "../../components/Catalogue/Catalogue";
import CustomButton from "../../components/Button/CustomButton";

import { Container } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';

const API_URL = process.env.REACT_APP_ALBUMS_API;

const HomePage = () => {
  const ref = useRef(null);
  console.log('ref: ', ref);

  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/albums`)
      .then((res) => res.json())
      .then((data) => {
        setRecords(data);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <Hero targetRef={ref} />
      <MenuBar title="Explore by genre" />
      <Container className="container-sm">
        {loading ? (
          <Loader />
        ) : records.length ? (
          <Catalogue ref={ref} array={records} />
        ) : (
          <div className="mb-5">
            <h5>Can't show the records at the moment</h5>
            <p>But make sure to follow us for updates!</p>
            <CustomButton icon={<Icon.Facebook />} />
            <CustomButton icon={<Icon.Youtube />} />
            <CustomButton icon={<Icon.Instagram />} />
          </div>
        )}
      </Container>
    </>
  );
};

export default HomePage;
