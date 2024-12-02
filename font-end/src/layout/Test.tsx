// import React from 'react';
import '../css/test.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Test() {
  return (
    <div>
        <Card sx={{ maxWidth: 200 }}>
      <CardMedia
        sx={{ height: 200 }}
        image="https://external-preview.redd.it/sy4x_4haKje0CNsvvzbcJm5b4aQ4yfr3vFpvukC7xPo.jpg?auto=webp&s=febc26cd89d7171cbbd92983eed97be4af3f2c92"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default Test