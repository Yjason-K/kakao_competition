import React from 'react';
import styled from 'styled-components';
import UserInfo from '../components/pages/mypage/UserInfo';
import Navigation from '../components/pages/mypage/Navigation';
import Content from '../components/pages/mypage/Content';

const GridContainer = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 16px;
`;

const MyPage: React.FC = () => {
  return (
    <GridContainer>
      <Navigation />
      <UserInfo />
      {/* You can add more sections here if required */}
      <Content />
    </GridContainer>
  );
};

export default MyPage;
