import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function MySnackBar({open}) {
  return (
    <div>
      <Snackbar open={open}>
        <Alert severity="success" variant="filled" sx={{ width: "100%" }}>
          This is a success Alert inside a Snackbar!
        </Alert>
      </Snackbar>
    </div>
  );
}
