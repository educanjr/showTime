import React, { useState } from 'react';
import { Form, Button, Icon } from 'semantic-ui-react';

import './ShowSearcher.scss';

interface IShowSearcherProps {
    size?: 'small' | 'medium' | 'large' | 'page-focused';
    onSearchClickHandler: (category: string) => void;
}

const ShowSearcher: React.FC<IShowSearcherProps> = ({onSearchClickHandler, size}) => {
    const [showCategory, setShowCategory] = useState('');

    const showSearchFormSubmitHandler = () => {
        onSearchClickHandler(showCategory);
        setShowCategory('');
    }

    return (
    <Form className={`show-search-form ${size ? size : 'small'}`}>
        {/* <Form.Input
            placeholder='Show category'
            onChange={({target}) => setShowCategory(target.value)}
            className='show-search-input'
            input={{value: showCategory}}
        /> */}
        <Form.Input icon={size !== 'page-focused'} placeholder='Show category...' onChange={({target}) => setShowCategory(target.value)} className='show-search-input'>
            <input value={showCategory} />
            {size !== 'page-focused' && (<Icon name='search' />)}
        </Form.Input>
        <Form.Field className='search-btn'>
            <Button primary onClick={showSearchFormSubmitHandler}>Search</Button>
        </Form.Field>
        
    </Form>
)}

export default ShowSearcher