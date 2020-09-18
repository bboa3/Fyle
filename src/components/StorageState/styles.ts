import styled from 'styled-components';

export const Container = styled.div`
  width: 31rem;
  display: flex;
  flex-direction: column;
  
  background: var(--dark-blue);
  margin: 1rem;
  padding: 2.5rem 4rem;
  border-radius: 0.9rem;
`;

export const UsedStorage = styled.div`
  font-size: 1.4rem;
  color: var(--grayish-blue);
`;

export const State = styled.div`
  width: 100%
  height: 0.4rem;
`;

export const Storage = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 0.8rem;

  > span {
    font-size: 1.4rem;
  }
`;

export const StorageLeft = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  
  width: 18rem;
  height: 7rem;
  background: var(--pale-blue);
  border-radius: 0.9rem;
  
  > strong {
    font-size: 3.4rem;
    color: var(--very-dark-blue);
  }

  > span {
    font-size: 1.4rem;
    text-transform: uppercase;
    color: gray;
    font-weight: bold;
    margin-left: 1rem;
    margin-right: 2rem;
  }
`;