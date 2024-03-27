import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox({info}) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    const HOT_URL = "https://media.istockphoto.com/id/1224021113/photo/indian-cameleers-camel-driver-with-camel-silhouettes-in-dunes-on-sunset-jaisalmer-rajasthan.webp?b=1&s=170667a&w=0&k=20&c=tbQHyU-nBmjXzDltzBkwERtNwR7u9X0pQAJedllsCDg="
    const COLD_URL ="https://images.unsplash.com/photo-1516977103673-45be7d2850d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fENPTEQlMjBJTUFHRVN8ZW58MHx8MHx8fDA%3D"
    const RAIN_URL = "https://media.istockphoto.com/id/978499462/photo/monsoon-time-people-crossing-a-river-by-boat-in-rain.webp?b=1&s=170667a&w=0&k=20&c=9ZS3uA1gHRI12EyVsT1rB0KL30aAU_7vMO31RGsLcq4="
  
  return (
    <div className="InfoBox">
      <div className="card">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
              ? RAIN_URL
              : info.temp > 15
              ? HOT_URL
              : COLD_URL
              
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <div>Temprature = {info.temp}&deg;C</div>
              <div>Temprature = {info.humidity}</div>
              <p>Min Temp = {info.tempMin}&deg;C </p>
              <p>Min Temp = {info.tempMax}&deg;C </p>
              <p>
                The weather Can be described as {info.weather} and feels like{" "}
                {info.feelslike}&deg;C{" "}
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
