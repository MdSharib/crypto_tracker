import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header'
import TabsComponent from '../components/Dashboard/Tabs'
import axios from 'axios';

const Dashboard = () => {

  const [coins, setCoins] = useState([]);


  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en");
      console.log(res);
      setCoins(res.data);
    };

    getData();

  }, [])

  return (
    <div>
        <Header />
        <TabsComponent coins={coins}/>
    </div>
  )
}

export default Dashboard