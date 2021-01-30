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
    </section>
  );
}

export default Main;
