import React from "react";
import { Button, Card, CardActions, CardContent, Typography } from "@material-ui/core";

const Example: React.FC = () => (
    <Card>
        <CardContent>
            <Typography variant="h1">Hello, world!</Typography>
            <Typography variant="body1">
                This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured
                content or information.
            </Typography>
        </CardContent>
        <CardActions>
            <Button variant="contained">Learn more</Button>
        </CardActions>
    </Card>
);

export { Example };
