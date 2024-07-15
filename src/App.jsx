import { useState } from "react";
import viteLogo from "/vite.svg";
import Logo from "./assets/img/Logo.svg";
import lupa from "./assets/img/Icon.png";
import browser from "./assets/img/brawser.svg";
import "./App.css";
import location from "./assets/img/Button.png";
import Cart from "./assets/img/Cart.jpg";
import profile from "./assets/img/Button-copy.png";
import mainImg from "./assets/img/card1-img.png";
import pause from "./assets/img/pause-icon.png";
import polligon from "./assets/img/Polygon1.png";
import partners from "./assets/img/partners.png";
import card4Img from "./assets/img/card4_1img.png";
import rectangle from "./assets/img/Rectangle.png";
import card42Img from "./assets/img/card4-2img.png"
import card43Img from "./assets/img/card4-3img.png"
import card44Img from "./assets/img/card4-4img.png"



function App() {
  return (
    <>
      <header>
        <div className="container">
          <nav className="Navbar">
            <img src={Logo} alt="logo" />
            <img className="lupa" src={lupa} alt="lupa-img" />
            <input
              className="nav-input"
              type="text"
              placeholder="Cari apapun disini..."
            />
            <div className="nav-select-browser">
              <img src={browser} alt="img" />
              <select className="nav-select" name=" Bahasa Indonesia">
                <option value=""> Bahasa Indonesia</option>
              </select>
            </div>
            <div className="nav-end">
              <img src={location} alt="" />
              <div className="location-select">
                <p className="lokasi">Lokasi</p>
                <select
                  className="nav-select nav-end-select"
                  name=" Bahasa Indonesia"
                >
                  <option value=""> Indonesia, Yogyakarta</option>
                </select>
              </div>
            </div>
          </nav>
        </div>
        <div className="hr"></div>
        <div className="container">
          <div className="wrapper">
            <div className="header-card1">
              <select className="nav-select" name=" Bahasa Indonesia">
                <option value=""> Gunung</option>
              </select>
              <select className="nav-select" name=" Bahasa Indonesia">
                <option value="">Pantai</option>
              </select>
              <select className="nav-select" name=" Bahasa Indonesia">
                <option value="">Kuliner</option>
              </select>
              <select className="nav-select" name=" Bahasa Indonesia">
                <option value="">Outbond</option>
              </select>
              <select className="nav-select" name=" Bahasa Indonesia">
                <option value="">Sejarah</option>
              </select>
              <select className="nav-select" name=" Bahasa Indonesia">
                <option value="">Edukasi</option>
              </select>
              <select className="nav-select" name=" Bahasa Indonesia">
                <option value="">Romantis</option>
              </select>
              <select className="nav-select" name=" Bahasa Indonesia">
                <option value="">Alam</option>
              </select>
            </div>
            <div className="images">
              <img src={Cart} alt="icon" />
              <img src={profile} alt="icon" />
            </div>
          </div>
          <div className="card1">
            <div className="card1_div">
              <div className="card1_start">
                ✈ • Explore the wonderful indonesia!
              </div>
              <h2 className="card1_title">
                Liburan & nikmati{" "}
                <span className="card1_title_span">tempat baru</span> di
                indonesia ️🏝
              </h2>
              <p className="card1_desc">
                Destinize membuat kamu selalu update terkait tempat liburan baru
                di Indonesia dengan mengikuti perkembangan para influencer di
                sosial media ✨
              </p>
              <div className="btn-wrapper">
                <button className="fir-btn">Mulai sekarang →</button>

                <div className="btns-wr">
                  <div className="puse">
                    <img src={polligon} alt="" />
                  </div>
                  <button className="sec-btn">Putar Demo</button>
                </div>
              </div>
            </div>
            <img src={mainImg} alt="" />
          </div>
        </div>
      </header>
      <main>
        <div className="container">
          <div className="card2">
            <img src={partners} alt="" />
          </div>
          <div className="card3">
            <p className="card3_title">DESTINASI FAVORIT</p>
            <div className="card3-wr">
              <p className="card3_desc">✈ • Temukan Destinasi Favoritmu </p>
              <select
                className="nav-select card3_selest"
                name=" Bahasa Indonesia"
              >
                <option value="">Sejarah</option>
              </select>
            </div>
            <div className="card3_div">
              <div className="card3_div_card">
                <div className="card3-span">
                  <p className="card3_div_word">
                    Raja Ampat <br />
                  <span> Bali</span> 
                  </p>
                </div>
                <img src={card4Img} alt="" />
                <img className="rectangle" src={rectangle} alt="" />
              </div>
              <div className="card3_div_card">
                <div className="card3-span">
                  <p className="card3_div_word">
                    Raja Ampat <br />
                  <span> Bali</span> 
                  </p>
                </div>
                <img src={card42Img} alt="" />
                <img className="rectangle" src={rectangle} alt="" />
              </div>
          
              <div className="card3_div_card">
                <div className="card3-span">
                  <p className="card3_div_word">
                    Raja Ampat <br />
                  <span> Bali</span> 
                  </p>
                </div>
                <img src={card43Img} alt="" />
                <img className="rectangle" src={rectangle} alt="" />
              </div>
          
              <div className="card3_div_card">
                <div className="card3-span">
                  <p className="card3_div_word">
                    Raja Ampat <br />
                  <span> Bali</span> 
                  </p>
                </div>
                <img src={card44Img} alt="" />
                <img className="rectangle" src={rectangle} alt="" />
              </div>
          
          
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
