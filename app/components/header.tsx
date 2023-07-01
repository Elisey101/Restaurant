export default function(){
  return(
    <>
      <div className="header">
        <div className="logo">
          <a href="">
            <img src={"/images/Restaurant.png"} height={"28px"} alt="" />
          </a>
        </div>
        <ul className="headerElems">
          <li className="navig"><a href="">Меню</a></li>
          <li className="navig"><a href="">Номер телефона</a></li>
          <li className="navig"><a href="">Доставка на дом</a></li>
          <li className="navig"><a href="">Соц Сети</a></li>
        </ul>
      </div>
    </>
  );
}