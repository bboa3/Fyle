import React from 'react';
import { Container, Content } from './styles';
import './styles.css';
import Feed from '../components/Feed';
import StorageState from '../components/StorageState';


const Layout: React.FC = () => {
  return (
    <Container id="container">
      <Content>
        <Feed />
        <StorageState />
      </Content>
    </Container>
  )
}

export default Layout;