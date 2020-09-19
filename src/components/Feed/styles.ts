import styled from 'styled-components';
import {LogoWhite, Document, Folder, Upload } from '../../assets/Icons';

export const Container = styled.div`
  width: 32rem;
  display:  flex;
  flex-direction: column;

  padding: 4rem 10rem 4rem 4rem;
  background: var(--dark-blue);
  border-radius: 0.9rem;
  border-top-right-radius: 9.9rem;
`;

export const LogoContainer = styled.div``;
export const Logo = styled(LogoWhite)``;

export const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
`;

export const IconContainer = styled.div`
  width: 4.7rem;
  height: 4.7rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0.9rem;
  background: var(--very-dark-blue);
`;

export const DocumentIcon = styled(Document)``;
export const FolderIcon = styled(Folder)``;
export const UploadIcon = styled(Upload)``;