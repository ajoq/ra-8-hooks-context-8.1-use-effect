import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import List from './List';
import Details from './Details';

function Users() {
    const [userInfo, setUserInfo] = useState({});
    return (
        <Container className="mt-4">
            <Row xs="auto">
                <Col>
                    <List onUserClick={setUserInfo} activeId={userInfo.id} />
                </Col>
                <Col>
                    {Object.keys(userInfo).length !== 0 && (
                        <Details info={userInfo} />
                    )}
                </Col>
            </Row>
        </Container>
    );
}

export default Users;
