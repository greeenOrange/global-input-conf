import { useState, useEffect } from 'react';
import ProductCard from '../ProductDetails/productCard';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import { toggleBrand, toggleStock } from '../../redux/reducers/filterAction';

const Home = () => {
  const [products, setProducts] = useState([]);
  const filters = useSelector((state) => state.filter.filters)
  const dispatch = useDispatch();
  const {brands, stock} = filters;
  console.log(brands);

  useEffect(() => {
    fetch('https://moon-tech-server-bnbv.onrender.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <Box m={3} sx={{ flexGrow: 1 }}>
      <Stack direction="row" 
      justifyContent="flex-end"
      py={4}
      spacing={2}>
        <Button 
        onClick={() => dispatch(toggleStock())} 
         variant={stock ? "contained": "outlined"}>In Stock</Button>
        <Button 
        onClick={() => dispatch(toggleBrand('amd'))} 
        variant={brands.includes("amd") ? "contained": "outlined"}>AMD</Button>
        <Button
        onClick={() => dispatch(toggleBrand('intel'))}  
        variant={brands.includes("intel") ? "contained": "outlined"}>Intel</Button>
      </Stack>
      <Stack spacing={{ xs: 1, sm: 2 }} direction="row" 
      useFlexGap flexWrap="wrap" justifyContent="center">

        {
          products.map((product, index) => <ProductCard key={index} product={product} />)
        }
      </Stack>
    </Box>
  )
}

export default Home