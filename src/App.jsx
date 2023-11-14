import React from 'react'
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container  } from '@mui/material'
import { PhotoCamera } from '@mui/icons-material'
import Button from '@mui/material/Button';
import useStyles from './styles';

const App = () => {

  const classes =  useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <PhotoCamera />
          <Typography variant='h6'>
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth='sm'>
              <Typography variant='h2' align='center' color='textPrimary' gutterBottom>Photo Album</Typography>
              <Typography variant='h5' align='center' color='textSecondary' paragraph>
                Hello Everyone This is a photo album and 
                I'm trying to make this sentence as long as possible 
                so we can see how does it look like on the screen.
              </Typography>
              <div>
              <Grid container spacing={2} justify='center'>
          <Grid item>
            <Button variant='contained' color='primary'>
              See My Photos
            </Button>
          </Grid>
          <Grid item>
            <Button variant='contained' color='primary'>
              Secondary Action
            </Button>
          </Grid>
        </Grid>
              </div>
          </Container>
        </div>
      </main>
    </>
  )
}

export default App