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
export default function TodoList() {
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
          sx={{ marginTop: "15px",mb:"10px" }}
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
                  borderRadius: "50%",
                  padding: "4px",
                  cursor: "pointer",
                }}
              />
              <DoneOutlinedIcon
                sx={{
                  background: "white",
                  color: "green",
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
                المهمة:
              </Typography>
              
            </Grid>
          </Grid>
        </Card>
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
              />
            </Grid>
            <Grid size={4}>
              <Button
                variant="contained"
                color="success"
                fullWidth
                sx={{ height: "56px", fontSize: "1rem" }}
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
