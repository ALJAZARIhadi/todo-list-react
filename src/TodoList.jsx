import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import TextField from "@mui/material/TextField";

export default function TodoList() {
  return (
    <Container maxWidth="sm" sx={{ height: "500px" }}>
      <CssBaseline />

      <Card sx={{ minWidth: 275, marginTop: "60px" }}>
        <CardContent></CardContent>

        <Typography
          variant="h2"
          component="h1"
          sx={{
            color: "black !important",
            display: "flex",
            justifyContent: "center",
          }}
        >
          المهام اليومية
        </Typography>

        <ToggleButtonGroup
          exclusive
          aria-label="text"
          sx={{ marginTop: "15px" }}
        >
          <ToggleButton value="left" aria-label="left aligned">
            غير منجز
          </ToggleButton>
          <ToggleButton value="center" aria-label="centered">
            منجز
          </ToggleButton>
          <ToggleButton value="right" aria-label="right aligned">
            الكل
          </ToggleButton>
        </ToggleButtonGroup>

        <Grid
          container
          spacing={2}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Grid
            size={4}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <DeleteIcon
              sx={{
                background: "White",
                color: "red",
                border: "solid 3px red",
                borderRadius: "100%",
              }}
            ></DeleteIcon>
            <EditOutlinedIcon
              sx={{
                background: "White",
                color: "blue",
                border: "solid 3px blue",
                borderRadius: "100%",
              }}
            ></EditOutlinedIcon>
            <DoneOutlinedIcon
              sx={{
                background: "White",
                color: "green",
                border: "solid 3px green",
                borderRadius: "100%",
              }}
            ></DoneOutlinedIcon>
          </Grid>
          <Grid size={8}>
            <Typography
              variant="h4"
              component="h1"
              sx={{
                color: "black !important",
                display: "flex",
                justifyContent: "end",
              }}
            >
              :المهمة
            </Typography>
            <p>شرح المهمة</p>
          </Grid>
        </Grid>
        <div sx={{display:"flex", alignItems:"left"}}>
          <Typography
            variant="h4"
            component="h1"
            sx={{
              color: "black !important",
              display: "flex",
              justifyContent: "end",
              marginTop: "15px",
            }}
          >
            :اضافة مهمة
          </Typography>
          <TextField id="outlined-basic" label="Task" variant="outlined" />
        </div>
      </Card>
    </Container>
  );
}
