import { Container, Grid, Typography } from "@mui/material";
import ProductCard from "../ProductCard";
import { iphones, laptops, smartTvs, smartWatches } from "../../data";

const ProductPage = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      <Typography variant="h2" sx={{ marginBottom: 4, marginTop: 6 }}>
        Laptops
      </Typography>
      <Grid container spacing={4}>
        {laptops.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProductCard
              image={product.image}
              title={product.title}
              price={product.price}
              link={product.link}
            />
          </Grid>
        ))}
      </Grid>

      
      <Typography variant="h2" sx={{ marginBottom: 4 }}>
        Mobiles & Tablets
      </Typography>
      <Grid container spacing={4}>
        {iphones.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProductCard
              image={product.image}
              title={product.title}
              price={product.price}
              link={product.link}
            />
          </Grid>
        ))}
      </Grid>
      <Typography variant="h2" sx={{ marginBottom: 4, marginTop: 6 }}>
        Smart Watches
      </Typography>
      <Grid container spacing={4}>
        {smartWatches.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProductCard
              image={product.image}
              title={product.title}
              price={product.price}
              link={product.link}
            />
          </Grid>
        ))}
      </Grid>
      <Typography variant="h2" sx={{ marginBottom: 4, marginTop: 6 }}>
        Smart TV
      </Typography>
      <Grid container spacing={4}>
        {smartTvs.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProductCard
              image={product.image}
              title={product.title}
              price={product.price}
              link={product.link}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductPage;
