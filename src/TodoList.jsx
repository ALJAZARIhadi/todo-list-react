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
import Box from "@mui/material/Box";
import Todo from "./components/Todo";
import { v4 as uuidv4 } from "uuid";

import { useState } from "react";

const initialTodos = [
  {
    id: uuidv4(),
    title: " قراءة كتاب",
    description: " نيتبنت تن سيت",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: " قراءة كتاب",
    description: " نيتبنت تن سيت",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: " قراءة كتاب",
    description: " نيتبنت تن سيت",
    isCompleted: false,
  },
];
export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos);
  const todoJsx = todos.map((t) => {
    return <Todo key={t.id} title={t.title} description={t.description} />;
  });
  const [titleInput ,setTitleInput] = useState("");

    function handleAddClic(){
      const newTodo = {
        id:uuidv4(),
        title:titleInput,
        description:"",
        isCompleted:false,
      };
      setTodos([...todos,newTodo])
      setTitleInput("");
    }
  return (
    <Container maxWidth="sm" sx={{ height: "500px" }}>
      <CssBaseline />

      <Card sx={{ minWidth: 275, padding: "20px", marginTop: "40px" }}>
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
          sx={{ marginTop: "15px", mb: "10px" }}
        >
          <ToggleButton
            value="left"
            aria-label="left aligned"
            sx={{ fontSize: "22px" }}
          >
            غير منجز
          </ToggleButton>
          <ToggleButton
            value="center"
            aria-label="centered"
            sx={{ fontSize: "22px" }}
          >
            منجز
          </ToggleButton>
          <ToggleButton
            value="right"
            aria-label="right aligned"
            sx={{ fontSize: "22px" }}
          >
            الكل
          </ToggleButton>
        </ToggleButtonGroup>

        {todoJsx}
        <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
          <Grid
            container
            spacing={2}
            sx={{ width: "100%", alignItems: "center" }}
          >
            <Grid size={8}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="عنوان المهمة الجديدة"
                variant="outlined"
                value={titleInput}
                onChange={(e) =>{
                  setTitleInput(e.target.value)
                }}
                onKeyDown={(e)=>{
                  if(e.key ==="Enter")
                  {

                    handleAddClic()
                  }
                }}
              />
            </Grid>
            <Grid size={4}>
              <Button
                variant="contained"
                color="success"
                fullWidth
                sx={{ height: "56px", fontSize: "1rem" }}                
                onClick={()=>{
                  handleAddClic()
                }}
              >
                اضافة
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </Container>
  );
}
