import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import BlueButton from "../components/BlueButton";
import { Link } from "react-router-dom";

const SelfDiagnosisQuestion = () => {
  const [message, setMessage] = useState('');
  const [standards, setStandards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await axios.get('/api/diagnosis/list/questions');
      console.log('response:', response.data);
      setMessage(response.data.message);
      setStandards(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error('질문을 가져오는데 실패하였습니다:', error);
      setError('데이터를 불러오는데 실패했습니다. 다시 시도해주세요.');
      setLoading(false);
    }
  };

  const handleChange = (questionId, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
  };

  const handleSubmit = async () => {
    const formattedAnswers = Object.entries(answers).map(([questionId, answer]) => ({
      questionId: parseInt(questionId),
      answer: answer.toUpperCase(),
    }));

    try {
      await axios.post('/api/diagnosis/developer/submit', { answers: formattedAnswers });
      console.log('답변이 성공적으로 제출되었습니다.');
    } catch (error) {
      console.error('답변 제출에 실패하였습니다:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (standards.length === 0) {
    return <div>데이터가 없습니다.</div>;
  }

  return (
    <Container>
      {standards.map((standard) => (
        <Section key={standard.standardName}>
          <Header>{standard.standardName}</Header>
          {standard.questions.map((q) => (
            <Card key={q.questionId}>
              <QuestionRow>
                <QuestionText>{q.question}</QuestionText>
                <Options>
                  {['yes', 'no', 'not-applicable'].map((option) => (
                    <RadioLabel key={option}>
                      {option === 'not-applicable' ? '미해당' : option.toUpperCase()}
                      <input
                        type="radio"
                        name={`question-${q.questionId}`}
                        value={option}
                        checked={answers[q.questionId] === option}
                        onChange={() => handleChange(q.questionId, option)}
                      />
                    </RadioLabel>
                  ))}
                </Options>
              </QuestionRow>
            </Card>
          ))}
        </Section>
      ))}

      <StyledRowButton>
        <Link to="/selfDiagnosis">
          <BlueButton>Back</BlueButton>
        </Link>
        <Link to="/selfDiagnosisResult">
        <BlueButton onClick={handleSubmit}>Submit</BlueButton>
        </Link>
      </StyledRowButton>

    </Container>
  );
};

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
`;

const Section = styled.div`
  margin-bottom: 30px;
`;

const Header = styled.h3`
  background-color: #3333BB;
  color: white;
  padding: 10px;
  border-radius:5px;
`;

const Card = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  margin-bottom: 10px;
  padding: 15px;
  border-radius:5px;
`;

const QuestionRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const QuestionText = styled.div`
  flex: 1;
`;

const Options = styled.div`
  display: flex;
`;

const RadioLabel = styled.label`
  margin-left: 20px;
`;

const StyledRowButton = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default SelfDiagnosisQuestion;