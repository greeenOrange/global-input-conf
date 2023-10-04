import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Stack from '@mui/joy/Stack';
import Badge from '@mui/joy/Badge';
import Typography from '@mui/material/Typography';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actionCreators/actionCreators';
import { useLocation } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const { pathname } = useLocation()
    return (
        <Card sx={{ maxWidth: 345 }}>
            {pathname.includes("cart") &&<Stack
                direction="row"
                justifyContent="end"
                alignItems="end"
                spacing={2}
                m={2}
            >
                <Badge
                badgeContent={product?.quantity}
                >
                    <Typography fontSize="xl">🛒</Typography>
                </Badge>
            </Stack>}

            <CardMedia
                sx={{ height: 260, padding: 1 }}
                image={product?.image}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product?.model}
                </Typography>
                {product?.keyFeature?.map((feature, index) => <Typography sx={{ margin: 1 }} key={index} variant="body2" color="text.secondary">
                    {feature}
                </Typography>)}
            </CardContent>
            <CardActions>
                <Button fullWidth variant="contained"
                    onClick={() => dispatch(addToCart(product))}
                >
                    <ShoppingCart sx={{ mr: 1 }} />
                    add to Cart
                </Button>
                <Button variant="contained"
                >
                    <EditNoteIcon />
                </Button>

            </CardActions>
        </Card>
    )
}

export default ProductCard