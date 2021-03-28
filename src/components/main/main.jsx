import React from "react";
import "./main.less";


const Main = () => {
  return (
    <section className="main-page">
      <section className="section-one">
        <div className='k'/>
        <div className="section-one__description">
          <span className="section-one__slogan">ТВОЕ ТВ ОНЛАЙН - ПЕРВОЕ КАЧЕСТВЕННОЕ ТЕЛЕВИДЕНИЕ ЗА ГРАНИЦЕЙ ДЛЯ РУССКОЯЗЫЧНЫХ ЛЮДЕЙ</span>
          <span className="section-one__text"> Смотрите 350 каналов на русском с IPTV интернет телевидением &quot;ТВОЁ ТВ&quot;. Дешевле конкурентов на 30%,FULL HD качество даже в удалённых уголках планеты.</span>
          <span className="section-one__text-attention">Внимание! Мы не предоставляем услугу на территории Российской Федерации и в странах СНГ.</span>
          <button onClick={(evt)=>{
            evt.preventDefault();
          }} className="button">Заказать подключение</button>
        </div>
      </section>
      <section className="section-two">
        <div className="section__container section-two__container">
          <span className="section__slogan" >
            <span className="section__slogan-word">
            ТЕЛЕВИДЕНИЕ,</span>КОТОРЫМ УПРАВЛЯЕТЕ ВЫ
          </span>
          <span className="section__text section__text--section-two">Оставаться в прошлом с кабельными и эфирными каналами, антеннами и тарелками? Или стремительно войти в будущее, где есть IPTV-технология нового формата?</span>
          <div className={`sectionTwoMakeChoice`}>
            <span className="section__text section__text--make-choice">Сделай выбор с &quot;Твое тв онлайн&quot; - с нашим русским IPTV телевидением каждый зритель сам решает, когда и что смотреть!</span>
          </div>
          <span className="section__slogan" >
            <span className="section__slogan-word">ПРЕИМУЩЕСТВА</span>
        ТВОЕ ТВ
          </span>
          <span className="section__text section__text--internet">Благодаря интернету <span className="section__text--iptv">IPTV</span> является полноценно интерактивным сервисом с цифровым качеством вещания</span>
          <ul className="section-two__advantages-list">
            <li className="section-two__advantages-item section-two__advantages-item--first"><a onClick={(evt)=>{
              evt.preventDefault();
            }} className="section-two__advantages-link" href="#!"><span className="section-two__advantages-link-text">Просмотр в любой точке планеты</span></a></li>
            <li className="section-two__advantages-item section-two__advantages-item--second"><a onClick={(evt)=>{
              evt.preventDefault();
            }} className="section-two__advantages-link" href="#!"><span className="section-two__advantages-link-text">Безупречное изображение ( FULL HD) и звук</span></a></li>
            <li className="section-two__advantages-item section-two__advantages-item--third"><a onClick={(evt)=>{
              evt.preventDefault();
            }} className="section-two__advantages-link" href="#!"><span className="section-two__advantages-link-text">Стабильный показ без зависания и задержек</span></a></li>
            <li className="section-two__advantages-item section-two__advantages-item--fourth"><a onClick={(evt)=>{
              evt.preventDefault();
              // history.push(MainRoute.CHANNELS);
            }} className="section-two__advantages-link" href="#!"><span className="section-two__advantages-link-text">Свыше 350 русскоязычных каналов (+ украинские, казахские, английские)</span></a></li>
            <li className="section-two__advantages-item section-two__advantages-item--fifth"><a onClick={(evt)=>{
              evt.preventDefault();
            }} className="section-two__advantages-link" href="#!"><span className="section-two__advantages-link-text">Бесплатный доступ к платным каналам VIP, спортивным и детским</span></a></li>
          </ul>
        </div>
      </section>

    </section>
  );
}

export default Main;
