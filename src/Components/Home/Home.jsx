import { useState, useEffect } from 'react';
import ProductCard from '../ProductDetails/productCard';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useSelector } from 'react-redux';

const Home = () => {
  const [products, setProducts] = useState([]);
  const state = useSelector((state) => state)
  console.log(state);
  useEffect(() => {
    fetch('/db.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <Box m={3} sx={{ flexGrow: 1 }}>
      <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" justifyContent="center">
        {
          products.map((product, index) => <ProductCard key={index} product={product} />)
        }
      </Stack>
    </Box>
  )
}

export default Home