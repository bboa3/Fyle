import React from 'react';
import { Container, LogoContainer, Logo, Icons, IconContainer, DocumentIcon, FolderIcon, UploadIcon } from './styles';

const Feed: React.FC = () => {
  return (
    <Container>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <Icons>
        <IconContainer>
          <DocumentIcon />
        </IconContainer>

        <IconContainer>
          <FolderIcon />
        </IconContainer>

        <IconContainer>
          <UploadIcon />
        </IconContainer>
      </Icons>
    </Container>
  )
}

export default Feed;