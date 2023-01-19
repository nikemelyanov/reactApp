import React from "react";
import axios from "axios";

import Card from "../components/Card";

function Orders() {
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://63bf0554585bedcb36bd8a4b.mockapi.io/orders"
        );
        setOrders(data.map((obj) => obj.items).flat());
        setIsLoading(false);
      } catch (error) {
        alert("Ошибка при запросе заказов.");
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className="content">
      <div className="allCrossAndInputSerach">
        <h1>Мои заказы</h1>
      </div>

      <div className="shpickers">
        {(isLoading ? [...Array(10)] : orders).map((item, index) => (
          <Card key={index} loading={isLoading} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
