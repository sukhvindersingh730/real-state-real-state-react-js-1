import React from 'react'
import style from '../component/Property.module.css'
import { Link } from 'react-router-dom';
export const Property = () => {
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


    <div className={`${style.topcontainer}`}>
    <h1 >Property</h1>
    </div>

    <div className={`${style.cardcontainer}`}>
    <div className={`${style.card}`}>
        <img src="https://images.pexels.com/photos/3656188/pexels-photo-3656188.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <h3>HD17 19 UTICA AVE</h3>
        <h6>New Delhi -INDIA</h6>
    </div>
    <div className={`${style.card}`}>
        <img src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <h3>HD17 19 UTICA AVE</h3>
        <h6>New Delhi -INDIA</h6>
    </div>
    <div className={`${style.card}`}>
        <img src="https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <h3>HD17 19 UTICA AVE</h3>
        <h6>New Delhi -INDIA</h6>
    </div>
    <div className={`${style.card}`}>
        <img src="https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <h3>HD17 19 UTICA AVE</h3>
        <h6>New Delhi -INDIA</h6>
    </div>
    <div className={`${style.card}`}>
        <img src="https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <h3>HD17 19 UTICA AVE</h3>
        <h6>New Delhi -INDIA</h6>
    </div>
    <div className={`${style.card}`}>
        <img src="https://images.pexels.com/photos/277667/pexels-photo-277667.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <h3>HD17 19 UTICA AVE</h3>
        <h6>New Delhi -INDIA</h6>
    </div>
    <div className={`${style.card}`}>
        <img src="https://images.pexels.com/photos/1438834/pexels-photo-1438834.jpeg?auto=compress&cs=tinysrgb&w=600f" />
        <h3>HD17 19 UTICA AVE</h3>
        <h6>New Delhi -INDIA</h6>
    </div>
    <div className={`${style.card}`}>
        <img src="https://images.pexels.com/photos/140963/pexels-photo-140963.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <h3>HD17 19 UTICA AVE</h3>
        <h6>New Delhi -INDIA</h6>
    </div>
    <div className={`${style.card}`}>
        <img src="https://images.pexels.com/photos/221024/pexels-photo-221024.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <h3>HD17 19 UTICA AVE</h3>
        <h6>New Delhi -INDIA</h6>
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
