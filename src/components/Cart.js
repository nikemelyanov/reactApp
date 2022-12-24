function Overlay() {
    return (
        <div className="overlay" style={{ display: 'none' }} >
            <div className="cart">
                <h2 className="cart-name">Корзина <img className="cart-item-remove-button" src="/img/icon-cart-remove-active.svg" alt="Remove" /></h2>

                <div className="cart-items">
                    <div className="cart-item">
                        <div className="cart-item-cross-img" style={{ backgroundImage: 'url(/img/photo-shpickers/cross-1.jpg)' }}>
                        </div>
                        <div className="cart-center-info">
                            <p>Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img className="cart-item-remove-button" src="/img/icon-cart-remove-active.svg" alt="Remove" />
                    </div>
                </div>

                <div className="cart-bottom">
                    <ul className="cart-bottom-ul">
                        <li className="cart-bottom-li">
                            <span>Итого:</span>
                            <div></div>
                            <b>21 498 руб. </b>
                        </li>
                        <li className="cart-bottom-li">
                            <span>Налог 5%:</span>
                            <div></div>
                            <b>1074 руб. </b>
                        </li>
                    </ul>
                    <button className="cart-bottom-button">Оформить заказ <img src="/img/icon-cart-button-arrow.svg" alt="Arrow" /></button>
                </div>
            </div>
        </div>
    );
}

export default Overlay