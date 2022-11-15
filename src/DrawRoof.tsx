import Box from "@mui/material/Box";
import CustomMap from "./CustomMap";

export default function DrawRoof() {
  return (
    <Box sx={{ width: "100%" }}>
      <CustomMap
        center={{ lat: 41.862297, lng: -87.616849 }}
        zoom={100}
      ></CustomMap>
    </Box>
  );
}
