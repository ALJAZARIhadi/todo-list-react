import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import DeleteIcon from '@mui/icons-material/Delete';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';

export default function TodoList() {
  return (
    <Container maxWidth="sm" sx={{  height: "500px" }}>
      <CssBaseline />
      <Card sx={{ minWidth: 275, marginTop: "60px" }}>
        <CardContent>
        </CardContent>
          <Grid container spacing={2}>
            <Grid size={4}>
              <DeleteIcon></DeleteIcon>   
              <EditOutlinedIcon></EditOutlinedIcon>
              <DoneOutlinedIcon></DoneOutlinedIcon>
            </Grid>
            <Grid size={8}>
              <p sx={{color:"black"}}>Task Name:</p>
              <p>Task description</p>
            </Grid>
          </Grid>
      </Card>
    </Container>
  );
}
