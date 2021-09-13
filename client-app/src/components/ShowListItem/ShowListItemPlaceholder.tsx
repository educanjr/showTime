import React from 'react';

import { Grid, Placeholder } from 'semantic-ui-react';

const ShowListItemPlaceholder = () => {
    return (
        <Grid columns={2}>
            <Grid.Row>
            <Grid.Column width={3}>
                <Placeholder fluid>
                    <Placeholder.Image square />
                </Placeholder>
            </Grid.Column>
            <Grid.Column width={13}>
                <Placeholder fluid>
                <Placeholder.Paragraph>
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                </Placeholder.Paragraph>
                </Placeholder>
            </Grid.Column>
            </Grid.Row>
            <Grid.Row>
            <Grid.Column width={3}>
                <Placeholder fluid>
                    <Placeholder.Image square />
                </Placeholder>
            </Grid.Column>
            <Grid.Column width={13}>
                <Placeholder fluid>
                <Placeholder.Paragraph>
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                </Placeholder.Paragraph>
                </Placeholder>
            </Grid.Column>
            </Grid.Row>
            <Grid.Row>
            <Grid.Column width={3}>
                <Placeholder fluid>
                    <Placeholder.Image square />
                </Placeholder>
            </Grid.Column>
            <Grid.Column width={13}>
                <Placeholder fluid>
                <Placeholder.Paragraph>
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                </Placeholder.Paragraph>
                </Placeholder>
            </Grid.Column>
            </Grid.Row>
        </Grid>
)}

export default ShowListItemPlaceholder