import * as React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";``


export default function Todo({title,description}) {
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
            <DeleteIcon
              sx={{
                background: "white",
                color: "red",
                width:"39px",
                height:"39px",
                border: "solid 2px red",
                borderRadius: "50%",
                padding: "4px",
                cursor: "pointer",
              }}
            />
            <EditOutlinedIcon
              sx={{
                background: "white",
                color: "blue",
                border: "solid 2px blue",
                width:"39px",
                height:"39px",
                borderRadius: "50%",
                padding: "4px",
                cursor: "pointer",
              }}
            />
            <DoneOutlinedIcon
              sx={{
                background: "white",
                color: "green",
                width:"39px",
                height:"39px",
                border: "solid 2px green",
                borderRadius: "50%",
                padding: "4px",
                cursor: "pointer",
              }}
            />
          </Grid>

          {/* قسم النصوص (عنوان المهمة وشرحها) */}
          <Grid size={8} sx={{ textAlign: "right" }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", color: "#ffffff" }}
            >
             {title}
            </Typography>
            <Typography variant="h6">
              {description}
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}
