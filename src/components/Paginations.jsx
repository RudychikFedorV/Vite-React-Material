import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Paginations = () => {
  return (
    <div className="Paginations">
      <Stack spacing={2}>
        <Pagination count={10} variant="outlined" color="primary" />
      </Stack>
    </div>
  );
};

export default Paginations;
