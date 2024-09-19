import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { DashboardAPI } from "../apis/DashboardAPI";

function Dashboard() {
  const [data, setData] = useState([
    { name: "HumanRights", ChatGPT: 0.66 },
    { name: "Privacy", ChatGPT: 0.82 },
    { name: "Diversity", ChatGPT: 0.73 },
    { name: "Infringement", ChatGPT: 0.63 },
    { name: "Publicity", ChatGPT: 0.94 },
    { name: "Solidarity", ChatGPT: 0.38 },
    { name: "DataManagement", ChatGPT: 0.59 },
    { name: "Responsibility", ChatGPT: 0.53 },
    { name: "Safety", ChatGPT: 0.52 },
    { name: "Transparency", ChatGPT: 0.28 },
  ]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       console.log("데이터 받아오는중..");
  //       const response = await DashboardAPI();
  //       console.log(response);

  //       const newData = Object.entries(response.data.data).map(
  //         ([key, value]) => ({
  //           name: key,
  //           ChatGPT: value,
  //         })
  //       );

  //       setData(newData);
  //     } catch (error) {
  //       console.error("데이터를 가져오는 중 오류가 발생했습니다.", error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <StyledLayout>
      {/* <StyledIcon src="../../img/ChatGPT.svg" /> */}
      <ResponsiveContainer width="100%" height={450}>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 50, // Increase bottom margin to make room for XAxis labels
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            interval={0}
            angle={-25}
            textAnchor="end"
            tick={{ dy: 3 }} // Adjust the vertical offset of the tick labels
          />
          <YAxis />
          <Tooltip />
          {/* <Legend verticalAlign="middle" align="left" layout="vertical" /> */}
          <Bar dataKey="ChatGPT" fill="#3333bb" />
        </BarChart>
      </ResponsiveContainer>
    </StyledLayout>
  );
}

export default Dashboard;

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50rem;
  padding-top: 3rem;
`;

const StyledIcon = styled.img`
  width: 3rem;
  height: 3rem;
  margin: 1rem 2rem 2.5rem 2rem;
  border-radius: 50%;
  box-shadow: 1px 1px 2px 1px gray;
`;
