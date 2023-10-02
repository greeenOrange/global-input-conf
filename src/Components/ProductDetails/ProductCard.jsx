import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShoppingCart from '@mui/icons-material/ShoppingCart';

const ProductCard = ({ product }) => {
    
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
                {product?.keyFeature?.map((feature, index) =>  <Typography sx={{margin: 1}} key={index} variant="body2" color="text.secondary">
                    {feature}
                </Typography>)}
            </CardContent>
            <CardActions>
            <Button fullWidth variant="contained">
                <ShoppingCart sx={{mr: 1}}/>
                add to Cart
            </Button>
            </CardActions>
        </Card>
    )
}

export default ProductCard