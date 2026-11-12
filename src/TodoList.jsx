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
//====ID library
import { v4 as uuidv4 } from "uuid";
//React states
import { useToast } from "./contexts/ToastContext";
import { useState, useContext, useEffect, useMemo } from "react";
import { TodosContext } from "./contexts/todosContext";

/* Dialog */
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

/* ========= End of Dialog and slide intialise  */

export default function TodoList() {
  const {showHideToast} =useToast();
  const { todos, setTodos } = useContext(TodosContext);
  
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [passTodo, setPassTodo] = useState({title:"" , description:""});
  const [displayTodosType, setDisplayTodosType] = useState("all");

  //filtering the todos

  const completed = useMemo(() => {
    return todos.filter((t) => {
      console.log("completed calculated");
      return t.isCompleted;
    });
  }, [todos]);

  const notCompleted = useMemo(() => {
    return todos.filter((t) => {
      console.log("not completed calculated");
      return !t.isCompleted;
    });
  }, [todos]);

  let TodoToBeRender = todos;
  if (displayTodosType == "completed") {
    TodoToBeRender = completed;
  } else if (displayTodosType == "non-Completed") {
    TodoToBeRender = notCompleted;
  } else {
    TodoToBeRender = todos;
  }

  const [titleInput, setTitleInput] = useState("");

  function changeDisplayType(e) {
    //console.log(e.target.value)
    setDisplayTodosType(e.target.value);
  }
  //=====Handlers
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
    showHideToast("تم اضافة المهمة بنجاح");
  }
  useEffect(() => {
    console.log("first");
    const storageTodos = JSON.parse(localStorage.getItem("todos")) ?? [];
    setTodos(storageTodos);
  }, []);

  function handleClose() {
    setShowDeleteDialog(false);
  }
  //=====Confirm handelrs
  function handleDeleteConfirm() {
    const updatedTodos = todos.filter((t) => {
      return t.id != passTodo.id;
    });
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setShowDeleteDialog(false);
    showHideToast("تم حذف المهمة بنجاح")
  }

  function handleEditConfirm() {
    const updatedTodos = todos.map((t) => {
      if (t.id == passTodo.id) {
        return {
          ...t,
          title: passTodo.title,
          description: passTodo.description,
        };
      } else {
        return t;
      }
    });
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setShowEditDialog(false);
    showHideToast("تم تحديث المهمة بنجاح");
  }
  //=====Confirm handelrs end
  function openDeleteDialog(todo) {
    setPassTodo(todo);
    setShowDeleteDialog(true);
  }
  function openUpdateDialog(todo) {
    setPassTodo(todo);
    setShowEditDialog(true);
  }

  function handleCloseEdit() {
    setShowEditDialog(false);
  }
  const todoJsx = TodoToBeRender.map((t) => {
    return (
      <Todo
        key={t.id}
        todo={t}
        showDialog={openDeleteDialog}
        showUpdateDialog={openUpdateDialog}
      />
    );
  });
  return (
    <>
      {/*Delete Dialog  */}
      <Dialog
        style={{ direction: "rtl" }}
        open={showDeleteDialog}
        slots={{
          transition: Transition,
        }}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        role="alertdialog"
      >
        <DialogTitle sx={{ color: "black !important" }}>
          هل تريد حذف هذه المهمة
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            لن تتمكن من استرداد هذه المهمة اذا حذفتها
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            لا
          </Button>
          <Button onClick={handleDeleteConfirm}>نعم , تاكيد</Button>
        </DialogActions>
      </Dialog>
      {/*=======End of Delete Dialog */}

      {/*Edit Dialog -=========- */}
      <Dialog
        style={{ direction: "rtl" }}
        open={showEditDialog}
        slots={{
          transition: Transition,
        }}
        keepMounted
        onClose={handleCloseEdit}
        aria-describedby="alert-dialog-slide-description"
        role="alertdialog"
      >
        <DialogTitle sx={{ color: "black !important" }}>
          تعديل المهمة
        </DialogTitle>
        <DialogContent style={{ direction: "rtl" }}>
          {/* نضيف شرطاً هنا لضمان عدم قراءة خصائص الـ null */}
          {passTodo && (
            <>
              <TextField
                autoFocus
                required
                margin="dense"
                id="title"
                label="عنوان المهمة"
                type="text"
                fullWidth
                variant="standard"
                value={passTodo.title}
                onChange={(e) => {
                  setPassTodo({ ...passTodo, title: e.target.value });
                }}
              />

              <TextField
                margin="dense"
                id="description"
                label="وصف المهمة"
                type="text"
                fullWidth
                variant="standard"
                value={passTodo.description}
                onChange={(e) => {
                  setPassTodo({ ...passTodo, description: e.target.value });
                }}
              />
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEdit} autoFocus>
            لا
          </Button>
          <Button onClick={handleEditConfirm}>نعم , تاكيد</Button>
        </DialogActions>
      </Dialog>
      {/*=======End of Edit Dialog */}

      <Container maxWidth="sm" sx={{ height: "500px" }}>
        <CssBaseline />

        <Card
          sx={{ minWidth: 275, padding: "20px", marginTop: "40px" }}
          style={{
            maxHeight: "80vh",
            overflow: "scroll",
            borderRadius: "25px",
          }}
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
                  disabled={titleInput <= 0}
                >
                  اضافة
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Card>
      </Container>
    </>
  );
}
