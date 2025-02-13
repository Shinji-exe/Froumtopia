import Layout from '../../components/Layout/Layout'
import "./Home.css"
import { verify } from "../../services/user"
import { useState, useEffect } from 'react'
import CardHeader from '@material-ui/core/CardHeader';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';
import { getCategories } from '../../services/category'
import { Link } from 'react-router-dom';



const useStyles = makeStyles({
  root: {
    width: 245,
    height: 245,
  },
});


export default function ImgMediaCard(props) {
  const [categories, setCategories] = useState([])
  const [user, setUser] = useState(null)

  useEffect(() => {
    const verifyUser = async () => {
      setUser(await verify())
    }
    verifyUser()
  }, [])

  useEffect(() => {
    const fetchCategories = async () => {
      let data = await getCategories();
      setCategories(data)
    }
    fetchCategories()
  }, [])

  const classes = useStyles();


  if (!categories) {
    return "Loading..."
  }

  const CATEGORIES = categories?.sort((a, b) => b?.threadId.length - a?.threadId.length).filter(category => category.threadId.length > 0).map((category, index) => {
    return (
      <div className="trend-card-container" key={index}>
        <Card className={classes.root}>
          <Link to={`/threads/${category.threadId[0]?._id}`} style={{textDecoration:"none", color:"#000"}}>
            <CardHeader
              title={category.threadId[0]?.title}
            />
            {category.threadId[0]?.imgUrl && <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image={category.threadId[0]?.imgUrl}
            />}</Link>
          <CardContent>
            {/* <Typography variant="body2" color="textSecondary" component="p">
              {category.threadId[0]?.body}
            </Typography> */}
          </CardContent>
        </Card>
      </div>
    )
  })

  return (
    <Layout user={user}>
      <h2 className="trending-text">Trending Today</h2>
      <div className="main-card-container">
        {CATEGORIES}
      </div>
    </Layout>
  );
}

