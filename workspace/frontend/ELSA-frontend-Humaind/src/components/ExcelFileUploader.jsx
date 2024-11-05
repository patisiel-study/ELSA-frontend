import React, { useState, useCallback } from 'react';
import styled from "styled-components";
import * as XLSX from 'xlsx';
import axios from 'axios';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const ExcelFileUploader = () => {
  const [uploadedDataset, setUploadedDataset] = useState(null);
  const [uploadedQna, setUploadedQna] = useState(null);

  const handleDatasetDrop = useCallback(async (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];

      const reader = new FileReader();
      reader.onload = async (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: "array", bookVBA: true });

        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet);

        setUploadedDataset({ file, jsonData });

        
        await uploadDatasetToServer(file);
      };

      reader.readAsArrayBuffer(file);
    }
  }, []);

  const handleQnaDrop = useCallback(async (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];

      const reader = new FileReader();
      reader.onload = async (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: "array", bookVBA: true });

        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet);

        setUploadedQna({ file, jsonData });

        
        await uploadQnaToServer(file);
      };

      reader.readAsArrayBuffer(file);
    }
  }, []);

  const uploadDatasetToServer = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post(`${SERVER_URL}/api/upload/dataset-keyword`, formData);

      if (response.status === 200) {
        alert(response.data.message);
        console.log('서버 응답:', response.data);
      } else {
        console.error('Dataset 파일 업로드 실패:', response.statusText);
      }
    } catch (error) {
      console.error('Dataset 파일 업로드 중 오류 발생:', error);
    }
  };

  const uploadQnaToServer = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post(`${SERVER_URL}/upload/qna`, formData);

      if (response.status === 200) {
        alert(response.data.message);
        console.log('서버 응답:', response.data);
      } else {
        console.error('Q&A 파일 업로드 실패:', response.statusText);
      }
    } catch (error) {
      console.error('Q&A 파일 업로드 중 오류 발생:', error);
    }
  };

  return (
    <div>
      <StyledUploadContainer>
        <StyledSpanTitle>Dataset-Keyword Upload</StyledSpanTitle>
        <StyledFileInput>
          <AttachmentButton onClick={() => document.getElementById('datasetFileInput').click()}>
            FILE UPLOAD
          </AttachmentButton>
          {uploadedDataset && (
            <AttachedFile>{uploadedDataset.file.name}</AttachedFile>
          )}
          <StyledPost type="image" src="../img/post.png" alt="제출" onClick={() => uploadedDataset && uploadDatasetToServer(uploadedDataset.file)} />
        </StyledFileInput>
        <Input
          type="file"
          id="datasetFileInput"
          accept=".xlsx"
          onChange={(e) => handleDatasetDrop(e.target.files)}
        />
      </StyledUploadContainer>

      <StyledUploadContainer>
        <StyledSpanTitle>Q&A Upload</StyledSpanTitle>
        <StyledFileInput>
          <AttachmentButton onClick={() => document.getElementById('qnaFileInput').click()}>
            FILE UPLOAD
          </AttachmentButton>
          {uploadedQna && (
            <AttachedFile>{uploadedQna.file.name}</AttachedFile>
          )}
          <StyledPost type="image" src="../img/post.png" alt="제출" onClick={() => uploadedQna && uploadQnaToServer(uploadedQna.file)} />
        </StyledFileInput>
        <Input
          type="file"
          id="qnaFileInput"
          accept=".xlsx"
          onChange={(e) => handleQnaDrop(e.target.files)}
        />
      </StyledUploadContainer>
    </div>
  );
};

const StyledUploadContainer = styled.div`
  margin-bottom: 1rem;
`;

const StyledSpanTitle = styled.span`
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
`;

const StyledFileInput = styled.div`
  display: flex;
  align-items: center; 
  justify-content: space-between; 
  box-sizing: border-box;
  padding: 0.6rem 0rem;
  border: #3333bb solid 2px;
  border-radius: 0.5rem;
  height: 3rem; 
`;

const AttachmentButton = styled.div`
  padding: 0.8rem;
  background-color: #3333bb;
  border-radius: 0.5rem;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;

const Input = styled.input`
  display: none;
`;

const AttachedFile = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #999;
  margin: 0; 
`;

const StyledPost = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1rem;
  cursor: pointer;
`;

export default ExcelFileUploader;
