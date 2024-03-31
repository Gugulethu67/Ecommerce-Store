import { Container, Typography } from "@mui/material";
import { aboutus } from "../../data";

const AboutPage = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      <Typography variant="h2" sx={{ marginBottom: 4 }}>
        About Us
      </Typography>
      <img src={aboutus.image} alt="Contact Us" style={{ marginBottom: 16, cursor: "pointer", width: "100%" }} />
      <Typography variant="body1" sx={{ marginBottom: 2 }}>
        Our company is committed to providing high-quality products that enhance your lifestyle. <br/> With a focus on innovation and customer satisfaction, we strive to bring you the latest technology and stylish designs. <br/> Whether you're looking for mobile devices, smartwatches, or other gadgets, we have something for everyone.
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 2 }}>
        We believe in delivering exceptional value to our customers by offering competitive prices without compromising on quality. <br/>Our team is dedicated to ensuring a seamless shopping experience from start to finish. <br/>Explore our wide range of products and discover the perfect fit for your needs.
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 2 }}>
        As a company, we prioritize transparency and integrity in all our dealings. We value the trust our customers place in us <br/>and continuously work to exceed their expectations. Thank you for choosing us as your preferred destination for all your tech needs.
        </Typography>
    </Container>
  )
}

export default AboutPage