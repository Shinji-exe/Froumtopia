import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Layout from '../../components/Layout/Layout';
import { getThread } from '../../services/thread';

// export default function Thread(props) {
//   const [thread, setThread] = useState([]);
//   const { id } = useParams();

//   useEffect(() => {
//     const fetchThread = async () => {
//       const thread = await getThread(id);
//       console.log(thread)
//       setThread(thread);
//     }
//     fetchThread();
//   }, [id]);

//   const displayEditLik = () => {
//     if (thread.userId === props.user?.id) {
//       return <Link to={`/thread-edit/${thread._id}`} style={{ color: "blue" }}>Edit</Link>
//     }
//   }
//   console.log(props.user)
//   return (
//     <Layout>
//       <div key={thread.userId} >
//         <h4>{thread.title}</h4>
//         <img style={{ width: "100px", height: "100px" }} alt={thread.imgUrl} src={thread.imgUrl} />
//         <p>{thread.body}</p>
//         {displayEditLik()}
//       </div>
//     </Layout>
//   )
// }

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard(props) {
  const [thread, setThread] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchThread = async () => {
      const thread = await getThread(id);
      console.log(thread)
      setThread(thread);
    }
    fetchThread();
  }, [id]);

  const displayEditLik = () => {
    if (thread.userId === props.user?.id) {
      return <Link to={`/thread-edit/${thread._id}`} style={{ color: "blue" }}>Edit</Link>
    }
  }
  console.log(props.user)

  const classes = useStyles();

  return (
    <Layout>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={thread.title}
          subheader={thread.createdAt}
        />
        <CardMedia
          className={classes.media}
          image={thread.imgUrl}
          title={thread.imgUrl}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {thread.body}
            {displayEditLik()}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Layout>
  );
}
