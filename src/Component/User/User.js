import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './User.css';



const User = (props) => {
    console.log(props.user.name.first)
    const {name,email,gender,picture} = props.user;
   



    return (
        <div className="card-parent">
            <div>
            <Card className="card" sx={{ maxWidth: 330 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="auto"
                    image={picture.large}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name.first + ` ` +name.last}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <p>{gender}</p>
                        {email}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Send mail</Button>
                </CardActions>
            </Card>
            </div>
        </div>
    );
};

export default User;