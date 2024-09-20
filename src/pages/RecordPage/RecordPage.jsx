import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import AlbumDetail from '../../components/AlbumDetail/AlbumDetail'
import Loader from "../../components/Loader/Loader";

const RecordPage = () => {

    const { id } = useParams();
    const [album, setAlbum] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://albums-api.onrender.com/albums/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setAlbum(data);
                setLoading(false);

            })
            .catch(console.error);
    }, [id]);

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <AlbumDetail album={album} />
            )}
        </>
    );
}

export default RecordPage;