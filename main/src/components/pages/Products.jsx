import * as React from 'react';
import { styled } from '@mui/material/styles';
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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from 'axios';
import { useQuery } from 'react-query';


export default function Products() {
  //datassssss
  const [Fav, setFav] = React.useState([])
  const {error,isLoading,data,refetch} = useQuery(["products"], ()=>{
    return axios.get("https://fakestoreapi.com/products");
  },
  {
    staleTime: 20000
  });
  ////////////
  console.log(data);
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  return (<Card style={{display:'flex', flexWrap:'wrap', justifyContent:'space-around'}}>
    {data && data.data?.map(e=><div style={{display:'flex', flexDirection:'row'}}>
      <Card sx={{ maxWidth: 345 , margin:2 }}>
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
        />
      <CardContent>
        <Typography variant="body2" style={{textTransform:'uppercase', fontWeight:'700'}}>{e.category}</Typography>
        <Typography variant="body2" color="text.secondary">{e.description}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={()=>{setFav(data)}}>
          <FavoriteIcon/>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Typography>{`${e.price} dollar`}</Typography>
        <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{e.description}</Typography>
          
        </CardContent>
      </Collapse>
    </Card>
    </div>)}
  </Card>)
}
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));