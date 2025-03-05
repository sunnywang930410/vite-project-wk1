import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './style.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='box'>
        <header className="header">
            <div className="title">Vegetables</div>
            <div className="place"></div>
            <div className="more">
                <div className="fb"><a href="https://www.facebook.com/profile.php?id=61551801308522" target="_blank"><img src="./img/btn_facebook.png" alt="fb" ></img></a></div>
                <div className="ig"><a  href="https://www.instagram.com/" target="_blank"><img src="./img/btn_instagram.png" alt="ig"></img></a></div>
                <div className="line">|</div>
                <button className="login">LOGIN</button>
                <button className="join">JOIN</button>
            </div>
        </header>
        <nav className="nav">
                <div className="home">Home</div>
                <div className="home">About Us</div>
                <div className="home">Vegetables</div>
                <div className="home">Online</div>
                <div className="home">Contact</div>
        </nav>
        <article className="article">
            <div className="box_main_content">
                <img src="./img/img_main_pumpkin.png" alt="pic1"/>
            </div>
            <div className="information">
                <div className="box_vegetable">
                    <div className="box_vegetable_title">Vegetables</div>
                    <img className="vegimg" src="./img/img_vegetables_carrot.png" alt="pic2"/>
                    <img  className="vegimg" src="./img/img_vegetables_corn.png" alt="pic3"/>
                    <img className="vegimg fix" src="./img/img_vegetables_pepper.png" alt="pic4"/>
                </div>
                <div className="box_contact_text">
                    <div className="contact_title">Contact</div>
                    <div className="textbox"> 
                        <div className="question">
                            For any questions or suggestions about Vegetables, Vegetables Club or your online order you can contact Vegetables Customer Service by phone, email or post and we’ll be happy to help.              
                        </div>
                        <hr></hr>
                        <div className="Email">
                            E-mail : Vegetables@aaabbccc.com <br/>
                            PHONE : +886-123-456-789
                        </div>
                    </div>   
                </div>
            </div>
        </article>
        <footer className="footer">
          <div className="footer_text">
             Copyrights 2017 Vegetables cise / Design by Vegetables
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
