import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";

function Home(){
    const navigate = useNavigate();
    return(
        <div style={{
            width: "100%",
            height: '100vh'
        }}>
            <Button onClick={()=> {
                navigate('/weather')
            }}>
                이동
            </Button>
        </div>
    )
}
export default Home;