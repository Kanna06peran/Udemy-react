import one from "../assets/images/programming.webp"
import two from "../assets/images/program2.jpg"
import three from "../assets/images/program3.jpg"
import four from "../assets/images/program4.jpg"




function Recom(){return(<div class="recom">
    <h1 class="recom__title">Recommended for you</h1>
    <p>Pick the best fit</p>
    <div class="recom-container">
        <div class="course-card">
            <img src={one}></img>
            <h3>2023 Python Data Visualisation Materclass</h3>
            <p>Col Steele</p>
            <p>5 ⭐⭐⭐⭐⭐</p>
            <p>449 <del>1999</del></p>
        </div>

        <div class="course-card">
            <img src={two}></img>
            <h3>Python Full Stack Development</h3>
            <p>Stephen Spencer</p>
            <p>4.9⭐⭐⭐⭐</p>
            <p>449 <del>1999</del></p>
        </div>
        <div class="course-card">
            <img src={three}></img>
            <h3>Web Development Bootcamp</h3>
            <p>Hawking</p>
            <p>4.7⭐⭐⭐⭐</p>
            <p>449 <del>1999</del></p>
        </div>
        <div class="course-card">
            <img src={four}></img>
            <h3>Cloud Computing</h3>
            <p>Mowgli</p>
            <p>4.8 ⭐⭐⭐⭐</p>
            <p>449 <del>1999</del></p>
        </div>
    </div>

</div>
)}

export default Recom