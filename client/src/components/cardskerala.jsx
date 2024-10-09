import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import k from './images/kochi.jpg';
import alap from './images/Alapuzha.jpg';
import mn from './images/munnar.jpg';
import svp from './images/SilentVally.jpg';
import koz from './images/kozhikode.jpeg';
import pkd from './images/palakkad.jpg';
import bek from './images/wayanad.jpeg';
import atp from './images/thrissur.jpg';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import CommentContext from './commentprovider';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';

function Cardskerala() {
  const [title, setTitle] = useState('');
  const nav = useNavigate();
  const { comment } = useContext(CommentContext);

  const record = [
    {
      idno: 1,
      title: 'Kochi',
      description: "Kochi is a city in southwest India's coastal Kerala state. It has been a port since 1341.",
      imageUrl: k,
      link: '/koc',
    },
    {
      idno: 2,
      title: 'Alappuzha',
      description: 'Alappuzha (or Alleppey) is a city on the Laccadive Sea in the southern Indian state of Kerala.',
      imageUrl: alap,
      link: '/',
    },
    {
      idno: 3,
      title: 'Munnar',
      description: "Munnar is a town in the Western Ghats mountain range in India’s Kerala state.",
      imageUrl: mn,
    },
    {
      idno: 4,
      title: 'Silent Valley',
      description: 'Silent Valley is not just a forest; it’s a sanctuary of time, where nature thrives in its purest.',
      imageUrl: svp,
    },
    {
      idno: 5,
      title: 'Kozhikode',
      description: "Kozhikode is a city in southwest India's coastal Kerala state. It has been a port since 1341.",
      imageUrl: koz,
    },
    {
      idno: 6,
      title: 'Palakkad',
      description: 'Palakkad, where the winds whisper through the Western Ghats, carrying tales of history, nature, and tranquility.',
      imageUrl: pkd,
    },
    {
      idno: 7,
      title: 'Wayanad',
      description: 'In the embrace of the ocean and the skies, Bekal Fort whispers tales of courage, conquest, and serenity.',
      imageUrl: bek,
    },
    {
      idno: 8,
      title: 'Thrissur',
      description: 'The roar of Athirappilly Falls echoes through the forest, a timeless song of nature’s power and beauty.',
      imageUrl: atp,
    },
  ];

  return (
    <Container className="margint">
      {/* <Row className="mb-3">
        <Col>
          <input
            type="text"
            name="sch"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="form-control"
            placeholder="Type place name here!"
          />
        </Col>
      </Row> */}
      <Row className="mb-3">
        <Col>
          <Button
            variant="success"
            onClick={() => {
              setTitle('');
            }}
          >
            All
          </Button>
        </Col>
        {record.length > 0 &&
          record.map((item) => (
            <Col key={item.idno}>
              <Button
                variant="info"
                onClick={() => {
                  setTitle(item.title);
                }}
              >
                {item.title}
              </Button>
            </Col>
          ))}
      </Row>
      <Row>
        {record.length > 0 ? (
          record
            .filter((rec) => rec.title.toLowerCase().includes(comment.toLowerCase()))
            .map((list) => (
              <Col lg={3} className="mb-2" key={list.idno}>
                <Card>
                  <Card.Img
                    variant="top"
                    src={list.imageUrl}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <Card.Body>
                    <Card.Title>{list.title}</Card.Title>
                    <Card.Text>{list.description}</Card.Text>
                    <Button
                      variant="primary"
                      onClick={() => {
                        nav(list.link);
                      }}
                    >
                      Click
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
        ) : (
          <p>No Data Found</p>
        )}
      </Row>
      <Row>
        <Col>
          <p>{comment}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Cardskerala;