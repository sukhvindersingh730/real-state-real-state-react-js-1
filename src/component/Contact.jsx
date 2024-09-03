import React from 'react'
import { Link } from 'react-router-dom';
import style from '../component/contact.module.css'
export const Contact = () => {
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

    
    <div className={`${style.cardContainerContact}`}>
    <div className={`${style.cardContact50}`}>
        <form action="">
            <label htmlFor="">NAME :</label><br />
            <input type="text" /><br />
            <label htmlFor="">NUMBER :</label><br />
            <input type="number" /><br />
            <label htmlFor="">EMAIL :</label><br />
            <input type="email" /><br />
            <label htmlFor="">SUBJECT :</label><br />
            <input type="text" /><br />
            <label htmlFor="">MESSAGE :</label><br />
            <textarea name=""></textarea><br />
            <input type="submit" value=" SUBMIT"    id={`${style.btn}`}/>
        </form>
    </div>

    <div className={`${style.cardContact50}`}>
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10799.804443696652!2d77.596481!3d29.815010000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ebd006d54473b%3A0xbf318a659fdc7bff!2zSG9uZXkgSG9tZSDwn4-h!5e1!3m2!1sen!2sin!4v1725171769120!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
