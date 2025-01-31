import {useNavigate} from "react-router-dom";
import weatherIcon from '../assets/images/weather-icon.png';
import {Button} from "@mui/material";

function Home() {
    const navigate = useNavigate();
    return (
        <div style={{width: "100%", height: "100vh"}}>
            <div className="home-img">
                <img
                    src="https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/2021-12-financial-security-orgs-hero%402x.png?d=500x500&f=inside"
                    alt="background"/>

            </div>

            <div className="home-go">
                <img src={weatherIcon} alt="weather-icon"/>
                <h1>Breeze</h1>
                <p>Weather APP</p>
                <Button variant="contained"
                        onClick={() => {
                            navigate('/weather');
                        }}>
                    Get Started
                </Button>
            </div>
        </div>
    )
}

export default Home;