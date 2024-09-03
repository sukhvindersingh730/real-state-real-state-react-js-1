import React from 'react'
import { Link } from 'react-router-dom';
import style from '../component/Agent.module.css'
export const Agent = () => {
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

<div className={`${style.cardContainerAgent}`}>
<div className={`${style.cardAgent}`}>
    <img src='https://images.pexels.com/photos/7414931/pexels-photo-7414931.jpeg?auto=compress&cs=tinysrgb&w=600'></img>
    <h2>HONEY SINGH AHLUWALIA</h2>
    <h4>REAL ESTATE AGENT</h4>
    <h4>New Delhi -INDIA</h4>
</div>

<div className={`${style.cardAgent}`}>
    <img src='https://images.pexels.com/photos/8292805/pexels-photo-8292805.jpeg?auto=compress&cs=tinysrgb&w=600'></img>
    <h2>HONEY SINGH AHLUWALIA</h2>
    <h4>REAL ESTATE AGENT</h4>
    <h4>New Delhi -INDIA</h4>
</div>

<div className={`${style.cardAgent}`}>
    <img src='https://images.pexels.com/photos/7641853/pexels-photo-7641853.jpeg?auto=compress&cs=tinysrgb&w=600'></img>
    <h2>HONEY SINGH AHLUWALIA</h2>
    <h4>REAL ESTATE AGENT</h4>
    <h4>New Delhi -INDIA</h4>
</div>



<div className={`${style.cardAgent}`}>
    <img src='https://images.pexels.com/photos/8293740/pexels-photo-8293740.jpeg?auto=compress&cs=tinysrgb&w=600'></img>
    <h2>HONEY SINGH AHLUWALIA</h2>
    <h4>REAL ESTATE AGENT</h4>
    <h4>New Delhi -INDIA</h4>
</div>
<div className={`${style.cardAgent}`}>
    <img src='https://images.pexels.com/photos/8293650/pexels-photo-8293650.jpeg?auto=compress&cs=tinysrgb&w=600'></img>
    <h2>HONEY SINGH AHLUWALIA</h2>
    <h4>REAL ESTATE AGENT</h4>
    <h4>New Delhi -INDIA</h4>
</div>



<div className={`${style.cardAgent}`}>
    <img src='https://images.pexels.com/photos/8293693/pexels-photo-8293693.jpeg?auto=compress&cs=tinysrgb&w=600'></img>
    <h2>HONEY SINGH AHLUWALIA</h2>
    <h4>REAL ESTATE AGENT</h4>
    <h4>New Delhi -INDIA</h4>
</div>

<div className={`${style.cardAgent}`}>
    <img src='https://images.pexels.com/photos/7578982/pexels-photo-7578982.jpeg?auto=compress&cs=tinysrgb&w=600'></img>
    <h2>HONEY SINGH AHLUWALIA</h2>
    <h4>REAL ESTATE AGENT</h4>
    <h4>New Delhi -INDIA</h4>
</div>
<div className={`${style.cardAgent}`}>
    <img src='https://images.pexels.com/photos/5816288/pexels-photo-5816288.jpeg?auto=compress&cs=tinysrgb&w=600'></img>
    <h2>HONEY SINGH AHLUWALIA</h2>
    <h4>REAL ESTATE AGENT</h4>
    <h4>New Delhi -INDIA</h4>
</div>
<div className={`${style.cardAgent}`}>
    <img src='https://images.pexels.com/photos/7642016/pexels-photo-7642016.jpeg?auto=compress&cs=tinysrgb&w=600'></img>
    <h2>HONEY SINGH AHLUWALIA</h2>
    <h4>REAL ESTATE AGENT</h4>
    <h4>New Delhi -INDIA</h4>
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
