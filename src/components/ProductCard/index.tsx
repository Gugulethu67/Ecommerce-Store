import { Box, Typography, Button } from "@mui/material";

type ProductCardProps = {
  image: string;
  title: string;
  price: string;
  link: string;
};

const ProductCard = ({ image, title, price, link }: ProductCardProps) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", padding: 2 }}>
      <img src={image} alt={title} style={{ width: "100%" }} />
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
        <Typography variant="h4" sx={{ textTransform: "uppercase", fontWeight: 400, marginTop: 1, marginBottom: 0 }}>
          {title}
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: 400, marginTop: 1 }}>
          Price: {price}
        </Typography>
        <Button variant="contained" color="primary" href={link} sx={{ marginTop: 2 }}>
          View Details
        </Button>
      </Box>
    </Box>
  );
};
`1`

export default ProductCard;
