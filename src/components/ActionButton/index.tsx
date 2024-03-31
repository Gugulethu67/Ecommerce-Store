import { Button } from "@mui/material";

interface ActionButtonProps {
  type?: "primary" | "secondary";
  width?: string;
  height?: string;
  color?: string;
  content: string;
  noRadius?: boolean;
  onClick?: () => void; // Add onClick prop
}

const ActionButton = ({
  content,
  width,
  height,
  color,
  type = "secondary",
  noRadius,
  onClick, // Receive onClick prop
}: ActionButtonProps) => {
  return (
    <Button
      sx={{
        backgroundColor: type === "primary" ? "primary.main" : "secondary.main",
        width: width ? width : "224px",
        height: height ? height : "53px",
        color: color ? color : "#fff",
        fontWeight: 400,
        boxShadow: "none",
        letterSpacing: "2px",
        borderRadius: noRadius ? "0px" : "4px",
        fontSize: 13.5,
        "&:hover": {
          boxShadow: "none",
          backgroundColor: "secondary.main",
        },
      }}
      onClick={onClick} // Attach onClick handler
    >
      {content}
    </Button>
  );
};

export default ActionButton;
