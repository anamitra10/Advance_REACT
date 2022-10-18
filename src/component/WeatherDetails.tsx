import "../style/weatherDetails.scss";
import union from "../asset/Union.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";


const WeatherDetails = () => {
  const location = useLocation();
  var time=new Date();
  console.log(location.state.props.weather.weather[0].icon);
  var pic = location.state.props.weather.weather[0].icon;
  console.log(pic);
  var url: string = `https://openweathermap.org/img/wn/${pic}@4x.png`;
  return <div>
    <div className="headerLow">
    <NavLink to="/" style={{textDecoration: "none"}}>{"< Back"}</NavLink>
    <div className="addList">
    <div>Add to list </div>  
    <img src={union} />
    </div>
    </div>
    <div>
    <div className="imgRes">
  <img src={url} />
  </div>
  <div className="location">{location.state.props.weather.name}</div>
  <div className="temp">{Math.ceil(location.state.props.weather.main.temp - 273.15)}°</div>
  </div>
  <div className="info">
    <div className="topRow">
      <div className="topRowDis">TIME</div>
      <div className="topRowDis">PRESSURE</div>
      <div className="topRowDis">%RAIN</div>
      <div className="topRowDis">HUMIDITY</div>
    </div>

    <div className="topRow">
      <div className="RowDis">{time.toLocaleString('en-US', { hour: 'numeric',minute: 'numeric', hour12: true })}</div>
      <div className="RowDis">{location.state.props.weather.main.pressure}</div>
      <div className="RowDis">--</div>
      <div className="RowDis">{location.state.props.weather.main.humidity}</div>
    </div>
  </div>
  </div>;
  
};

export default WeatherDetails;
