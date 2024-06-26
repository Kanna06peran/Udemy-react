import one from "../assets/images/programming.webp"
import two from "../assets/images/program2.jpg"
import three from "../assets/images/program3.jpg"
import four from "../assets/images/program4.jpg"
import five from "../assets/images/cloud4.webp"
import six from "../assets/images/cloud5.webp"
import seven from "../assets/images/ui.webp"
import eight from "../assets/images/ux.jpg"




function Popular(){return(
    <div class="popular">
        <h1 class="popular__title">Most Popular</h1>
        <p class="popular__subtitle">Pick the best fit</p>

        <div class="popular__container">
            <div class="course-card1">
                <img src={one}></img>
                <h3>2023 Python Data Visualisation Materclass</h3>
                <p>Col Steele</p>
                <p>5 ⭐⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>

            <div class="course-card1">
                <img src={two}></img>
                <h3>Python Full Stack Development</h3>
                <p>Stephen Spencer</p>
                <p>4.9⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
            <div class="course-card1">
                <img src={three}></img>
                <h3>Web Development Bootcamp</h3>
                <p>Hawking</p>
                <p>4.7⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
            <div class="course-card1">
                <img src={four}></img>
                <h3>Cloud Computing</h3>
                <p>Mowgli</p>
                <p>4.8 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>

            <div class="course-card1">
                <img src={five}></img>
                <h3>Introduction to Cloud Computing</h3>
                <p>Madan</p>
                <p>5 ⭐⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>

            <div class="course-card1">
                <img src={six}></img>
                <h3>Advance level of Cloud Computing</h3>
                <p>Henry</p>
                <p>4.8⭐⭐⭐⭐</p>
                <p>399 <del>1999</del></p>
            </div>
            <div class="course-card1">
                <img src={seven}></img>
                <h3>Introduction to UI/UX Development</h3>
                <p>Lavanya</p>
                <p>4.4⭐⭐⭐⭐</p>
                <p>299 <del>199</del></p>
            </div>
            <div class="course-card1">
                <img src={eight}></img>
                <h3>UI/UX Developer</h3>
                <p>Thanu</p>
                <p>4.3⭐⭐⭐⭐</p>
                <p>339 <del>999</del></p>
            </div>

        </div>

    </div>)}

export default Popular