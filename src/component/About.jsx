import React from 'react'
import { Link } from 'react-router-dom';
import style from '../component/About.module.css'
export const About = () => {
    return (
<>
<nav>
    <div className={`${style.log}`}><h1>navbar</h1></div>
    <input type="checkbox" id="click" className={`${style.click1}`} />
    <label htmlFor="click"  ><i class="fa-solid fa-plus"></i></label>
    <ul>
    <li><Link to='/'> HOME</Link></li>
        <li><Link to='/Agent'>AGENT</Link></li>
        <li><Link to='/About'>ABOUT</Link></li>
        <li><Link to='/Property'>PROPERTY</Link></li>
        <li><Link to='/Contact'>CONTACT</Link></li>
    </ul>
    </nav>
<h1>HOW IT WORK</h1>
<div className={`${style.cardContainerAbout}`}>
<div className={`${style.cardAbout33}`}>
<i class="fa-solid fa-magnifying-glass"></i>
<h2>01. FIND PROPERTY</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing.  </p>
</div>

<div className={`${style.cardAbout33}`}>
    <i class="fa-solid fa-hand-holding-dollar"></i>
    <h2>02. BUY PROPERTY</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing.  </p>
</div>

<div className={`${style.cardAbout33}`}>
<i class="fa-solid fa-house-flag"></i>
<h2>03. OUSTANDING HOUSES</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing.  </p>
</div>

</div>

<div className={`${style.cardContainerAbout}`}>
<div className={`${style.cardAbout50}`}>
<img src="https://media1.giphy.com/media/EgLusvzOoph6D9ORFV/giphy.gif?cid=6c09b952ijqoagvp50ghxivaki5dene2nmdelwg4kzvhbvas&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="" />
</div>
<div className={`${style.cardAbout50}`}>
<h1>WAREHOUE REAL ESTATE TEMPLATE</h1>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, sunt!</p>
<p>Blanditiis molestiae porro tempora magnam ullam! Eius temporibus officia modi accusantium in veniam amet quo repudiandae nesciunt.</p>
<ul>
    <li>Animi, a. Explicabo, sit!</li>
    <li>Adipisicing elit. Consequuntur omnis aliquam voluptatem debitis accusamus id.</li>
    <li>Orem ipsum dolor sit amet consectetur.</li>
    <li>Soluta iste consequatur doloremque quae assumenda beatae quisquam! Dolorum, numquam cum. Amet!</li>
    <li>Amet consectetur adipisicing elit. Ratione aut fugiat iste exercitationem!</li>
</ul>
<button type="button">CONTACT</button>
</div>
</div>

<h1>SERVICES</h1>
<div className={`${style.cardContainerAbout}`}>
<div className={`${style.cardAbout33}`}>
    <div className={`${style.icon}`}>
<i class="fa-solid fa-magnifying-glass"></i>
<h2>FIND PROPERTY</h2>
    </div>
<p>Lorem ipsum dolor sit amet consectetur adipisicing. </p>
</div>

<div className={`${style.cardAbout33}`}>
    <div className={`${style.icon}`}>
    <i class="fa-solid fa-hand-holding-dollar"></i>
<h2>BUY PROPERTY</h2>
    </div>
<p>Lorem ipsum dolor sit amet consectetur adipisicing.  </p>
</div>

<div className={`${style.cardAbout33}`}>
    <div className={`${style.icon}`}>
    <i class="fa-solid fa-house-flag"></i>
<h2>BEAUTIFUL HOME</h2>
    </div>
<p>Lorem ipsum dolor sit amet consectetur adipisicing. </p>
</div>


<div className={`${style.cardAbout33}`}>
    <div className={`${style.icon}`}>
    <i class="fa-solid fa-building"></i>
<h2>BUILDINGS & LANDS</h2>
    </div>
<p>Lorem ipsum dolor sit amet consectetur adipisicing. </p>
</div>

<div className={`${style.cardAbout33}`}>
    <div className={`${style.icon}`}>
    <i class="fa-solid fa-location-crosshairs"></i>
<h2>PROPERTY LOCATOR</h2>
    </div>
<p>Lorem ipsum dolor sit amet consectetur adipisicing. </p>
</div>

<div className={`${style.cardAbout33}`}>
    <div className={`${style.icon}`}>
    <i class="fa-solid fa-mobile"></i>
<h2>MOBILE APPS</h2>
    </div>
<p>Lorem ipsum dolor sit amet consectetur adipisicing. </p>
</div>
</div>

<div className={`${style.cardContainerAbout_100}`}>
<div className={`${style.cardAbout25}`}>
    <h1>2035</h1>
    <h3>Year <br />Established</h3>
</div>
<div className={`${style.cardAbout25}`}>
<h1>870</h1>
<h3>Contractors <br /> Appointed</h3>
</div>
<div className={`${style.cardAbout25}`}>
<h1>235</h1>
<h3>Projects <br /> Completed</h3>
</div>
<div className={`${style.cardAbout25}`}>
<h1>26</h1>
<h3>Awards <br /> Won</h3>
</div>
</div>
<h1>PROJECTS</h1>

<div className={`${style.cardContainerAbout}`}>
<div className={`${style.cardAbout50}`}>
    <img src="https://images.pexels.com/photos/14423871/pexels-photo-14423871.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
</div>
<div className={`${style.cardAbout50}`}>
<img src="https://images.pexels.com/photos/5847345/pexels-photo-5847345.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
</div>
<div className={`${style.cardAbout50}`}>
<img src="https://images.pexels.com/photos/5847359/pexels-photo-5847359.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
</div>
<div className={`${style.cardAbout50}`}>
<img src="https://images.pexels.com/photos/5845747/pexels-photo-5845747.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
</div>
</div>

<h1>CLIENTS</h1>
<div className={`${style.cardContainerAbout_100}`}>
<div className={`${style.cardHome25}`}>
  <img src="data:image/png;base64,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" alt="" srcset="" />
</div>
<div className={`${style.cardHome25}`}>
  <img src="data:image/png;base64,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" alt="" srcset="" />
</div>
<div className={`${style.cardHome25}`}>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3YNjrIWJf3dYiln3TylGYePRh_WR5RkmDcA&s" alt="" srcset="" />
</div>
<div className={`${style.cardHome25}`}>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrxUxrsMEgqoGnJ1rF1EjPSj2cXncqYJStyg&s" alt="" srcset="" />
</div>
</div>

<footer>
    <div className={`${style.footerCard1}`}>      <h5>ABOUT US</h5>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolorum libero itaque aliquid voluptatum? Quibusdam quae aliquam voluptates consequuntur dolorum ipsam aperiam, porro soluta est, quam pariatur, neque ad veniam!
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, voluptatibus porro quae voluptates quibusdam ex ipsa necessitatibus qui magnam itaque maxime quo optio dignissimos voluptas ea est expedita quos dicta?
      </p>
    </div>
    <div className={`${style.footerCard1}`}>
    <ul>
        <li><Link to='/'> HOME</Link></li>
        <li><Link to='/Agent'>AGENT</Link></li>
        <li><Link to='/About'>ABOUT</Link></li>
        <li><Link to='/Property'>PROPERTY</Link></li>
        <li><Link to='/Contact'>CONTACT</Link></li>
      </ul>
    </div>
    <div className={`${style.footerCard1}`}>
      <h5>24 hours available</h5>
    </div>
    <div className={`${style.footerCard1}`}>
      <h5>CONTACT</h5>
      <h6>6395982105</h6>
      <h6>6395982105</h6>
    </div>

</footer>


</>
    )
}
