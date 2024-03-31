import { Link } from "react-router-dom";
import { Container, Stack, Typography } from "@mui/material";
import logo from "../../assets/images/Logo1.png";
import profile from "../../assets/images/profile.png";
import cart from "../../assets/images/cart.png";
import { Menu } from "@mui/icons-material";

const Navbar = () => {
  const navLinks = [
    { title: "Home", path: "/", active: true },
    { title: "Products", path: "/products", active: false }, 
    { title: "Blog", path: "/blog", active: false },
    { title: "About", path: "/about", active: false },
    { title: "Contact", path: "/contact", active: false },
  ];
  return (
    <Stack
      alignItems={"center"}
      justifyContent={"center"}
      sx={{ width: 1, height: 60, backgroundColor: "#fff" }}
    >
      <Container
        maxWidth="lg"
        sx={{ padding: { lg: "0px !important" } }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          { <img
            src={logo}
            alt="logo"
            style={{ width: "7%" }}
          /> }
          <Stack
            direction={"row"}
            alignItems="center"
            spacing={4}
            sx={{ display: { md: "flex", xs: "none" } }}
          >
            {navLinks.map((link, index) => {
              return (
                <Typography
                  key={index}
                  component={Link} 
                  to={link.path} 
                  sx={{
                    textTransform: "uppercase",
                    cursor: "pointer",
                    fontWeight: 400,
                    fontSize: 15,
                    color: link.active ? "primary.main" : "secondary.main",
                    zIndex: 10,
                    textDecoration: "none", 
                  }}
                >
                  {link.title}
                </Typography>
              );
            })}
          </Stack>
          <Stack
            direction="row"
            alignItems={"center"}
            spacing={2}
            sx={{ display: { md: "flex", xs: "none" } }}
          >
            <img
              src={profile}
              alt="profile"
              style={{ cursor: "pointer", zIndex: 10 }}
            />
            <img
              src={cart}
              alt="cart"
              style={{ cursor: "pointer", zIndex: 10 }}
            />
          </Stack>
          <Menu
            color="secondary"
            sx={{ display: { md: "none", xs: "flex" }, cursor: "pointer", fontSize: 30 }}
          />
        </Stack>
      </Container>
    </Stack>
  );
};

export default Navbar;
