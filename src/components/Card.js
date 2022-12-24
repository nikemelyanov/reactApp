function Card(props) {
    return (
        <div className="card">
            <div className="card-favorite">
                <img width={30} height={30} src="/img/icon-card-likes.svg" alt="icon-card-likes" />
            </div>
            <img className="card-imageUrl" width={133} height={112} src={props.imageUrl} alt="cross" />
            <h5 className="card-info">{props.title}</h5>
            <div className="card-bottom">
                <div className="card-bottom-price">
                    <span>Цена:</span>
                    <b>{props.price} руб.</b>
                </div>
                <button className="card-bottom-button-plus">
                    <img width={32} height={32} src="/img/icon-card-plus.svg" alt="Plus" />
                </button>
            </div>
        </div>
    );
}

export default Card;
