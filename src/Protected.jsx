import { SortByAlpha } from "@mui/icons-material";
import FormatListBulleted from "@mui/icons-material/FormatListBulleted";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import propTypes from "prop-types";
import { Box } from "@mui/material";

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

const Cards = (props) => {
  const { displayedData } = props;
  return (
    <Grid container spacing={3}>
      {displayedData.map((item, index) => (
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
  const [isShowCards, setShowCards] = useState(false);
  const [isAZ, setIsAZ] = useState(true);
  const [displayedData, setDisplayedData] = useState(data);

  return (
    <Box sx={{ p: 3, display: "flex", flexDirection: "column", gap: 2 }}>
      <Typography>Protected Page</Typography>

      <Box sx={{ display: "flex", gap: 2, width: "fit-content" }}>
        <Button
          startIcon={<FormatListBulleted />}
          variant="contained"
          onClick={() => {
            setDisplayedData(shuffle([...data]));
            setShowCards(!isShowCards);
            console.log("'Browse All' clicked");
            console.log("isShowCards: " + isShowCards);
          }}
        >
          Browse All
        </Button>

        {isShowCards && (
          <Button
            startIcon={<SortByAlpha />}
            variant="contained"
            onClick={() => {
              if (isAZ) {
                setDisplayedData(
                  [...data].sort((a, b) => a.title.localeCompare(b.title))
                );
              } else {
                setDisplayedData(
                  [...data].sort((a, b) => b.title.localeCompare(a.title))
                );
              }
              setIsAZ(!isAZ);
              console.log("'Sort' clicked");
              console.log("A-Z: " + isAZ);
            }}
          >
            Sort
          </Button>
        )}
      </Box>

      {isShowCards && <Cards displayedData={displayedData} />}
    </Box>
  );
};

Cards.propTypes = {
  displayedData: propTypes.arrayOf(
    propTypes.shape({
      title: propTypes.string.isRequired,
      body: propTypes.string.isRequired,
    })
  ).isRequired,
};

export default Protected;
