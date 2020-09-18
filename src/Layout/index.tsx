import React from 'react';
import { Container } from './styles';
import './styles.css';
import Feed from '../components/Feed';
import StorageState from '../components/StorageState';


const Layout: React.FC = () => {
  return (
    <Container>
      <Feed />
      <StorageState />
    </Container>
  )
}

export default Layout;