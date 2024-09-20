import React, { useEffect, useState } from "react";

import CustomSwiper from '../Swiper/Swiper';
import DetailInfo from '../DetailInfo/DetailInfo';
import FeaturedSection from '../FeaturedSection/FeaturedSection';


const ArtistDetail = ({ artist }) => {


    return (
        <>
            <DetailInfo item={artist} />
            <FeaturedSection title="Their Hall" content={<CustomSwiper array={artist.albums} />} color="" bgColor="light-gray" />
        </>
    );
}

export default ArtistDetail;