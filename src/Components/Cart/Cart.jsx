import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../ProductDetails/productCard';
import { Button } from '@mui/base';
import { removeFromCart } from '../../redux/actionCreators/actionCreators';


function Cart() {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  return (
    <Box m={3} sx={{ flexGrow: 1 }}>
      <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" justifyContent="center">
        {
        cart.sort((a, b) => a._id - b._id)
          .map(product => <Box key={product._id}
            direction="row" useFlexGap flexWrap="wrap"
          >
            <ProductCard product={product} />
            <Button
            onClick={() => dispatch(removeFromCart(product))}
            >
              Remove
            </Button>
          </Box>)
        }
      </Stack>
    </Box>
  )
}

export default Cart