import React, { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

function List({ onUserClick, activeId }) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(process.env.REACT_APP_USERS_URL + 'users.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.status);
                }

                return response.json();
            })
            .then((data) => setUsers(data));
    }, []);

    return (
        <ListGroup>
            {users.map(({ id, name }) => (
                <ListGroup.Item
                    action
                    active={activeId === id ? true : false}
                    key={id}
                    onClick={() => onUserClick({ id, name })}
                >
                    {name}
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
}

export default List;
