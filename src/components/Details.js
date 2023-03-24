import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Placeholder from 'react-bootstrap/Placeholder';

function Details({ info }) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(process.env.REACT_APP_USERS_URL + info.id + '.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.status);
                }

                return response.json();
            })
            .then((data) => {
                setLoading(false);
                setData(data);
            });
    }, [info.id]);

    return (
        <div>
            {loading && (
                <Card style={{ width: '18rem' }}>
                    <Placeholder as={Card.Title} animation="glow">
                        <Placeholder xs={6} />
                    </Placeholder>
                    <Placeholder as={Card.Text} animation="glow">
                        <Placeholder xs={8} /> <Placeholder xs={4} />{' '}
                        <Placeholder xs={7} /> <Placeholder xs={5} />
                    </Placeholder>
                </Card>
            )}
            {!loading && data && (
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={data.avatar} />
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Card.Title>{data.name}</Card.Title>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            City: {data.details.city}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Company: {data.details.company}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Position: {data.details.position}
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            )}
        </div>
    );
}

export default Details;
