import React, {useState} from "react";

import "./header.less";
import logo from "../../img/logo.png";
// import logoWebp from "../../img/logo.webp";


const showHideMenu = () => {
  const menuList = document.querySelector(`.header__menu`);
  menuList.classList.toggle(`header__menu--active`);
  const menuIcon = document.querySelector(`.header__icon`);
  menuIcon.classList.toggle(`header__icon--opened`);
};

// const closeMenu = () => {
//   const menuList = document.querySelector(`.header__menu--active`);
//   console.log(menuList);
//   menuList.classList.remove(`header__menu--active`);
// };

const Header = function () {
  const [colorSelector, setColorSelector] = useState(``);
  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="header__logo-container">
          <a href="https://www.tvoetv.online" onClick={(evt)=>{
            evt.preventDefault();
          }} className="header__logo">
            {/*<picture>*/}
            {/*  <source type="image/webp" srcSet={logoWebp}/>*/}
            <img className="header__logo-img" src={logo} alt="header-logo"/>
            {/*</picture>*/}
          </a>
          {/*<div onClick={showHideMenu} className="header__icon"/>*/}
        </div>
        <div className="header__menu">
          <a onClick={(evt)=>{
            evt.preventDefault();
            showHideMenu();
            setColorSelector(`colorWhite`);
          }} href="!#" className="header__personal-account">
          <span className="header__personal-account-icon">
            <svg className="header__personal-account-icon-svg"/>
          </span>
            <span className="header__personal-account-text">Личный кабинет</span>
          </a>
          <ul className="header__menu-list">
            <li className="header__menu-item menu__menu-item--active">
              <a onClick={(evt)=>{
                evt.preventDefault();
                showHideMenu();
                setColorSelector(``);
              }} href="#!" className={`header__menu-link ${colorSelector}`}>Главная</a>
            </li>
            <li className="header__menu-item header__menu-item--channels-list">
              <a onClick={(evt)=>{
                evt.preventDefault();
                setColorSelector(``);
                showHideMenu();
              }} href="#!" className={`header__menu-link header__menu-link--channels-list ${colorSelector}`}>Список каналов</a>
              <ul className="header__channels-list">
                <li className="header__channels-item"><a onClick={(evt)=>{
                  evt.preventDefault();
                  setColorSelector(``);
                  showHideMenu();
                }} href="#!" className="header__channels-item-link">Все каналы</a></li>
                <li className="header__channels-item"><a onClick={(evt)=>{
                  evt.preventDefault();
                  setColorSelector(``);
                  showHideMenu();
                }} href="#!" className="header__channels-item-link">Детские</a></li>
                <li className="header__channels-item"><a onClick={(evt)=>{
                  evt.preventDefault();
                  setColorSelector(``);
                  showHideMenu();
                }} href="#!" className="header__channels-item-link">Кино</a></li>
                <li className="header__channels-item"><a onClick={(evt)=>{
                  evt.preventDefault();
                  setColorSelector(``);
                  showHideMenu();
                }} href="#!" className="header__channels-item-link">Общие</a></li>
                <li className="header__channels-item"><a onClick={(evt)=>{
                  evt.preventDefault();
                  setColorSelector(``);
                  showHideMenu();
                }} href="#!" className="header__channels-item-link">Спортивные</a></li>
                <li className="header__channels-item"><a onClick={(evt)=>{
                  evt.preventDefault();
                  setColorSelector(``);
                  showHideMenu();
                }} href="#!" className="header__channels-item-link">Новостные</a></li>
                <li className="header__channels-item"><a onClick={(evt)=>{
                  evt.preventDefault();
                  setColorSelector(``);
                  showHideMenu();
                }} href="#!" className="header__channels-item-link">Познавательные</a></li>
                <li className="header__channels-item"><a onClick={(evt)=>{
                  evt.preventDefault();
                  setColorSelector(``);
                  showHideMenu();
                }} href="#!" className="header__channels-item-link">Музыкальные</a></li>
                <li className="header__channels-item"><a onClick={(evt)=>{
                  evt.preventDefault();
                  setColorSelector(``);
                  showHideMenu();
                }} href="#!" className="header__channels-item-link">Зарубежные</a></li>
                <li className="header__channels-item"><a onClick={(evt)=>{
                  evt.preventDefault();
                  setColorSelector(``);
                  showHideMenu();
                }} href="#!" className="header__channels-item-link">Эротические</a></li>
              </ul>
            </li>
            <li className="header__menu-item">
              <a onClick={(evt)=>{
                evt.preventDefault();
                setColorSelector(``);
                showHideMenu();
              }} href="#!" className={`header__menu-link ${colorSelector}`}>Как подключиться</a>
            </li>
            <li className="header__menu-item">
              <a onClick={(evt)=>{
                evt.preventDefault();
                setColorSelector(``);
                showHideMenu();
              }} href="#!" className={`header__menu-link ${colorSelector}`}>Тарифы</a>
            </li>
            <li className="header__menu-item">
              <a onClick={(evt)=>{
                evt.preventDefault();
                setColorSelector(``);
                showHideMenu();
              }} href="#!" className={`header__menu-link ${colorSelector}`}>О компании</a>
            </li>
            <li className="header__menu-item">
              <a onClick={(evt)=>{
                evt.preventDefault();
                setColorSelector(``);
                showHideMenu();
              }} href="#!" className={`header__menu-link ${colorSelector}`}>Контакты</a>
            </li>
            <li className="header__menu-item">
              <a onClick={(evt)=>{
                evt.preventDefault();
                setColorSelector(``);
                showHideMenu();
              }} href="#!" className={`header__menu-link ${colorSelector}`}>Вопросы и ответы</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};


export default Header;
