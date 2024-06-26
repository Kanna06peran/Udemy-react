
function Navbar(){return(<div className="navbar">
    <div classn="navbar__s1">
        <h1 className="navbar__title">Udemy</h1>
    </div>

    <div className="navbar__s2">
        <i className="fa-solid fa-search"></i>
        <input placeholder="Search for anything here.Tech,Business,Art.."/>

    </div>

    <div className="navbar__s3">
        <p>Courses</p>
        <div className="mylearning">
            <p>My Learning</p>
            <div className="mylearning__popup">
                <p>You did't purchase anything</p>
            </div>
        </div>
               
        <i className="fa-regular fa-credit-card"></i>
        <i className="fa-solid fa-bell"></i>
        <i className="fa-solid fa-user"></i>


    </div>
    <div className="navbar__s4">
    <i className="fa-solid fa-bar"></i>
    </div>
</div>)}


export default Navbar