// MUI practice \\
import FormatListBulleted from "@mui/icons-material/FormatListBulleted";
import { Button, Grid2 } from "@mui/material";

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
      <Grid2 container spacing={2}>
        <Grid2 size={8}>item</Grid2>
        <Grid2 size={4}>item</Grid2>
        <Grid2 size={4}>item</Grid2>
        <Grid2 size={8}>item</Grid2>
      </Grid2>
    </>
  );
}

export default Protected;
