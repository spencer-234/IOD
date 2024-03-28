import { useEffect, useState } from "react";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const [price, setPrice] = useState(null);

  useEffect(() => {
    let ignore = false;

    const getRates = async () => {
      await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (!ignore) setPrice(data.bitcoin.usd);
        })
        .catch((err) => {
          alert("There was an error");
          console.error(err);
        });
    };
    getRates();

    return () => {
      ignore = true; 
      console.log("cleanup effect");
    };
  }, [currency]);

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));
  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
      {price && <h3>Price: {price}</h3>}
    </div>
  );
}

export default BitcoinRates;
