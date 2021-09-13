import React from 'react';
import { Segment, Button, Header, Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <Segment placeholder>
            <Header icon>
                <Icon name='broken chain' />
                Oops - we've looked everywhere but couldn't find this.
            </Header>
            <Segment.Inline>
                <Button as={NavLink} to='/' primary>
                    Back to Home
                </Button>
            </Segment.Inline>
        </Segment>
    );
};

export default NotFoundPage;