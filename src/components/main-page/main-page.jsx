import React from "react";
import "./main-page.less";
// import history from "../../history";
import {ifSafari} from "../browserInfo/browserInfo";
// import { Price} from "../util/const";

let sectionOneImageClass = ifSafari ? `section-one__image section-one__image--safari` : `section-one__image`;
// let sectionTwoMakeChoice = ifSafari ? `section-two__make-choice section-two__make-choice--safari` : `section-two__make-choice`;

const MainPage = () => {
  return (
    <section className="main-page">
      <section className="section-one">
        <div className={sectionOneImageClass}/>
        <div className="section-one__description">
          <span className="section-one__slogan">ТВОЕ ТddВ ОНЛАhggЙН - ПЕРВОЕ КАЧЕСТВЕННОЕ ТЕЛЕВИДЕНИЕ ЗА ГРАНИЦЕЙ ДЛЯ РУССКОЯЗЫЧНЫХ ЛЮДЕЙ</span>
          <span className="section-one__text"> Смотрите 350 каналов на русском с IPTV интернет телевидением &quot;ТВОЁ ТВ&quot;. Дешевле конкурентов на 30%,FULL HD качество даже в удалённых уголках планеты.</span>
          <span className="section-one__text-attention">Внимание! Мы не предоставляем услугу на территории Российской Федерации и в странах СНГ.</span>
          <button onClick={(evt)=>{
            evt.preventDefault();
            // history.push(MainRoute.TARIFF);
          }} className="button">Заказать подключение</button>
        </div>
      </section>
      {/*<section className="section-two">*/}
      {/*  <div className="section__container section-two__container">*/}
      {/*    <span className="section__slogan" >*/}
      {/*      <span className="section__slogan-word">*/}
      {/*      ТЕЛЕВИДЕНИЕ,</span>КОТОРЫМ УПРАВЛЯЕТЕ ВЫ*/}
      {/*    </span>*/}
      {/*    <span className="section__text section__text--section-two">Оставаться в прошлом с кабельными и эфирными каналами, антеннами и тарелками? Или стремительно войти в будущее, где есть IPTV-технология нового формата?</span>*/}
      {/*    <div className={sectionTwoMakeChoice}>*/}
      {/*      <span className="section__text section__text--make-choice">Сделай выбор с &quot;Твое тв онлайн&quot; - с нашим русским IPTV телевидением каждый зритель сам решает, когда и что смотреть!</span>*/}
      {/*    </div>*/}
      {/*    <span className="section__slogan" >*/}
      {/*      <span className="section__slogan-word">ПРЕИМУЩЕСТВА</span>*/}
      {/*  ТВОЕ ТВ*/}
      {/*    </span>*/}
      {/*    <span className="section__text section__text--internet">Благодаря интернету <span className="section__text--iptv">IPTV</span> является полноценно интерактивным сервисом с цифровым качеством вещания</span>*/}
      {/*    <ul className="section-two__advantages-list">*/}
      {/*      <li className="section-two__advantages-item section-two__advantages-item--first"><a onClick={(evt)=>{*/}
      {/*        evt.preventDefault();*/}
      {/*      }} className="section-two__advantages-link" href="#!"><span className="section-two__advantages-link-text">Просмотр в любой точке планеты</span></a></li>*/}
      {/*      <li className="section-two__advantages-item section-two__advantages-item--second"><a onClick={(evt)=>{*/}
      {/*        evt.preventDefault();*/}
      {/*      }} className="section-two__advantages-link" href="#!"><span className="section-two__advantages-link-text">Безупречное изображение ( FULL HD) и звук</span></a></li>*/}
      {/*      <li className="section-two__advantages-item section-two__advantages-item--third"><a onClick={(evt)=>{*/}
      {/*        evt.preventDefault();*/}
      {/*      }} className="section-two__advantages-link" href="#!"><span className="section-two__advantages-link-text">Стабильный показ без зависания и задержек</span></a></li>*/}
      {/*      <li className="section-two__advantages-item section-two__advantages-item--fourth"><a onClick={(evt)=>{*/}
      {/*        evt.preventDefault();*/}
      {/*        // history.push(MainRoute.CHANNELS);*/}
      {/*      }} className="section-two__advantages-link" href="#!"><span className="section-two__advantages-link-text">Свыше 350 русскоязычных каналов (+ украинские, казахские, английские)</span></a></li>*/}
      {/*      <li className="section-two__advantages-item section-two__advantages-item--fifth"><a onClick={(evt)=>{*/}
      {/*        evt.preventDefault();*/}
      {/*      }} className="section-two__advantages-link" href="#!"><span className="section-two__advantages-link-text">Бесплатный доступ к платным каналам VIP, спортивным и детским</span></a></li>*/}
      {/*    </ul>*/}
      {/*  </div>*/}
      {/*</section>*/}
      <section className="section-three">
        <div className="section__container section-three__container">
          <span className="section__slogan" >
            <span className="section__slogan-word">КАК ПОДКЛЮЧИТСЯ,</span>
            И НУЖНО ЛИ ОНО ВАМ?
          </span>
          <span className="section__text section__text--section3">
          Если вы русский, но живёте за рубежом, где нет каналов на родном языке, за них приходится платить немалые деньги...
          Если вы устали от того, что в вашей провинции нет альтернативы спутниковому ТВ с его баснословными тарифами...
          </span>
          <span className="section__text section__text--section3">Значит - <span className="section__text--attention">цифровое телевидение IPTV</span> точно вам подойдёт! является полноценно интерактивным сервисом с цифровым качеством вещания</span>
          <span className="section__slogan section__slogan-word section__slogan-to-start-iptv">Чтобы запустить телевидение IPTV нужен:</span>
          {/*<ul className="section-three__list">*/}
          {/*  <li className="section-three__element">*/}
          {/*    <a onClick={(evt)=>{*/}
          {/*      evt.preventDefault();*/}
          {/*    }} href="tvoetv.online" className="section-three__link section-three__link--step1">Интернет</a>*/}
          {/*  </li>*/}
          {/*  <li className="section-three__element">*/}
          {/*    <a onClick={(evt)=>{*/}
          {/*      evt.preventDefault();*/}
          {/*      // history.push(MainRoute.CONNECTING);*/}
          {/*    }} href="#" className="section-three__link section-three__link--step2">Установка приложения</a></li>*/}
          {/*  <li className="section-three__element">*/}
          {/*    <a onClick={(evt)=>{*/}
          {/*      evt.preventDefault();*/}
          {/*      // history.push(MainRoute.TARIFF);*/}
          {/*    }} href="#" className="section-three__link section-three__link--step3">Оплата</a></li>*/}
          {/*</ul>*/}
          <button onClick={(evt)=>{
            evt.preventDefault();
            // history.push(MainRoute.TARIFF);
          }} className="button button--section-three">Заказать подключение</button>
          <span className="actions__sales">Новогодние скидки, цена снижены, успей подключиться до конца праздников</span>
          <span className="section__text-tarif">Тариф компании &quot;ТВОЁ ТВ&quot; всего {Price.month.rub} рублей/{Price.month.euro} евро/{Price.month.dollar} долларов в месяц</span>
        </div>
      </section>
      <section className="section-four">
        <div className="section__container section-four__container">
          <span className="section__slogan section__slogan--section-four" >IPTV ОБХОДИТ КОНКУРЕНТОВ НА СТАРТЕ, И НА ФИНИШЕ</span>
          <span className="section__text">&quot;Турнирная таблица&quot; поможет вам понять, почему смотреть IPTV телевидение выгоднее, чем оставаться или подключать уже привычные форматы:</span>
          <div className="section-four__container-comparing">
            <div className="section-four__container-IPTV">
              <span className="section__text--iptv section__text--section-four-iptv">IPTV</span>
              {/*<ul className="section-four__list section-four__list--iptv">*/}
              {/*  <li className="section-three-element">*/}
              {/*    <a onClick={(evt)=>{*/}
              {/*      evt.preventDefault();*/}
              {/*    }} href="" className="section-four__link">Высококлассное качество изображения - FULL HD</a>*/}
              {/*  </li>*/}
              {/*  <li className="section-four__element">*/}
              {/*    <a onClick={(evt)=>{*/}
              {/*      evt.preventDefault();*/}
              {/*      // history.push(MainRoute.CHANNELS);*/}
              {/*    }} href="#" className="section-four__link">{CHANNELS_QUANTITY} каналов</a></li>*/}
              {/*  <li className="section-four__element">*/}
              {/*    <a onClick={(evt)=>{*/}
              {/*      evt.preventDefault();*/}
              {/*    }} href="#" className="section-four__link">В пакет включены VIP-каналы (Amedia, Visat и пр.) + дополнительные спортивные и детские</a>*/}
              {/*  </li>*/}
              {/*  <li className="section-four__element">*/}
              {/*    <a onClick={(evt)=>{*/}
              {/*      evt.preventDefault();*/}
              {/*    }} href="#" className="section-four__link">Низкая цена на качественное IPTV интернет-телевидение &quot;ТВОЁ ТВ&quot; для заграничных пользователей на 50% ниже, чем в аналогичных предложениях конкурентов*</a>*/}
              {/*  </li>*/}
              {/*</ul>*/}
            </div>
            <div className="section-four__container-satellite">
              <span className="section__slogan section__slogan--section-four-satellite">СПУТНИКОВОЕ, КАБЕЛЬНОЕ, ЭФИРНОЕ</span>
              {/*<ul className="section-four__list section-four__list--satellite">*/}
              {/*  <li className="section-three-element">*/}
              {/*    <a onClick={(evt)=>{*/}
              {/*      evt.preventDefault();*/}
              {/*    }} href="#" className="section-four__link section-four__link--satellite">Невысокое или стандартное качество вещания с возможными помехами</a>*/}
              {/*  </li>*/}
              {/*  <li className="section-four__element">*/}
              {/*    <a onClick={(evt)=>{*/}
              {/*      evt.preventDefault();*/}
              {/*    }} href="#" className="section-four__link section-four__link--satellite">В эфирном примерно 10, в кабельном и спутниковом ТВ не более 150 (зависит от оператора)</a></li>*/}
              {/*  <li className="section-four__element">*/}
              {/*    <a onClick={(evt)=>{*/}
              {/*      evt.preventDefault();*/}
              {/*    }} href="#" className="section-four__link section-four__link--satellite">В эфирном телевидении недоступно &ldquo;Кабель&ldquo; и &ldquo;Спутник&ldquo; берут за каждый VIP канал отдельную плату</a>*/}
              {/*  </li>*/}
              {/*  <li className="section-four__element">*/}
              {/*    <a onClick={(evt)=>{*/}
              {/*      evt.preventDefault();*/}
              {/*    }} href="#" className="section-four__link section-four__link--satellite">Высокая стоимость платных (HD), чаще самых интересных каналов + дорогостоящего оборудования</a>*/}
              {/*  </li>*/}
              {/*</ul>*/}
            </div>
          </div>
        </div>
      </section>
      <section className="section-five">
        <div className="section__container section-five__container">
          <span className="section__slogan section__slogan--section-five">СПЕЦПРЕДЛОЖЕНИЯ</span>
          <span className="section__text section__text--section-five">Акция! Возьми подписку на 3 месяца и получи скидку 20% при полной оплате за год!</span>
          <button onClick={(evt)=>{
            evt.preventDefault();
            // history.push(MainRoute.TARIFF);
          }} className="button">Заказать подключение</button>
        </div>
      </section>
    </section>
  );
};

export default MainPage;



