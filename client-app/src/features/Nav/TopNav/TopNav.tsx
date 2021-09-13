import React from 'react';
import { Menu, Container } from 'semantic-ui-react';
import ShowSearcher from '../../../components/ShowSearcher/ShowSearcher';

import { useAppDispatch } from '../../../app/hooks';

import { searchShowsAsync } from '../../slices/Shows/ShowsSlice';
import { useHistory  } from 'react-router-dom';

const TopNav: React.FC = () => {
    const history = useHistory();
    const dispatch = useAppDispatch();

    const onSearchClickHandler = (showCategory: string) => {
        dispatch(searchShowsAsync(showCategory));
        const currentPath = history.location.pathname;
        if(currentPath !== '/shows')
            history.push('/shows');
    }

    return (
        <Menu inverted fixed='top'>
            <Container fluid>
            <Menu.Item position='right'></Menu.Item>
            <Menu.Item>
                <ShowSearcher onSearchClickHandler={onSearchClickHandler} />
            </Menu.Item>
            </Container>
        </Menu>
    );
};

export default TopNav;
