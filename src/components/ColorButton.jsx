import { Button } from "@mui/material";
import React from "react";

const ColorButton = () => {
  return (
    <div className="ColorButton">
      <Button color="secondary">Secondary</Button>
      <Button variant="contained" color="success">
        Success
      </Button>
      <Button variant="outlined" color="error">
        Error
      </Button>
    </div>
  );
};

export default ColorButton;
