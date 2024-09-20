import React, { useEffect, useState } from "react";


const ArtistWikiDescription = ({ item }) => {
    console.log('item: ', item);
    console.log('item: ', item.name);

    const [descriptionText, setDescriptionText] = useState('');

    useEffect(() => {
        fetch(`https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&titles=${item.name}&prop=extracts&exintro=true`)
            .then(res => res.json())
            .then((data) => {
                const pageId = Object.keys(data.query.pages)[0];
                const extract = data.query.pages[pageId].extract;
                const strippedText = extract.replace(/<[^>]+>/g, '');

                const maxLength = 350;
                const truncatedText = strippedText.slice(0, maxLength) + "...";
                setDescriptionText(truncatedText);
            })
            .catch(console.error);
    }, [item]);

    return (
        <p className="mt-2">{descriptionText}</p>
    )
}

export default ArtistWikiDescription;