import React from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';
import ShowSearcher from '../../../components/ShowSearcher/ShowSearcher';

import { useAppDispatch } from '../../../app/hooks';

import { searchShowsAsync } from '../../slices/Shows/ShowsSlice';

import { useHistory  } from 'react-router-dom';

import './Home.page.scss';

const HomePage = () => {
    const history = useHistory();
    const dispatch = useAppDispatch();

    const onSearchClickHandler = (showCategory: string) => {
        dispatch(searchShowsAsync(showCategory));
        history.push('/shows');
    }

    return (
        <Segment textAlign='center' vertical className='masthead'>
            <Container text>
                <Header as='h2' inverted className='mb-2'>
                    Type a category for TV shows to search.
                </Header>
                <ShowSearcher onSearchClickHandler={onSearchClickHandler} size='page-focused' />
            </Container>
        </Segment>
    );
};

export default HomePage;
