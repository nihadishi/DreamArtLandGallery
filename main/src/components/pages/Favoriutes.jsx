import React, { useContext, useEffect, useState } from 'react'

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { AdminOrderContext } from '../admin/AdminOrderContext';
import { FavContext } from '../API/FavContext';

const Favoriutes = () => {
  const { Fav, isExists, ToggleFav } = React.useContext(FavContext)
  const { CustomerOrders, setCustomerOrders, AllCustomerOrders } = React.useContext(AdminOrderContext)
  console.log(Fav);

  return (<>
    <Card style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      {Fav.map(e =>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Card sx={{ maxWidth: 345, margin: 2 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">{e.id}</Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={e.title}
              subheader={e.rating?.rate + " from 5 between " + e.rating.count + " people"}
            />
            <CardMedia
              component="img"

              height="194"
              image={e.image}
              alt="Paella dish"
              sx={{ objectFit: 'contain' }}
            />
            <CardContent>
              <Typography variant="body2" style={{ textTransform: 'uppercase', fontWeight: '700' }}>{e.category}</Typography>
              <Typography variant="body2" color="text.secondary" maxHeight={100} overflow={'hidden'}>{e.description}</Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton color="error" aria-label="add to favorites" onClick={() => ToggleFav(e)}>
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <Typography>{`${e.price} dollar`}</Typography>
            </CardActions>
            <Collapse timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>{e.description}</Typography>

              </CardContent>
            </Collapse>
          </Card>
        </div>
      )
      }
    </Card>
    {Fav.length > 0 ?
      <Button style={{ width: '100%' }} variant="contained" endIcon={<SendIcon />} onClick={() => AllCustomerOrders([...Fav])}>
        {/* ???????????????????????????????????????????????????????? */}
        Buy All
      </Button> :
      <Button style={{ width: '100%' }} variant="disabled" endIcon={<SendIcon />}>
        Buy All
      </Button>
    }
  </>
  )
}

export default Favoriutes