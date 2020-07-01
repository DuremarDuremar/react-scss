import React from "react";
import "./main.scss";
import f01 from "../img/cinema/Apocalypse Now.webp";
import f02 from "../img/cinema/Blade Runner 2049.webp";
import f03 from "../img/cinema/Brazil.webp";
import f04 from "../img/cinema/Cosmopolis.webp";
import f05 from "../img/cinema/Dogman.webp";
import f06 from "../img/cinema/dolce vita, La.webp";
import f07 from "../img/cinema/Dong.webp";
import f08 from "../img/cinema/Doub.webp";
import f09 from "../img/cinema/Glengarry Glen Ross.webp";
import f10 from "../img/cinema/Lighthouse.webp";
import f11 from "../img/cinema/Michael Clayton.webp";
import f12 from "../img/cinema/Misery.webp";
import f13 from "../img/cinema/Monster's Ball.webp";
import f14 from "../img/cinema/Phantom Thread.webp";
import f15 from "../img/cinema/Revolutionary Road.webp";
import f16 from "../img/cinema/Salinui chueok.webp";

const Main = () => {
  return (
    <div className="main">
      <div className="main-title">Science Fiction</div>
      <div className="main-wrapper">
        <div className="fo1">
          <img src={f01} alt="#" />
        </div>
        <div className="f02">
          <img src={f02} alt="#" />
        </div>
        <div className="f03">
          <img src={f03} alt="#" />
        </div>
        <div className="f04">
          <img src={f04} alt="#" />
        </div>
        <div className="f05">
          <img src={f05} alt="#" />
        </div>
        <div className="f06">
          <img src={f06} alt="#" />
        </div>
        <div className="f07">
          <img src={f07} alt="#" />
        </div>
        <div className="f08">
          <img src={f08} alt="#" />
        </div>
        <div className="f09">
          <img src={f09} alt="#" />
        </div>
        <div className="f10">
          <img src={f10} alt="#" />
        </div>
        <div className="f11">
          <img src={f11} alt="#" />
        </div>
        <div className="f12">
          <img src={f12} alt="#" />
        </div>
        <div className="f13">
          <img src={f13} alt="#" />
        </div>
        <div className="f14">
          <img src={f14} alt="#" />
        </div>
        <div className="f15">
          <img src={f15} alt="#" />
        </div>
        <div className="f16">
          <img src={f16} alt="#" />
        </div>
      </div>
      <div className="main-pag">
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">></a>
        <a href="#">>></a>
      </div>
    </div>
  );
};

export default Main;
