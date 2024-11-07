import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import RefreshTokenAPI from "../apis/RefreshTokenAPI";
import HomepageLayout from "../components/HomepageLayout";
import Menu from "../components/Menu";
import { Header, Title, Content } from "../components/Header";
import ProgressBar from "../components/ProgressBar";
import Footer from "../components/Footer";
import styled from "styled-components";
import { color } from "../color";

const AITestQuestion = () => {
  const [standards, setStandards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [answers, setAnswers] = useState({});
  const [currentStandardIndex, setCurrentStandardIndex] = useState(0);
  const navigate = useNavigate();
  const [showUnanswered, setShowUnanswered] = useState({});
  const [unansweredQuestions, setUnansweredQuestions] = useState([]);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await axios.get("/api/diagnosis/list/questions");
      console.log("response:", response.data);
      setStandards(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error("질문을 가져오는데 실패하였습니다:", error);
      setError("데이터를 불러오는데 실패했습니다. 다시 시도해주세요.");
      setLoading(false);
    }
  };

  const calculateProgress = () => {
    if (standards.length === 0) return 0;
    return ((currentStandardIndex + 1) / standards.length) * 100;
  };

  const handleChange = (questionId, option) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: option,
    }));

    setShowUnanswered((prevShow) => ({
      ...prevShow,
      [questionId]: false,
    }));
  };

  const testUnansweredQuestions = () => {
    const unanswered = standards.flatMap((standard) =>
      standard.questions.filter((q) => !answers[q.questionId])
    );
    setUnansweredQuestions(unanswered);
    return unanswered;
  };

  const scrollToUnansweredQuestion = (questionId) => {
    const element = document.getElementById(`question-${questionId}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const FormattedDescription = ({ text }) => {
    const sentences = text
      .split('.')
      .filter(sentence => sentence.trim() !== '')
      .map(sentence => sentence.trim());
  
    return (
      <Description>
        {sentences.map((sentence, index) => (
          <SentenceCard key={index}>
            {sentence}.
          </SentenceCard>
        ))}
      </Description>
    );
  };

  const submitAnswers = async (formattedAnswers, accessToken, navigate) => {
    const diagnosisInfo = localStorage.getItem("diagnosisInfo");
    let career = "";
    let country = "";
    let llmName = "";
    if (diagnosisInfo) {
      try {
        const parsedInfo = JSON.parse(diagnosisInfo);
        career = parsedInfo.career || "";
        country = parsedInfo.country || "";
        llmName = parsedInfo.llmName || "";
      } catch (error) {
        console.error("diagnosisInfo JSON 파싱 오류:", error);
      }
    }
  
    try {
      let response;
      if (accessToken) {
        const data = { answers: formattedAnswers, llmName };
        console.log("회원 제출 데이터:", data);
        console.log("Authorization 헤더:", `Bearer ${accessToken}`);
        response = await axios.post("/api/diagnosis/developer/submit", data, {
          headers: { Authorization: `Bearer ${accessToken}` },

        });
      } else {
        const data = {
          answers: formattedAnswers,
          career: career,
          country: country,
        };
        console.log("비회원 제출 데이터:", data);
        response = await axios.post("/api/diagnosis/non-member/submit", data);
      }
      console.log("서버 응답:", response); 
      return response;
    } catch (error) {
      console.error("답변 제출에 실패하였습니다:", error);
      await handleSubmitError(error, formattedAnswers);
    }
  };

  const handleSubmitError = async (error, formattedAnswers) => {
    if (error.response && error.response.status === 401) {
      try {
        const { accessToken, refreshToken } = await RefreshTokenAPI();
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        await submitAnswers(formattedAnswers, accessToken);
        console.log("토큰 갱신 후 답변이 성공적으로 제출되었습니다.");
        navigate("/AITestResult");
      } catch (refreshError) {
        console.error("토큰 갱신 실패:", refreshError);
        navigate("/login");
      }
    } else if (error.response && error.response.status === 403) {
      console.error("권한이 없습니다. 관리자에게 문의하세요.");
    } else {
      console.error("알 수 없는 오류가 발생했습니다.");
      alert("오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    }
  };

  const handleNext = () => {
    const currentQuestions = standards[currentStandardIndex].questions;
    const unanswered = currentQuestions.filter((q) => !answers[q.questionId]);

    if (unanswered.length > 0) {
      alert("모든 질문에 답변해주세요.");

      const newShowUnanswered = {};
      unanswered.forEach((q) => {
        newShowUnanswered[q.questionId] = true;
      });
      setShowUnanswered(newShowUnanswered);

      return;
    }

    if (currentStandardIndex < standards.length - 1) {
      setCurrentStandardIndex(currentStandardIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStandardIndex > 0) {
      setCurrentStandardIndex(currentStandardIndex - 1);
    }
  };

  const handleSubmit = async () => {
    if (currentStandardIndex < standards.length - 1) {
      handleNext();
      return;
    }

    const unanswered = testUnansweredQuestions();
    if (unanswered.length > 0) {
      const newShowUnanswered = {};
      unanswered.forEach((q) => {
        newShowUnanswered[q.questionId] = true;
      });
      setShowUnanswered(newShowUnanswered);
      alert("모든 질문에 답변해주세요.");
      scrollToUnansweredQuestion(unanswered[0].questionId);
      return;
    }

    const accessToken = localStorage.getItem("accessToken");
    const formattedAnswers = Object.entries(answers).map(
      ([questionId, answer]) => ({
        questionId: parseInt(questionId),
        answer: answer.toUpperCase(),
      })
    );

    console.log("answers:", formattedAnswers);

    try {
      const response = await submitAnswers(formattedAnswers, accessToken);
      const { message, data: { diagnosisId } } = response.data;
      console.log(message);
      navigate(`/aiTestResult/${diagnosisId}`); 
    } catch (error) {
      console.error("답변 제출에 실패하였습니다:", error);
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
    <HomepageLayout>
      <Menu />
      <Header>
        <Title>인공지능 개발 윤리 검사</Title>
        <Content>
          아래 질문은 인공지능 윤리 기준의 10대 핵심요건에 대한 각각의 설명과
          그에 해당하는 점검항목입니다.
          <br />각 문항을 읽고 자신의 생각과 가장 일치하는 답변을 선택해
          주십시오.
        </Content>
      </Header>
      <Container>
        {standards
          .slice(currentStandardIndex, currentStandardIndex + 1)
          .map((standard) => (
            <Section key={standard.standardName}>
              <Standard>
                <StyledStandard>
                  <StandardTitle>{standard.standardName}</StandardTitle>
                  <ProgressBar progress={calculateProgress()} />
                </StyledStandard>
                <FormattedDescription text={standard.description} />
              </Standard>
              
              {standard.questions.map((q) => (
                <Card
                  key={q.questionId}
                  id={`question-${q.questionId}`}
                  $showUnanswered={showUnanswered[q.questionId]}
                >
                  <QuestionRow>
                    <QuestionText>{q.question}</QuestionText>
                    <Options>
                      {[
                        { display: "네", value: "YES" },
                        { display: "아니오", value: "NO" },
                        { display: "해당없음", value: "NOT_APPLICABLE" },
                      ].map((option) => (
                        <RadioLabel key={option.value}>
                          {option.display}
                          <input
                            type="radio"
                            name={`question-${q.questionId}`}
                            value={option.value}
                            checked={answers[q.questionId] === option.value}
                            onChange={() =>
                              handleChange(q.questionId, option.value)
                            }
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
          {currentStandardIndex > 0 && (
            <StyledButton onClick={handlePrevious}>이전</StyledButton>
          )}
          <StyledButton onClick={handleSubmit}>
            {currentStandardIndex === standards.length - 1 ? "제출" : "다음"}
          </StyledButton>
        </StyledRowButton>
      </Container>
      <Footer />
    </HomepageLayout>
  );
};

const Container = styled.div`
  max-width: 800px;
  margin-bottom: 3rem;
  padding: 20px;
  border: 2px solid ${color.primary};
  border-radius: 30px;
`;

const Section = styled.div`
  margin-bottom: 30px;
`;

const Standard = styled.div`
  display: flex;
  background-color: ${color.primary};
  color: white;
  height: auto;
  padding: 30px;
  border-radius: 20px;
  margin-bottom: 20px;
  font-size: 1.5rem;
  flex-direction: column;
  & > * {
    margin-bottom: 0; 
  }
`;

const StandardTitle = styled.h3`
`;

const StyledStandard = styled.div`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Card = styled.div`
  background-color: white;
  border: none;
  margin-bottom: 10px;
  padding: 20px;
  ${(props) =>
    props.$showUnanswered &&
    `
    border: none;
    border-radius: 15px;
    background-color: #fddcc3;
  `}
`;

const QuestionRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const QuestionText = styled.div`
  flex: 1;
  line-height: 1.5;
`;

const Options = styled.div`
  display: flex;
`;

const RadioLabel = styled.label`
  margin-left: 20px;
  display: flex;
  align-items: center;

  input {
    margin-left: 5px;
    cursor: pointer;
    appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #d9d9d9;
    position: relative;

    &:checked {
      background-color: ${color.primary};
      border-color: ${color.primary};
    }
  }
`;

const StyledRowButton = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 500px;
`;

const StyledButton = styled.button`
  width: 25%;
  height: 50px;
  padding: 10px;
  background-color: ${color.accent};
  color: white;
  font-size: 1.1rem;
  font-weight: bold;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-family: 'NEXON Lv1 Gothic OTF';
  src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv1 Gothic OTF.woff') format('woff');
  font-style: normal;
  &:hover {
    background-color: ${color.accent};
  }
`;

const Description = styled.p`
  font-size: 16px;
  color: black;
  margin-top: 25px;
  margin-bottom: 15px;
  color: black;
  border-radius:10px;
  line-height: 1.5;
`;

const SentenceCard = styled.div`
  font-size: 16px;
  color: black;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  margin-top:10px;
  flex: 1 1 200px; 
  max-width: 100% 
`;

export default AITestQuestion;
