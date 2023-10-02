import { useProducts } from '../../Context/ProductProvider';
import ProductCard from '../ProductDetails/productCard';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/joy/Button';
import { Typography } from "@mui/material";
import { actionTypes } from '../../State/actionTypes';

function Cart() {
  const { dispatch, state: { cart, loading, error } } = useProducts();
  const handleRemove = (productId) => {
    console.log(productId);
    dispatch({ type: actionTypes.REMOVE_ITEM, payload: productId });
}

  let content;

  if (loading) {
    content = <Button loading variant="plain"> Plain </Button>
  }
  if (error) {
    content = <Typography level="title-sm">Something went wrong</Typography>
  }
  if (!loading && !error && cart?.length === 0) {
    content = <Typography level="title-sm">Product is Empty</Typography>
  }
  if (!loading && !error && cart.length) {
    content = cart.map((product) => (
      <div key={product._id}>
        <ProductCard product={product} />
        <Button
          variant="contained"
          onClick={() => handleRemove(product._id)}
        >
          Remove
        </Button>
      </div>
    ));
  }

  return (
    <Box m={3} sx={{ flexGrow: 1 }}>
      <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" justifyContent="center">
        {content}
      </Stack>
    </Box>
  )
}

export default Cart