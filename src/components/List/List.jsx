import React from 'react'

import { Row, Col } from 'react-bootstrap'
import ListItem from '../ListItem/ListItem'
import Reveal from '../Reveal/Reveal'

const List = ({ array }) => {

    const middleIndex = Math.ceil(array.length / 2);
    const leftSongs = array.slice(0, middleIndex);
    const rightSongs = array.slice(middleIndex);

    return (
        <Row className='g-5 justify-content-center row'>
            <Col sm={12} md={5}>
                <Reveal className="song-list">
                    {leftSongs.map((song, index) => (
                        <ListItem key={song.id} song={song} index={index} />
                    ))}
                </Reveal>
            </Col>
            <Col sm={12} md={5}>
                <Reveal className="song-list" delay={120}>
                    {rightSongs.map((song, index) => (
                        <ListItem key={song.id} song={song} index={index + middleIndex} />
                    ))}
                </Reveal>
            </Col>
        </Row>

    )
}

export default List