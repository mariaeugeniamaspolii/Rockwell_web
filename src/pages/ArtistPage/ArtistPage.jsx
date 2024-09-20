import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Loader from "../../components/Loader/Loader";
import ArtistDetail from "../../components/ArtistDetail/ArtistDetail";

const RecordPage = () => {
    const [loading, setLoading] = useState(true);

    const { id } = useParams();
    const [artist, setArtist] = useState();

    useEffect(() => {
        fetch(`https://albums-api.onrender.com/artists/${id}`)
            .then((res) => res.json(res))
            .then((data) => {
                setArtist(data);
                setLoading(false);

            })
            .catch(console.error);
    }, [id]);

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <ArtistDetail artist={artist} />
            )}
        </>
    );
}

export default RecordPage;