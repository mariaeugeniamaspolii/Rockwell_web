import React from 'react'

import { Row, Col } from 'react-bootstrap'
import ListItem from '../ListItem/ListItem'

const List = ({ array }) => {

    const middleIndex = Math.ceil(array.length / 2);
    const leftSongs = array.slice(0, middleIndex);
    const rightSongs = array.slice(middleIndex);

    return (
        <Row className='g-5 justify-content-center row'>
            <Col sm={12} md={5}>
                <div className="song-list">
                    {leftSongs.map((song, index) => (
                        <ListItem key={song.id} song={song} index={index} />
                    ))}
                </div>
            </Col>
            <Col sm={12} md={5}>
                <div className="song-list">
                    {rightSongs.map((song, index) => (
                        <ListItem key={song.id} song={song} index={index + middleIndex} />
                    ))}
                </div>
            </Col>
        </Row>

    )
}

export default List