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

function Dashboard({ selectedLLM, llmScore }) {
  // LLM 이름 변환 함수
  const formatLLMName = (key) => {
    switch (key) {
      case "GPT_3_5":
        return "GPT3.5";
      case "GPT_4":
        return "GPT4";
      case "GPT_4o":
        return "GPT4o";
      case "GEMINI":
        return "Gemini";
      default:
        return key; // 정의되지 않은 경우 원래 키 사용
    }
  };

  // 차트에 표시할 데이터 준비
  const dataWithLabels = Object.keys(llmScore).map((key) => ({
    name: formatLLMName(key), // 변경된 이름 사용
    score: llmScore[key].score, // 선택된 LLM의 점수 접근
  }));

  // 선택된 LLM의 포맷된 이름
  const formattedSelectedLLM = formatLLMName(selectedLLM);

  return (
    <StyledLayout>
      <ResponsiveContainer width="100%" height={450}>
        <BarChart
          data={dataWithLabels}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 50,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            interval={0}
            angle={-25}
            textAnchor="end"
            tick={{ dy: 3 }}
          />
          <YAxis />
          <Tooltip formatter={(value, name) => [value, formattedSelectedLLM]} />
          <Bar dataKey="score" fill="#3333bb" />
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
  margin-top: 5rem;
`;
