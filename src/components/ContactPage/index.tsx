import { Container, Typography } from "@mui/material";

const ContactPage = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      <Typography variant="h2" sx={{ marginBottom: 4 }}>
        Contact Us
      </Typography>
      <img src="https://img.freepik.com/free-photo/business-woman-talking-phone-side-view_23-2149442329.jpg?size=626&ext=jpg&ga=GA1.2.2031292154.1706356291&semt=ais" alt="Contact Us" style={{ marginBottom: 16, cursor: "pointer", width: "80%" }} />
      <Typography variant="body1" sx={{ marginBottom: 2 }}>
        If you have any questions, feedback, or inquiries, please feel free to reach out to us using the contact information provided below. We're always here to assist you.
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 2 }}>
      Email:<span style={{ fontWeight: 500, textDecoration: "underline", cursor: "pointer" }}>
							info@gmail.com
			</span><br />
      Phone: <span style={{ fontWeight: 500, textDecoration: "underline", cursor: "pointer" }}>
							+27 111 222 3332 
			</span><br />
        Address: 95 Main Road, Cape Town, South Africa
      </Typography>
    </Container>
  )
}

export default ContactPage