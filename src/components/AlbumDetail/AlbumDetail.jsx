import React from 'react';

import List from '../List/List';
import DetailInfo from '../DetailInfo/DetailInfo';
import FeaturedSection from '../FeaturedSection/FeaturedSection';



const AlbumDetail = ({ album }) => {

  return (
    <>
      <DetailInfo item={album} />
      <FeaturedSection title="Track List" content={<List array={album.songs} />} color="" bgColor="light-gray" />
    </>
  );
};

export default AlbumDetail;