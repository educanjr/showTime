import React from 'react';
import { NavLink } from 'react-router-dom';

import { Item, Button, Icon, Label, Rating } from 'semantic-ui-react';

import imagePlaceholder from '../../assets/images/image-placeholder.png';

interface IShowListItemProps {
    id: number;
    name: string;
    genres: Array<string>;
    description: string;
    image: string | null;
    rating: number | null;
}

const ShowListItem: React.FC<IShowListItemProps> = ({id, name, genres, description, image, rating}) => {
    return (
    <Item>
        <Item.Image src={image ?? imagePlaceholder} />

        <Item.Content>
            <Item.Header as='a'>{name}</Item.Header>
            <Item.Meta>
                <Rating icon='star' defaultRating={rating ? rating : 0} maxRating={10} />
            </Item.Meta>
            <Item.Description>
                <div dangerouslySetInnerHTML={{ __html: description }} />
            </Item.Description>
            <Item.Extra>
                <Button primary floated='right' as={NavLink} to={`/shows/${id.toString()}`} >
                    See details
                    <Icon name='chevron right' />
                </Button>
                {genres.map((genre, indx) => (<Label key={indx}>{genre}</Label>))}
            </Item.Extra>
        </Item.Content>
    </Item>
)}

export default ShowListItem