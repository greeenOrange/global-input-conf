import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { useProducts } from '../../Context/ProductProvider';
import { actionTypes } from '../../State/actionTypes';

const ProductCard = ({ product }) => {
    const { dispatch } = useProducts();

    const handleAddToCart = () => {
        dispatch({ type: actionTypes.ADD_TO_CART, payload: product })
    }
    return (
        <Card sx={{ maxWidth: 345 }}>
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
                    onClick={handleAddToCart}
                >
                    <ShoppingCart sx={{ mr: 1 }} />
                    add to Cart
                </Button>
               
            </CardActions>
        </Card>
    )
}

export default ProductCard