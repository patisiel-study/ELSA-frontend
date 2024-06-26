import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import ProjectTitle from "../components/ProjectTitle";
import Subtitle from "../components/Subtitle";
import Back from "../components/Back";
import Input from "../components/Input";
import DropdownItem from "../components/DropdownItem";
import Checkbox from "../components/Checkbox";
import useDetectOpen from "../hooks/useDetectOpen";
import { DatasetAPI } from "../apis/DatasetAPI";
import { StandardAPI } from "../apis/StandardAPI";
import ExcelFileUploader from "../components/ExcelFileUploader";

const Admin = () => {
  const datasetRef = useRef();
  const keywordRef = useRef();
  const questionRef = useRef();
  const dropdownRef = useRef();

  const [dataset, setDataset] = useState("Dataset");
  const [datasetList, setDatasetList] = useState(null);
  const [standardList, setStandardList] = useState(null);
  const [selectedDataset, setSelectedDataset] = useState({});
  const [isOpen, setIsOpen] = useDetectOpen(false, dropdownRef);

  const initialSelectedDataset = datasetList
    ? datasetList.reduce((obj, item) => {
        obj[item] = false;
        return obj;
      }, {})
    : {};

  const handleDatasetSubmit = (e) => {
    e.preventDefault();
    console.log("Dataset: " + datasetRef.current.value);
  };

  const handleKeywordSubmit = (e) => {
    e.preventDefault();
    console.log("Selected Dataset: " + dataset);
    console.log("Keyword: " + keywordRef.current.value);
  };

  const handleQuestionSubmit = (e) => {
    e.preventDefault();
    Object.keys(selectedDataset).forEach((item) => {
      console.log(item + ": " + selectedDataset[item]);
    });
    console.log("Question: " + questionRef.current.value);
  };

  const handleCheckboxChange = (item) => {
    setSelectedDataset((prevState) => ({
      ...prevState,
      [item]: !prevState[item],
    }));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await DatasetAPI();
        setDatasetList(response.data.data);
      } catch (error) {
        console.error("데이터를 가져오는 중 오류가 발생했습니다.", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await StandardAPI();
        setStandardList(response.data.data);
      } catch (error) {
        console.error("데이터를 가져오는 중 오류가 발생했습니다.", error);
      }
    };
    fetchData();
  }, []);

  return (
    <StyledLayout>
      <ProjectTitle />
      <Back />
      <StyledForm onSubmit={handleDatasetSubmit}>
        <Subtitle>Dataset</Subtitle>
        <Input inputRef={datasetRef} id="Dataset" />
      </StyledForm>

      <StyledForm onSubmit={handleKeywordSubmit}>
        <Subtitle>Keyword</Subtitle>
        <StyledContainer>
          <StyledDropdownContainer
            ref={dropdownRef}
            onClick={() => setIsOpen(!isOpen)}
          >
            <StyledDropdownSelectedItem>{dataset}</StyledDropdownSelectedItem>
            <StyledDownArrow src="../img/down-arrow.png" $isOpen={isOpen} />
            {isOpen && (
              <StyledDropdownList>
                {datasetList.map((item, index) => (
                  <DropdownItem
                    key={index}
                    item={item}
                    setDataset={setDataset}
                    setIsOpen={setIsOpen}
                    isOpen={isOpen}
                  />
                ))}
              </StyledDropdownList>
            )}
          </StyledDropdownContainer>
          <Input inputRef={keywordRef} id="Keyword" />
        </StyledContainer>
      </StyledForm>

      <StyledForm onSubmit={handleQuestionSubmit}>
        <Subtitle>Question</Subtitle>
        <StyledContainer>
          {standardList &&
            standardList.map((item, index) => (
              <Checkbox
                key={index}
                standard={item}
                onChange={() => handleCheckboxChange(item)}
              />
            ))}
        </StyledContainer>
        <Input inputRef={questionRef} id="Question" />
      </StyledForm>

      <StyledForm>
        <Subtitle>Excel File Upload</Subtitle>
        <ExcelFileUploader />
      </StyledForm>
    </StyledLayout>
  );
};

export default Admin;

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50rem;
`;

const StyledForm = styled.form`
  width: 100%;
  margin-bottom: 2.5rem;
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledDropdownContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 18rem;
  box-sizing: border-box;
  margin-right: 1rem;
  padding: 0.6rem 1.1rem;
  border: 2px solid #3333bb;
  border-radius: 0.5rem;
  position: relative;
  &:hover {
    cursor: pointer;
  }
`;

const StyledDropdownSelectedItem = styled.h3`
  margin: 0;
  border: none;
  background: none;
  font-size: 1rem;
  font-weight: 700;
`;

const StyledDownArrow = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  transition: transform 250ms ease-out;
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(-180deg)" : "rotate(0deg)")};
`;

const StyledDropdownList = styled.ul`
  position: absolute;
  margin: 0;
  padding: 0;
  top: 100%;
  width: 80%;
  height: 20rem;
  background: white;
  box-shadow: 0 4px 5px 0 #00000026;
  overflow: auto;
  list-style-type: none;
`;
