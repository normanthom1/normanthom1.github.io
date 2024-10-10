import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  VictoryChart, VictoryLine, VictoryScatter, VictoryAxis, VictoryTooltip, VictoryVoronoiContainer,
} from 'victory';

const BitcoinPriceChart = () => {
  const [data, setData] = useState([]);
  const [predictedData, setPredictedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30');
        // const prices = response.data.prices;
        const { prices } = await axios.get('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30').prices;
        // Transform the data
        const formattedData = prices.map(([timestamp, price]) => ({
          date: new Date(timestamp),
          price,
        }));
        setData(formattedData);

        // Simple prediction logic (for demonstration)
        const lastDate = new Date(formattedData[formattedData.length - 1].date);
        const futureDates = Array.from({ length: 7 }, (_, i) => {
          const newDate = new Date(lastDate);
          newDate.setDate(lastDate.getDate() + i + 1);
          return {
            date: newDate,
            price: formattedData[formattedData.length - 1].price * (1 + (0.01 * (i + 1))),
          };
        });
        setPredictedData(futureDates);
      } catch (error) {
        console.error('Error fetching Bitcoin data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <VictoryChart
      containerComponent={
        <VictoryVoronoiContainer
          labels={({ datum }) => `Date: ${datum.date.toLocaleDateString()}\nPrice: $${datum.price.toFixed(2)}`}
          labelComponent={<VictoryTooltip />}
        />
      }
      scale={{ x: 'time' }}
    >
      <VictoryAxis
        tickFormat={(x) => new Date(x).toLocaleDateString()}
        label="Date"
      />
      <VictoryAxis
        dependentAxis
        label="Price (USD)"
      />
      <VictoryLine
        data={data}
        x="date"
        y="price"
        style={{ data: { stroke: '#c43a31' } }}
      />
      <VictoryScatter
        data={data}
        x="date"
        y="price"
        size={5}
        style={{ data: { fill: '#c43a31' } }}
      />
      <VictoryLine
        data={predictedData}
        x="date"
        y="price"
        style={{ data: { stroke: '#00aaff', strokeDasharray: '4' } }}
      />
      <VictoryScatter
        data={predictedData}
        x="date"
        y="price"
        size={5}
        style={{ data: { fill: '#00aaff' } }}
      />
    </VictoryChart>
  );
};

export default BitcoinPriceChart;
