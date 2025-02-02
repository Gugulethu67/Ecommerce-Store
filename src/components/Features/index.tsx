import { Container, Stack, Typography } from "@mui/material";
import featureCart from "../../assets/images/feature-cart.png";
import qualityBadge from "../../assets/images/quality-badge.png";
import ticket from "../../assets/images/ticket.png";
import verified from "../../assets/images/verified.png";
const Features = () => {
	const featuresList = [
		{
			icon: featureCart,
			title: "Free delivery",
			description: "Enjoy free shipping on all orders",
		},
		{
			icon: qualityBadge,
			title: "Quality guarantee",
			description: "We guarantee top-notch quality products.",
		},
		{
			icon: ticket,
			title: "Daily offers",
			description: "Unlock exclusive daily offers.",
		},
		{
			icon: verified,
			title: "100% secure payment",
			description: "Shop with confidence using our secure payment gateway.",
		},
	];
	return (
		<Container
			maxWidth="lg"
			sx={{ margin: "0 auto", padding: { lg: "0px !important" }, marginTop: "100px !important" }}
		>
			<Stack
				direction={{ md: "row", xs: "column" }}
				alignItems="center"
				justifyContent="space-between"
				spacing={6}
				sx={{ width: 1, paddingLeft: { md: "0", xs: "40px" }, boxSizing: "border-box" }}
			>
				{featuresList.map((feature, index: number) => {
					return (
						<Stack
							key={index}
							direction={"row"}
							alignItems="start"
							spacing={1.5}
						>
							<img
								src={feature.icon}
								alt={feature.title}
							/>
							<Stack
								direction={"column"}
								alignItems="start"
								spacing={0.5}
							>
								<Typography
									color="secondary.main"
									sx={{ textTransform: "uppercase", fontWeight: 400, fontSize: 19 }}
								>
									{feature.title}
								</Typography>
								<Typography
									color="#3A3A3A"
									sx={{ fontWeight: 400, fontSize: 15, opacity: 0.8, maxidth: 210 }}
								>
									{feature.description}
								</Typography>
							</Stack>
						</Stack>
					);
				})}
			</Stack>
		</Container>
	);
};

export default Features;
