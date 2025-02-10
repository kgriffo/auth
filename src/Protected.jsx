// MUI practice \\
import { SortByAlpha } from "@mui/icons-material";
import FormatListBulleted from "@mui/icons-material/FormatListBulleted";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import { useState } from "react";

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

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Cards = () => {
  const shuffledData = shuffle([...data]);
  const sortedAZ = [...data].sort((a, b) => a.title.localeCompare(b.title));
  const sortedZA = [...data].sort((a, b) => b.title.localeCompare(a.title));

  return (
    <Grid container spacing={3}>
      {shuffledData.map((item, index) => (
        <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={index}>
          <Card>
            <CardContent>
              <Typography variant="h5">{item.title}</Typography>
              <Typography>{item.body}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

const Protected = () => {
  const [showCards, setShowCards] = useState(false);
  const [sortMode, setSortMode] = useState("AZ");

  return (
    <>
      <Grid container direction="row" spacing={2}>
        <Button
          startIcon={<FormatListBulleted />}
          variant="contained"
          onClick={() => {
            console.log("Browse All clicked");
            setShowCards(!showCards);
          }}
        >
          Browse All
        </Button>
        <Button
          startIcon={<SortByAlpha />}
          variant="contained"
          onClick={() => {
            console.log("Sort clicked");
            if (sortMode === "AZ") setSortMode("ZA");
            else setSortMode("AZ");
            console.log("sortMode: " + sortMode);
          }}
        >
          Sort
        </Button>
        {showCards && <Cards />}
      </Grid>
    </>
  );
};

export default Protected;
