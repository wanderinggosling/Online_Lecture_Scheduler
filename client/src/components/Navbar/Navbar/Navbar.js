import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'




// import { setCurrentPatient } from '../../actions/currentPatient'
// import { getPatientById } from '../../actions/patient'
import './Navbar.css'

const Navbar = () => {
    // // let navigate = useNavigate();
    // var User = useSelector((state) => (state.currentUserReducer));

    // // var Patient = useSelector((state) => (state.patientReducer));

    // const dispatch = useDispatch();
    // const navigate = useNavigate();

    // const handlelogout = () => {
    //     dispatch({ type: 'LOGOUT' });
    //     navigate('/login');
    //     dispatch(setCurrentUser(null));
    //     console.log(User)
    // }

    // const onClick=()=>{
    //     if(User?.result?.role==='patient'){
    //         navigate(`/ViewProfile/${User?.result?._id}`)
    //     }
    //     else if(User?.result?.role==='admin'){
    //         navigate('/ViewAdminProf')
    //     }
    //     else if(User?.result?.role==='doctor'){
    //         navigate('/ViewDocProf')
    //     }
    // }

    // useEffect(() => {
    //     const token = User?.token;

    //     if (token) {
    //         const decodeToken = decode(token)
    //         if (decodeToken.exp * 1000 < new Date().getTime()) {
    //             handlelogout();
    //         }
    //     }
    //     dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))));

    //     console.log({ User });

    // },// eslint-disable-next-line
    //     [dispatch])


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" style={{ fontFamily: 'auto' }}>OLS</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                    
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/Instructors">Instructors</Link>
                            </li>
                        </ul>
                    </div>
      
                    {/* <Link className="nav-link active item-hide-second" aria-current="page" to="/login" style={{ "color": "aliceblue", "marginRight": "4vh" }} >{!localStorage.getItem('token') ? "Login" : <AiOutlineLogout onClick={logout} />}</Link> */}
                </div>
            </nav>
        </div>
    )
}

export default Navbar
