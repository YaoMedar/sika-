import "./welcome.scss";
import { Link } from "react-router-dom";
import ApartmentIcon from '@mui/icons-material/Apartment';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import AirportShuttleOutlinedIcon from '@mui/icons-material/AirportShuttleOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';



const WelcomePage = () => {
    return (
        <div className="W">
            <div className="welcomeContainer">
                <div className='Welcome'>
                    <Link to="/house" style={{ textDecoration: "none" }}>
                        <div className='secCircle'>
                            <ApartmentIcon style={{ color: "var(--SC)" }} />
                        </div>
                    </Link>

                    <Link to="/food" style={{ textDecoration: "none" }}>
                        <div className='secCircle'>
                            <RestaurantIcon style={{ color: "var(--SB)" }} />
                        </div>
                    </Link>
                    <Link to="/" style={{ textDecoration: "none" }} >
                        <div className='CircleCenter' >
                            <img src="assets/logo.jpg" height="70px" className='logosika' alt="sîka" sx={{ display: { xs: "block", sm: "block" } }} />
                        </div>
                    </Link>
                    <Link to="/loto" style={{ textDecoration: "none" }}>
                        <div className='secCircle'>
                            <AirportShuttleOutlinedIcon style={{ color: "var(--SC)" }} />
                        </div>
                    </Link>
                    <Link to="/shop" style={{ textDecoration: "none" }}>
                        <div className='secCircle'>
                            <LocalMallOutlinedIcon style={{ color: "var(--SB)" }} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default WelcomePage

