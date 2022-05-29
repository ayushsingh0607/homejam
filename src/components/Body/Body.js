import React from 'react'
import './Body.css'
import images from '../image'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { ArrowBack } from '@mui/icons-material';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useState } from 'react';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';

const Body = () => {
  const [bookmark, setBookmark] = useState(false)
  const [bookmark1, setBookmark1] = useState(false)
  const [bookmark2, setBookmark2] = useState(false)
  const [bookmark3, setBookmark3] = useState(false)
  const handleFill = () => {
    setBookmark(!bookmark)
  }
  const handleFill1 = () => {
    setBookmark1(!bookmark1)
  }
  const handleFill2 = () => {
    setBookmark2(!bookmark2)
  }
  const handleFill3 = () => {
    setBookmark3(!bookmark3)
  }
  return (
    <div className="app__body" >
      <div className="app__body-head">
        <h2 style={{ color: 'white', fontFamily: 'Libre Baskerville', fontStyle: 'normal', fontWeight: 400, fontSize: '32px', lineHeight: '40px' }}>Upcoming Shows
          <hr />
        </h2>
        <h3>
          <Button  style={{ fontFamily: 'Nunito', fontStyle: 'normal', fontWeight: 600, fontSize: '16px',color: '#E5C558' }}>
            View All
          </Button>
        </h3>
      </div>
      <div className="app__body-mid">
        <div className="card">
          {
            <Card sx={{ maxWidth: 345, backgroundColor: '#111229' }}>
              <CardMedia
                component="img"
                image={images.Benny}
                alt="Benny"
              />
              <CardContent>
                <img src={images.Label}></img>
                <Typography gutterBottom variant="h5" component="div" style={{ fontFamily: 'Libre Baskerville', fontStyle: 'normal', fontWeight: 700, fontSize: '20px', marginTop: '5px', color: 'white' }}>
                  Benny Dayal
                </Typography>
              </CardContent>
              <CardActions>
                <Button style={{ color: "#0259EB", fontFamily: 'Nunito', fontStyle: 'normal', fontWeight: 600, fontSize: '16px', textTransform: 'none' }} >
                  More Info <br />
                  <ArrowForwardIcon />
                </Button>
                <div className='line'></div>
                <Button color={bookmark ? "secondary" : "primary"} onClick={handleFill}> <BookmarkIcon> </BookmarkIcon></Button>
              </CardActions>
            </Card>
          }
        </div>
        <div className="card1">
          {
            <Card sx={{ maxWidth: 345, backgroundColor: '#111229', }}>
              <CardMedia
                component="img"
                image={images.Vijay}
                alt="Vijay"
              />
              <CardContent>
                <img src={images.Label}></img>
                <Typography gutterBottom variant="h5" component="div" style={{ fontFamily: 'Libre Baskerville', fontStyle: 'normal', fontWeight: 700, fontSize: '20px', marginTop: '5px', color: 'white' }}>
                  Vijay Yesudas
                </Typography>
              </CardContent>
              <CardActions>
                <Button style={{ color: "#0259EB", fontFamily: 'Nunito', fontStyle: 'normal', fontWeight: 600, fontSize: '16px', textTransform: 'none', }} >
                  More Info <br />
                  <ArrowForwardIcon />
                </Button>
                <div className='line'></div>
                <Button color={bookmark1 ? "secondary" : "primary"} onClick={handleFill1}> <BookmarkIcon> </BookmarkIcon></Button>
              </CardActions>
            </Card>
          }
        </div>
        <div className="card2">
          {
            <Card sx={{ maxWidth: 345, backgroundColor: '#111229' }}>
              <CardMedia
                component="img"
                width='300px'
                image={images.Andrea}
                alt="Andrea"
              />
              <CardContent>
                <img src={images.Label}></img>
                <Typography gutterBottom variant="h5" component="div" style={{ fontFamily: 'Libre Baskerville', fontStyle: 'normal', fontWeight: 700, fontSize: '20px', marginTop: '5px', color: 'white' }}>
                  Andrea Jeremiah
                </Typography>
              </CardContent>
              <CardActions>
                <Button style={{ color: "#0259EB", fontFamily: 'Nunito', fontStyle: 'normal', fontWeight: 600, fontSize: '16px', textTransform: 'none' }} >
                  More Info <br />
                  <ArrowForwardIcon />
                </Button>
                <div className='line'></div>
                <Button color={bookmark2 ? "secondary" : "primary"} onClick={handleFill2}> <BookmarkIcon> </BookmarkIcon></Button>
              </CardActions>
            </Card>
          }
        </div>
        <div className="card3">
          {
            <Card sx={{ maxWidth: 345, backgroundColor: '#111229' }}>
              <CardMedia
                component="img"
                image={images.Shilpa}
                alt="Shilpa"
              />
              <CardContent>
                <img src={images.Label}></img>
                <Typography gutterBottom variant="h5" component="div" style={{ fontFamily: 'Libre Baskerville', fontStyle: 'normal', fontWeight: 700, fontSize: '20px', marginTop: '5px', color: 'white' }}>
                  Shilpa Rao
                </Typography>
              </CardContent>
              <CardActions>
                <Button style={{ color: "#0259EB", fontFamily: 'Nunito', fontStyle: 'normal', fontWeight: 600, fontSize: '16px', textTransform: 'none' }} >
                  More Info <br />
                  <ArrowForwardIcon />
                </Button>
                <div className='line'></div>
                <Button color={bookmark3 ? "secondary" : "primary"} onClick={handleFill3}> <BookmarkIcon> </BookmarkIcon></Button>
              </CardActions>
            </Card>
          }

        </div>
      </div>
      <div className="app__body-review">
        <div className="review-wrap">
          <div className='reviews' style={{ color: 'white', fontFamily: 'Libre Baskerville', fontStyle: 'normal', fontWeight: 400, fontSize: '32px' }}>Reviews
            <hr />
          </div>
          <div className='num' style={{ fontFamily: 'Nunito', fontStyle: 'normal', fontWeight: 600, fontSize: '16px', color: 'rgba(255,255,255,0.8' }}>1
            <div style={{ fontFamily: 'Nunito', fontStyle: 'normal', fontWeight: 600, fontSize: '16px', color: 'rgba(255,255,255,0.5 ', marginRight: '1rem' }}>/12</div>
            <br />
            <Button style={{ opacity: '0.8', color: 'white' }}>
              <ArrowBack style={{ opacity: '0.8' }} /> </Button>
            <Button style={{ opacity: '0.8', color: 'white' }} >
              <ArrowForwardIcon style={{ opacity: '0.8' }} />
            </Button>
          </div>


        </div>
      </div>
      <div className="app__body-reviewcard" >
        <div className="review1">
          <Card sx={{ maxWidth: 345, backgroundColor: '#0A0B1A' }}>
            <CardHeader
              avatar={
                <Avatar src={images.Hellen} alt='Hellen'>
                </Avatar>
              }
              title={
                <Typography style={{
                  fontFamily: 'Quattrocento', fontStyle: 'normal', fontWeight: 700, fontSize: '16px', color: 'white'
                }}>Hellen Jummy</Typography>
              }
              subheader={
                <Typography style={{ fontFamily: 'Rubik', fontStyle: 'normal', fontWeight: 400, fontSize: '11px', color: '#E5C558', display: 'flex' }}>
                  <Avatar src={images.US} alt='US' style={{ width: 20, height: 20 }}></Avatar>
                  PALO ALTO,CA
                </Typography>
              }
            />
            <CardContent>
              <Typography style={{ color: 'white' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget
                laoreet adipiscing. </Typography>
            </CardContent>

          </Card>
        </div>
        <div className="review1">
          <Card sx={{ maxWidth: 345, backgroundColor: '#0A0B1A' }}>
            <CardHeader
              avatar={
                <Avatar src={images.Isaac} alt='Hellen'>
                </Avatar>
              }
              title={
                <Typography style={{
                  fontFamily: 'Quattrocento', fontStyle: 'normal', fontWeight: 700, fontSize: '16px', color: 'white'
                }}>Isaac Oluwatemilorun</Typography>
              }
              subheader={
                <Typography style={{ fontFamily: 'Rubik', fontStyle: 'normal', fontWeight: 400, fontSize: '11px', color: '#E5C558', display: 'flex' }}>
                  <Avatar src={images.IT} alt='US' style={{ width: 20, height: 20 }}></Avatar>
                  PALO ALTO,CA
                </Typography>
              }
            />
            <CardContent>
              <Typography style={{ color: 'white' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget
                laoreet adipiscing.  </Typography>
            </CardContent>

          </Card>
        </div>



        <div className="review1">
          <Card sx={{ maxWidth: 345, backgroundColor: '#0A0B1A' }}>
            <CardHeader
              avatar={
                <Avatar src={images.Hellen2} alt='Hellen'>
                </Avatar>
              }
              title={
                <Typography style={{
                  fontFamily: 'Quattrocento', fontStyle: 'normal', fontWeight: 700, fontSize: '16px', color: 'white'
                }}>Hellen Jummy</Typography>
              }
              subheader={
                <Typography style={{ fontFamily: 'Rubik', fontStyle: 'normal', fontWeight: 400, fontSize: '11px', color: '#E5C558', display: 'flex' }}>
                  <Avatar src={images.US} alt='US' style={{ width: 20, height: 20 }}></Avatar>
                  PALO ALTO,CA
                </Typography>
              }
            />
            <CardContent>
              <Typography style={{ color: 'white' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget
                laoreet adipiscing. </Typography>
            </CardContent>

          </Card>
        </div>



      </div>
    </div>
  )
}

export default Body;