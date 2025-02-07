// MUI practice \\
import * as React from "react";
import FormatListBulleted from "@mui/icons-material/FormatListBulleted";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
//import Box from "@mui/material/Box";

const My_card = (
  <React.Fragment>
    <CardContent>
      <Typography variant="h5" component="div">
        Title
      </Typography>
      <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
        Body
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Left in for now</Button>
    </CardActions>
  </React.Fragment>
);

const data = [
  {
    title: "Zequest Solutions",
    body: "A pioneering tech company specializing in quantum computing and artificial intelligence applications for business automation.",
  },
  {
    title: "Nexus Industries",
    body: "Leading manufacturer of sustainable building materials with a focus on eco-friendly construction solutions.",
  },
  {
    title: "Meridian Systems",
    body: "Global provider of healthcare software solutions, specializing in patient management and medical record systems.",
  },
  {
    title: "Kinetic Dynamics",
    body: "Research and development firm focused on renewable energy storage solutions and advanced battery technology.",
  },
  {
    title: "Pinnacle Analytics",
    body: "Data analytics consulting firm helping businesses transform raw data into actionable intelligence.",
  },
  {
    title: "Quantum Logistics",
    body: "International shipping and supply chain management company utilizing AI for optimal route planning.",
  },
  {
    title: "Radiant Technologies",
    body: "Developer of cutting-edge display technologies for next-generation mobile devices and smart screens.",
  },
  {
    title: "Voyager Innovations",
    body: "Space technology startup working on developing sustainable solutions for long-distance space travel.",
  },
  {
    title: "Wavelength Communications",
    body: "Telecommunications provider specializing in high-speed fiber optic networks and 5G infrastructure.",
  },
  {
    title: "Titan Manufacturing",
    body: "Heavy equipment manufacturer known for producing robust machinery for mining and construction industries.",
  },
];

data;

function Protected() {
  return (
    <>
      <Button
        startIcon={<FormatListBulleted />}
        onClick={() => {
          console.log("This is a test");
        }}
      >
        Browse All
      </Button>

      <Grid>
        <Box sx={{ minWidth: 275 }}>
          <Card variant="outlined">{My_card}</Card>
        </Box>
        <Box sx={{ minWidth: 275 }}>
          <Card variant="outlined">{My_card}</Card>
        </Box>
        <Box sx={{ minWidth: 275 }}>
          <Card variant="outlined">{My_card}</Card>
        </Box>
      </Grid>
    </>
  );
}

export default Protected;
