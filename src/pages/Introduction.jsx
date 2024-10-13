import React from "react";
import HomepageLayout from "../components/HomepageLayout";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import styled from "styled-components";

const Introduction = () => {
  return (
    <HomepageLayout>
      <Menu />
      <Footer />
    </HomepageLayout>
  );
};

export default Introduction;
