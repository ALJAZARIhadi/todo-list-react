import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Todo from "./components/Todo";
import { v4 as uuidv4 } from "uuid";
import { useState, useContext, useEffect } from "react";
import { TodosContext } from "./contexts/todosContext";

export default function TodoList() {
  const { todos, setTodos } = useContext(TodosContext);
  const [displayTodosType, setDisplayTodosType] = useState("all");

  const completed = todos.filter((t) => {
    return t.isCompleted;
  });
  const notCompleted = todos.filter((t) => {
    return !t.isCompleted;
  });

  let TodoToBeRender = todos;
  if (displayTodosType == "completed") {
    TodoToBeRender = completed;
  } else if (displayTodosType == "non-Completed") {
    TodoToBeRender = notCompleted;
  } else {
    TodoToBeRender = todos;
  }

  const todoJsx = TodoToBeRender.map((t) => {
    return <Todo key={t.id} todo={t} />;
  });
  const [titleInput, setTitleInput] = useState("");

  function changeDisplayType(e) {
    //console.log(e.target.value)
    setDisplayTodosType(e.target.value);
  }
  function handleAddClic() {
    const newTodo = {
      id: uuidv4(),
      title: titleInput,
      description: "",
      isCompleted: false,
    };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setTitleInput("");
  }
  useEffect(() => {
    console.log("first");
    const storageTodos = JSON.parse(localStorage.getItem("todos"));
    setTodos(storageTodos);
  }, []);

  return (
    <Container maxWidth="sm" sx={{ height: "500px"  }}>
      <CssBaseline />

      <Card
        sx={{ minWidth: 275, padding: "20px", marginTop: "40px" }}
        style={{ maxHeight: "80vh", overflow: "scroll" , borderRadius:"25px" }}
      >
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
          value={displayTodosType}
          sx={{ marginTop: "15px", mb: "10px" }}
          onChange={changeDisplayType}
        >
          <ToggleButton
            value="non-Completed"
            aria-label="left aligned"
            sx={{ fontSize: "22px" }}
          >
            غير منجز
          </ToggleButton>
          <ToggleButton
            value="completed"
            aria-label="centered"
            sx={{ fontSize: "22px" }}
          >
            منجز
          </ToggleButton>
          <ToggleButton
            value="all"
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
                onChange={(e) => {
                  setTitleInput(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleAddClic();
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
                onClick={() => {
                  handleAddClic();
                }}
                disabled={titleInput <=0}
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
