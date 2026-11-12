/* MUI components */

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
import { useToast } from "../contexts/ToastContext";
/*==== End of Context */

export default function Todo({ todo, showDialog, showUpdateDialog }) {
  const { todos, setTodos } = useContext(TodosContext);
  const { showHideToast } = useToast();

  // Event handlers
  function handleDoneClick() {
    const updatedTodos = todos.map((t) => {
      if (t.id == todo.id) t.isCompleted = !t.isCompleted;
      return t;
    });
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    showHideToast("تم التعديل بنجاح");
  }

  function handleEditClicK() {
    showUpdateDialog(todo);
  }

  function handleDeleteClick() {
    showDialog(todo);
  }
  //=====End Events Handlers
  return (
    <>
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
