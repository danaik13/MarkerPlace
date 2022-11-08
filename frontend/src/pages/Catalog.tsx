import { Typography, Breadcrumbs, Link, Card, CardMedia, CardContent, Grid } from "@mui/material";
import smartphone from '../assets/images/c25ba376479916cc4a596055b736abd4e49cdee83c6438fe63cc18d62f20ee42.png';
import komp from '../assets/images/d8ebb6eda3210347f2614c878e5a7ebe7992469f025d2dc073464462fe875ded.png';

const Catalog = () => (
  <>
    <Breadcrumbs aria-label="breadcrumb" sx={{mt: "1rem"}}>
      <Link underline="hover" color="inherit" href="/">
        MarketPlace
      </Link>
      <Typography color="text.primary">Каталог товаров</Typography>
    </Breadcrumbs>
    <Typography variant="h4" component="h1" sx={{mt: "1rem"}}>Каталог товаров</Typography>

    <Grid container spacing={2} sx={{mt: "1rem"}}>
      <Grid item xs={4}>
        <Card sx={{ maxWidth: 345, height: '100%', }}>
          <CardContent sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "betweeen",
            alignItems: "center"
          }}>
            <img
              src={smartphone}
              loading="lazy"
            />
            <Typography gutterBottom variant="h5" component="div" sx={{mt: "1rem"}}>
              Смартфоны и гаджеты
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card sx={{ maxWidth: 345 }}>
        <CardContent sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "betweeen",
            alignItems: "center"
          }}>
          <img
              src={komp}
              loading="lazy"
            />
            <Typography gutterBottom variant="h5" component="div" sx={{mt: "1rem"}}>
              Компьютеры
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </>
)
  
export default Catalog;