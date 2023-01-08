import { geocode } from "@esri/arcgis-rest-geocoding";
import { ApiKeyManager } from "@esri/arcgis-rest-request";

import { Box, Divider, TextField } from "@mui/material";
import Map from "../../components/Map";

const API_KEY = "FBwl0cAS7xN1ML7lcqpR";

const WebMap = () => {
  const handleSearchSubmit = () => {
    geocode({
      address: "1600 Pennsylvania Ave",
      postal: 20500,
      countryCode: "USA",
      authentication: ApiKeyManager.fromKey("FBwl0cAS7xN1ML7lcqpR"),
    });
  };

  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        bgcolor="#F7F8F8"
        height="40px"
      >
        <Box display="flex" flexDirection="row" margin="0px 15px">
          <Box margin="0px 10px" fontWeight="400">
            Details
          </Box>
          <Box margin="0px 10px" fontWeight="400">
            Add
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box margin="0px 10px" fontWeight="400">
            Basemap
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyItems="center"
        >
          <Box margin="0px 10px" fontWeight="400">
            Save
          </Box>
          <Box margin="0px 10px" fontWeight="400">
            Share
          </Box>
          <Box margin="0px 10px" fontWeight="400">
            Print
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box margin="0px 10px" fontWeight="400">
            Measure
          </Box>
          <Box margin="0px 10px" fontWeight="400">
            Bookmarks
          </Box>
          <TextField
            id="standard-search"
            type="search"
            size="small"
            variant="standard"
            sx={{
              "& .MuiInputBase-root": {
                background: "#fff",
                width: "300px",
                margin: "0px 10px",
                border: "1px solid #ccc",

                "::before": {
                  borderBottom: "none",
                },

                "::after": {
                  borderBottom: "none",
                },
              },
              "& .MuiInputBase-input": {},
            }}
            onClick={handleSearchSubmit}
          />
        </Box>
      </Box>
      <Map />
    </>
  );
};

const styles = {
  map: {
    width: "800px",
    height: "600px",
  },
};

export default WebMap;
