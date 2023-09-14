import React, { useEffect, useState } from "react";
import { coinObject } from "./../functions/convertObject";
import Header from "./../components/Common/Header/index";
import Loader from "./../components/Common/Loader/index";
import List from "../components/Dashboard/List";
import { useParams } from "react-router-dom";
import axios from "axios";
import CoinInfo from "./../components/Coin/CoinInfo/index";

const CoinPage = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [coinData, setCoinData] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}`
      );
      console.log(res);
      coinObject(setCoinData, res.data);
      setIsLoading(false);
    };
    if (id) {
      getData();
    }
  }, []);

  return (
    <div>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="grey-wrapper">
            <List coin={coinData} />
          </div>
          <CoinInfo heading={coinData.name} desc={coinData.desc} />
        </>
      )}
    </div>
  );
};

export default CoinPage;
