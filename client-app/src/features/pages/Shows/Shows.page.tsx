import React, { useEffect } from 'react';
import { Item } from 'semantic-ui-react';

import { useAppSelector } from '../../../app/hooks';

import { getShows, getStatus } from '../../slices/Shows/ShowsSlice';

import ShowListItem from '../../../components/ShowListItem/ShowListItem';

import { useHistory  } from 'react-router-dom';
import ShowListItemPlaceholder from '../../../components/ShowListItem/ShowListItemPlaceholder';
import NotShowToDisplay from './NotShowToDisplay';

const ShowsPage = () => {
    const history = useHistory(); 
    const shows = useAppSelector(getShows);
    const status = useAppSelector(getStatus);

    useEffect(() => {
        if(!shows && status !== 'loading') {
            history.push('/');
        }
    }, [history, shows, status])

    return (
        <>
        {
            status === 'loading' ? (<ShowListItemPlaceholder />) :
            !shows || shows.length <= 0 ? (<NotShowToDisplay />) : ( 
                <>
                    <Item.Group divided>
                        {
                            shows.map((item, indx) => (
                                <ShowListItem 
                                    id={item.id}
                                    description={item.summary}
                                    genres={item.genres}
                                    name={item.name}
                                    rating={item.rating}
                                    image={item.image ? item.image!.medium : null}
                                    key={indx} />
                                ))
                        }
                    </Item.Group>
                </>
            )
        }
        </>
    );
};

export default ShowsPage;
