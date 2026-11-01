import * as React from "react";
import { useState } from "react";
/* MUI components */
import { TextField } from "@mui/material";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";

/*======End of MUI components */

/* Context */
import { useContext } from "react";
import { TodosContext } from "../contexts/todosContext";
/*==== End of Context */

/* Dialog */
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TurnLeft } from "@mui/icons-material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

/* ========= End of Dialog */

export default function Todo({ todo }) {
  const { todos, setTodos } = useContext(TodosContext);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState({
    title: todo.title,
    description: todo.description ,
  });
  // Event handlers
  function handleDoneClick() {
    const updatedTodos = todos.map((t) => {
      if (t.id == todo.id) t.isCompleted = !t.isCompleted;
      return t;
    });
    setTodos(updatedTodos);
  }
  function handleDeleteClick() {
    setShowDeleteDialog(true);
  }
  function handleEditClicK() {
    setShowEditDialog(true);
  }
  function handleClose() {
    setShowDeleteDialog(false);
  }
  function handleCloseEdit() {
    setShowEditDialog(false);
  }
  function handleDeleteConfirm() {
    const updatedTodos = todos.filter((t) => {
      return t.id != todo.id;
    });
    setTodos(updatedTodos);
  }

  function handleEditConfirm() {
    const updatedTodos = todos.map((t) => {
      if (t.id == todo.id) {
        return { ...t, title: updatedTodo.title, description: updatedTodo.description };
      } else {
        return t;
      }
    });
    setTodos(updatedTodos);
    setShowEditDialog(false)
  }
  //=====End Events Handlers
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
          <TextField
            autoFocus
            required
            margin="dense"
            id="title"
            label="عنوان المهمة"
            type="text"
            fullWidth
            variant="standard"
            value={updatedTodo.title} // <-- هنا التعديل المهم
            onChange={(e) => {
              setUpdatedTodo({ ...updatedTodo, title: e.target.value });
            }}
          />

          <TextField
            margin="dense"
            id="description"
            label="وصف المهمة"
            type="text"
            fullWidth
            variant="standard"
            value={updatedTodo.description} // <-- هنا التعديل المهم
            onChange={(e) => {
              setUpdatedTodo({ ...updatedTodo, description: e.target.value });
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEdit} autoFocus>
            لا
          </Button>
          <Button onClick={handleEditConfirm}>نعم , تاكيد</Button>
        </DialogActions>
      </Dialog>
      {/*=======End of Edit Dialog */}
      {/* بطاقة المهمة بتصميم ولون متناسق خاص بها */}
      <Card
        sx={{
          bgcolor: "#283593", // لون خلفية أزرق عميق وراقي للمهمة
          color: "white",
          p: 2, // مساحة داخلية مريحة
          mb: 3, // مسافة فاصلة عن حقل الإدخال أسفلها
          borderRadius: "12px", // حواف دائرية عصرية
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)", // ظل خفيف يبرز البطاقة عن الخلفية
        }}
      >
        <Grid container spacing={2} sx={{ alignItems: "center" }}>
          {/* قسم الأيقونات (حذف، تعديل، إنجاز) */}
          <Grid
            size={4}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <span onClick={handleDeleteClick}>
              <DeleteIcon
                sx={{
                  background: "white",
                  color: "red",
                  width: "39px",
                  height: "39px",
                  border: "solid 2px red",
                  borderRadius: "50%",
                  padding: "4px",
                  cursor: "pointer", // تجعل شكل الماوس يتبدل إلى يد عند الوقوف على الأيقونة
                  "&:hover": {
                    opacity: 0.8, // تأثير بصري خفيف عند مرور الماوس
                    scale: 1.23,
                  },
                }}
              />
            </span>{" "}
            <span onClick={handleEditClicK}>
              <EditOutlinedIcon
                sx={{
                  background: "white",
                  color: "blue",
                  border: "solid 2px blue",
                  width: "39px",
                  height: "39px",
                  borderRadius: "50%",
                  padding: "4px",
                  cursor: "pointer", // تجعل شكل الماوس يتبدل إلى يد عند الوقوف على الأيقونة
                  "&:hover": {
                    opacity: 0.8,
                    scale: 1.23, // تأثير بصري خفيف عند مرور الماوس
                  },
                }}
              />
            </span>
            <span onClick={handleDoneClick}>
              <DoneOutlinedIcon
                sx={{
                  background: todo.isCompleted ? "#8bc34a" : "white",
                  color: todo.isCompleted ? "white" : "#8bc34a",
                  width: "39px",
                  height: "39px",
                  border: "solid 2px green",
                  borderRadius: "50%",
                  padding: "4px",
                  cursor: "pointer", // تجعل شكل الماوس يتبدل إلى يد عند الوقوف على الأيقونة
                  "&:hover": {
                    opacity: 0.8, // تأثير بصري خفيف عند مرور الماوس
                    scale: 1.23,
                  },
                }}
              />
            </span>
          </Grid>

          {/* قسم النصوص (عنوان المهمة وشرحها) */}
          <Grid size={8} sx={{ textAlign: "right" }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                color: "#ffffff",
                textDecoration: todo.isCompleted ? "line-through" : "normal",
              }}
            >
              {todo.title}
            </Typography>
            <Typography variant="h6">{todo.description}</Typography>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}
