import React, { useEffect, useState } from 'react';
import { Button, Icon, Item, Label, Rating } from 'semantic-ui-react';

import { useAppSelector } from '../../../app/hooks';

import { getShows } from '../../slices/Shows/ShowsSlice';

import { IShow } from '../../models/Show.model';
import { NavLink, RouteComponentProps } from 'react-router-dom';

import imagePlaceholder from '../../../assets/images/image-placeholder.png';

interface IShowPageRouteProps {
    id: string;
}

interface IShowPageProps extends RouteComponentProps<IShowPageRouteProps> {

}

const ShowPage: React.FC<IShowPageProps> = ({match}) => {
    const shows = useAppSelector(getShows);

    const id = match.params.id;

    useEffect(() => {
        console.log(id);
        const intID: number = +id
        const foundShow = shows?.find(s => s.id === intID);

        if(foundShow)
            setShow(foundShow);

    }, [id, shows]);

    const [show, setShow] = useState<IShow | null>(null);

    return (
        <>
            {!show && ( <p>The selected show was not found.</p> )}
            {show && (
                <>
                <Item.Group>
                    <Item>
                        <Item.Image src={show.image ? show.image!.original : imagePlaceholder} size='large' />

                        <Item.Content>
                            <Item.Header as='h1'>{show.name}</Item.Header>
                            <Item.Meta>
                                <Button secondary floated='right' as={NavLink} to={`/shows`} >
                                    <Icon name='chevron left' />
                                    Back to list                    
                                </Button>

                                <Rating icon='star' rating={show.rating ? show.rating : 0} maxRating={10} disabled />
                                <br/>
                                <br/>
                                {show.officialSite && (
                                    <>
                                        <a href={show.officialSite} target='_blank' rel='noreferrer'>Navigate to show page</a>
                                        <br/>
                                        <br/>
                                    </>
                                )}
                            </Item.Meta>
                            <Item.Header as='h3'>Summary:</Item.Header>
                            <Item.Description>
                                {show.summary ? 
                                    (<div dangerouslySetInnerHTML={{ __html: show.summary }} />) :
                                    (<p>Not summary provided</p>)
                                }
                            </Item.Description>
                            <Item.Extra>
                                {show.genres.map((genre, indx) => (<Label key={indx}>{genre}</Label>))}
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                </Item.Group>
                </>
            )}
        </>
    );
};

export default ShowPage;
