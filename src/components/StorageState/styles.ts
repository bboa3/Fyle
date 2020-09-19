import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 32rem;
  display: flex;
  flex-direction: column;
  
  background: var(--dark-blue);
  margin: 1rem;
  padding: 2.5rem 4rem 6rem;
  border-radius: 0.9rem;
`;

export const UsedStorage = styled.div`
  font-size: 1.4rem;
  color: var(--grayish-blue);
  font-weight: bold;
`;

export const StateContainer = styled.div`
  width: 100%;
  height: 1.8rem;
  border-radius: 0.9rem;
  background: var(--very-dark-blue);

  margin-top: 1.2rem;
`;

export const State = styled.div`
  width: 75%;
  height: 1.4rem;
  border-radius: 0.9rem;
  background: var(--primary);

  margin-top: .8%;
`;

export const Dot = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: var(--pale-blue);

  position: relative;
  top: -1.2rem;
  left: 16.8rem;
`;

export const Storage = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 0.8rem;

  > span {
    font-size: 1.4rem;
    font-weight: bold;
  }
`;

export const StorageLeft = styled.div`
  position: absolute;
  top: 12rem;
  left: 7rem;

  display: flex;
  justify-content: center;
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