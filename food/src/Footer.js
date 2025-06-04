import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div>
        <Typography
          variant="h5"
          style={{ display: "flex", justifyContent: "center" }}
        >
          HEALTHY
        </Typography>
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
        >
          <a
            href="https://facebook.com"
            style={{
              color: "black",
              margin: "0 20px",
              textDecoration: "none",
              fontSize: "24px",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#3b5998")}
            onMouseLeave={(e) => (e.target.style.color = "black")}
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            style={{
              color: "black",
              margin: "0 20px",
              textDecoration: "none",
              fontSize: "24px",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#1DA1F2")}
            onMouseLeave={(e) => (e.target.style.color = "black")}
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            style={{
              color: "black",
              margin: "0 20px",
              textDecoration: "none",
              fontSize: "24px",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#C13584")}
            onMouseLeave={(e) => (e.target.style.color = "black")}
          >
            <FaInstagram />
          </a>
        </Box>
        <p>Coby Right @HEALTHY 2025</p>
      </div>
      <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
        <Typography variant="h6">Contact Us</Typography>
        <Typography variant="body2">Healthy@healthy.com</Typography>
        <Typography variant="body2">0966-10-3955</Typography>
      </div>
      <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
        <Typography variant="h6">Account</Typography>
        <Typography variant="body2">Sign in</Typography>
        <Typography variant="body2">Sign Up</Typography>
      </div>
      <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
        <Typography variant="h6">Suppurt</Typography>
        <Typography variant="body2">Help Center</Typography>
        <Typography variant="body2">FAQ</Typography>
      </div>
      <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
        <Typography variant="h6">App</Typography>
        <Typography variant="body2">IOS app</Typography>
        <Typography variant="body2">Androied app</Typography>
      </div>
    </footer>
  );
}
