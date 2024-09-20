import React from 'react';
import "./Card.scss"

import {Card} from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons';

const defaultImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiTGRRSewdVwUqlu3r71biKv9PlpOEYGx6-YnRtOTIt3uioMdNvzZXumpUzMsJCoJFRuI&usqp=CAU'

const CustomCard =({img=defaultImg,title='Card title',subtitle='Record name', text='Format', description='Year'}) => (
  <Card className="item-card h-100">
    <Card.Img variant="top" src={img} />
    <Icon.BookmarkFill></Icon.BookmarkFill>
    <Card.Body>
    <Card.Header>
      <h6>{title}</h6>
      <p className='card-subtitle'>{subtitle}</p>
    </Card.Header>
      <div className='d-flex justify-content-between flex-row'>
        <Card.Text>{text}</Card.Text>
        <Card.Text>{description}</Card.Text>
      </div>
    </Card.Body>
  </Card>
) 

export default CustomCard;