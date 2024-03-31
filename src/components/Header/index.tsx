import { Box, Container, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom"; 
import ActionButton from "../ActionButton";
//import watch from "../../assets/images/watch.png";
//import pocketWatch from "../../assets/images/png-transparent-pocket-watch.png";
//import laptop7 from "../../assets/images/png-transparent-laptop-video-game-lenovo.png";
//import xbox from "../../assets/images/xbox.png";
import banner from "../../assets/images/banner.png";

const Header = () => {
  const navigate = useNavigate(); 
  const handleStartShopping = () => {
    navigate("/products"); 
  };

  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        width: 1,
        height: "500px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg" sx={{ padding: { lg: "0px !important" } }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent={"space-between"}
        >
          <Stack
            direction="column"
            alignItems={{ md: "start", xs: "center" }}
            spacing={2.5}
            sx={{ textAlign: { md: "unset", xs: "center" } }}
          >
            <Typography
              sx={{
                fontWeight: 300,
                fontSize: { lg: "80px", xs: "70px" },
                color: "secondary.main",
                textTransform: "uppercase",
              }}
            >
              Shop Our 
              <br /> Products
            </Typography>
            <ActionButton content="Start Shopping" onClick={handleStartShopping} />
          </Stack>
          <Box sx={{ width: 1, display: { md: "contents", xs: "none" } }}>
            <img
              src={banner}
              alt="watch"
              style={{ width: "44.5%", zIndex: 0 }}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Header;
