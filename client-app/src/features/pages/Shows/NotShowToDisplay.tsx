import React from 'react';
import { Segment, Header, Icon } from 'semantic-ui-react';
import ShowSearcher from '../../../components/ShowSearcher/ShowSearcher';
import { searchShowsAsync } from '../../slices/Shows/ShowsSlice';
import { useAppDispatch } from '../../../app/hooks';

const NotShowToDisplay = () => {
    const dispatch = useAppDispatch();

    const onSearchClickHandler = (showCategory: string) => {
        dispatch(searchShowsAsync(showCategory));
    }

    return (
        <Segment placeholder>
            <Header icon>
                <Icon name='search' />
                There is not Shows to display.
            </Header>
            <Segment.Inline>
                <ShowSearcher onSearchClickHandler={onSearchClickHandler} size={'large'} />
            </Segment.Inline>
        </Segment>
    );
};

export default NotShowToDisplay;