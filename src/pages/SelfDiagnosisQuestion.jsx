import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import BlueButton from "../components/BlueButton";
import { Link, useNavigate } from "react-router-dom";
import RefreshTokenAPI from '../apis/RefreshTokenAPI';

const SelfDiagnosisQuestion = () => {
  const [standards, setStandards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await axios.get('/api/diagnosis/list/questions');
      console.log('response:', response.data);
      setStandards(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error('질문을 가져오는데 실패하였습니다:', error);
      setError('데이터를 불러오는데 실패했습니다. 다시 시도해주세요.');
      setLoading(false);
    }
  };

  const handleChange = (questionId, option) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: option,
    }));
  };

  const submitAnswers = async (formattedAnswers, accessToken) => {
    return axios.post('/api/diagnosis/developer/submit', {  answers: formattedAnswers }, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
  };

  const handleSubmitError = async (error, formattedAnswers) => {
    if (error.response && error.response.status === 401) {
      try {
        const { accessToken, refreshToken } = await RefreshTokenAPI();
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        await submitAnswers(formattedAnswers, accessToken);
        console.log('토큰 갱신 후 답변이 성공적으로 제출되었습니다.');
        navigate('/selfDiagnosisResult');
      } catch (refreshError) {
        console.error('토큰 갱신 실패:', refreshError);
        navigate('/login');
      }
    } else if (error.response && error.response.status === 403) {
      console.error('권한이 없습니다. 관리자에게 문의하세요.')

    } else {
      console.error('알 수 없는 오류가 발생했습니다.');
      alert('오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
    }
  };

  const handleSubmit = async () => {
    const accessToken = localStorage.getItem('accessToken');
    const formattedAnswers = Object.entries(answers).map(([questionId, answer]) => ({
      questionId: parseInt(questionId),
      answer: answer.toUpperCase(),
    }));

    console.log('answers:', formattedAnswers);

    try {
      await submitAnswers(formattedAnswers, accessToken);
      console.log('답변이 성공적으로 제출되었습니다.');
      navigate('/selfDiagnosisResult');
    } catch (error) {
      console.error('답변 제출에 실패하였습니다:', error);
      await handleSubmitError(error, formattedAnswers);
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
                  {['YES', 'NO', 'NOT_APPLICABLE'].map((option) => (
                    <RadioLabel key={option}>
                      {option === 'NOT_APPLICABLE' ? '미해당' : option}
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
        <BlueButton onClick={handleSubmit}>Submit</BlueButton>
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
  border-radius: 5px;
`;

const Card = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  margin-bottom: 10px;
  padding: 15px;
  border-radius: 5px;
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