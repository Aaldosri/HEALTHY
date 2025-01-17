// import React from "react";

// export default function Footer() {
//   return (
//     <div style={{ height: "30vh", background: "green", marginTop: "30vh" }}>
//       <h1>Hello</h1>
//     </div>
//   );
// }
// import React from "react";
// import { Typography, Box } from "@mui/material";
// import Grid from "@mui/material/Grid2"; // استيراد Grid2
// import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; // استيراد أيقونات وسائل التواصل الاجتماعي

// export default function Footer() {
//   return (
//     <Box
//       sx={{
//         background: "linear-gradient(to right, #1c1c1c, #3a3a3a)",
//         padding: "40px 20px",
//         color: "#fff",
//         borderTop: "2px solid #ff4081", // خط فاصل باللون الوردي
//         marginTop: "20vh",
//       }}
//     >
//       <Grid
//         container
//         spacing={2}
//         justifyContent="center"
//         style={{ display: "flex", justifyContent: "space-around" }}
//       >
//         {/* زيادة المسافة بين الأعمدة */}
//         <Grid item xs={12} sm={6} md={4}>
//           <Box sx={{ textAlign: "center" }}>
//             <Typography
//               variant="h6"
//               sx={{ color: "#fff", marginBottom: "10px" }}
//             >
//               تابعونا على وسائل التواصل الاجتماعي
//             </Typography>
//             <Box sx={{ display: "flex", justifyContent: "center" }}>
//               <a
//                 href="https://facebook.com"
//                 style={{
//                   color: "#fff",
//                   margin: "0 20px", // زيادة المسافة بين الأيقونات
//                   textDecoration: "none",
//                   fontSize: "24px",
//                   transition: "color 0.3s",
//                 }}
//                 onMouseEnter={(e) => (e.target.style.color = "#3b5998")}
//                 onMouseLeave={(e) => (e.target.style.color = "#fff")}
//               >
//                 <FaFacebook />
//               </a>
//               <a
//                 href="https://twitter.com"
//                 style={{
//                   color: "#fff",
//                   margin: "0 20px", // زيادة المسافة بين الأيقونات
//                   textDecoration: "none",
//                   fontSize: "24px",
//                   transition: "color 0.3s",
//                 }}
//                 onMouseEnter={(e) => (e.target.style.color = "#1DA1F2")}
//                 onMouseLeave={(e) => (e.target.style.color = "#fff")}
//               >
//                 <FaTwitter />
//               </a>
//               <a
//                 href="https://instagram.com"
//                 style={{
//                   color: "#fff",
//                   margin: "0 20px", // زيادة المسافة بين الأيقونات
//                   textDecoration: "none",
//                   fontSize: "24px",
//                   transition: "color 0.3s",
//                 }}
//                 onMouseEnter={(e) => (e.target.style.color = "#C13584")}
//                 onMouseLeave={(e) => (e.target.style.color = "#fff")}
//               >
//                 <FaInstagram />
//               </a>
//             </Box>
//           </Box>
//         </Grid>
//         <Grid item xs={12} sm={6} md={4}>
//           <Typography
//             variant="h5"
//             sx={{ fontWeight: "bold", color: "#fff", textAlign: "center" }}
//           >
//             Abdullah
//           </Typography>
//           <Typography
//             variant="h6"
//             sx={{ color: "#fff", marginTop: "10px", textAlign: "center" }}
//           >
//             Abdullah&copy; جميع الحقوق محفوظة
//           </Typography>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }

import React from "react";
import { Typography, Container } from "@mui/material";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2"; // استيراد Grid2
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; // استيراد أيقونات وسائل التواصل الاجتماعي

export default function Footer() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20vh",
        height: "30vh",
        background: "#e1eacd",
        marginTop: "20vh",
      }}
    >
      <div>
        <Typography variant="h5" style={{ margin: "10px" }}>
          HEALTHY
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <a
            href="https://facebook.com"
            style={{
              color: "#fff",
              margin: "0 20px", // زيادة المسافة بين الأيقونات
              textDecoration: "none",
              fontSize: "24px",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#3b5998")}
            onMouseLeave={(e) => (e.target.style.color = "#fff")}
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            style={{
              color: "#fff",
              margin: "0 20px", // زيادة المسافة بين الأيقونات
              textDecoration: "none",
              fontSize: "24px",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#1DA1F2")}
            onMouseLeave={(e) => (e.target.style.color = "#fff")}
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            style={{
              color: "#fff",
              margin: "0 20px", // زيادة المسافة بين الأيقونات
              textDecoration: "none",
              fontSize: "24px",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#C13584")}
            onMouseLeave={(e) => (e.target.style.color = "#fff")}
          >
            <FaInstagram />
          </a>
        </Box>
        <p>Coby Right @HEALTHY 2025</p>
      </div>
      <div>
        <Typography variant="h6">Contact Us</Typography>
        <Typography variant="body2">About Us</Typography>
        <Typography variant="body2">Careers</Typography>
        <Typography variant="body2">Contact</Typography>
      </div>
      <div>
        <Typography variant="h6">Account</Typography>
        <Typography variant="body2">About Us</Typography>
        <Typography variant="body2">Careers</Typography>
        <Typography variant="body2">Contact</Typography>
      </div>
      <div>
        <Typography variant="h6">Suppurt</Typography>
        <Typography variant="body2">About Us</Typography>
        <Typography variant="body2">Careers</Typography>
        <Typography variant="body2">Contact</Typography>
      </div>
    </div>
  );
}
