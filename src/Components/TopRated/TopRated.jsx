import { useProducts } from "../../Context/ProductProvider"
import ProductCard from "../ProductDetails/productCard";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/joy/Button';
import { Typography } from "@mui/material";

const TopRated = () => {
    const { state: { products, loading, error } } = useProducts();
    console.log(products);
    let content;
  
    if (loading) {
      content = <Button loading variant="plain"> Plain </Button>
    }
    if (error) {
      content = <Typography level="title-sm">Something went wrong</Typography>
    }
    if (!loading && !error && products.length === 0) {
      content = <Typography level="title-sm">Product is Empty</Typography>
    }
    if (!loading && !error && products.length) {
      content = products.filter(product => product.rating >= 4).map(product => <ProductCard key={product?._id} product={product} />)
    }
    return (
      <Box m={3} sx={{ flexGrow: 1 }}>
        <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" justifyContent="center">
          {content}
        </Stack>
      </Box>
    )
  }

export default TopRated