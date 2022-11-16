import styled from 'styled-components';


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 480px;
  width: 980px;
  border-radius: 30px;
  position: relative;
  background-color: hsla(0, 0%, 100%, .2);
  box-shadow: 0 0 10px silver;

`;
export const Items = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8rem;
  margin-right: 17rem;
`;
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

`;
export const Img = styled.img`
  width: 100%;
  position: relative;
  height: 14rem;
`;
export const P = styled.p`
  font-size: 1.5rem;
`;
export const H = styled.p`
  font-size: 3rem;
  font-weight: 600;
`;
export const Ul = styled.ul`
  width: 850px;
  position: relative;
  top: 70px;
  display: flex;
  justify-content: space-around;
  align-content: center;
  padding-inline-start: 0px;
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 180px;
  height: 180px;
  border-radius: 30%;
  background-color: hsla(0, 0%, 100%, .3);
  box-shadow: 3px 0 8px silver;
  padding-bottom: 10px;
`;
export const Input = styled.input`
  padding: 0.8rem 6.5rem;
  font-size: 1.2rem;
  border-radius: 25px;
  border: 1px solid rgba(255, 255, 255, 0.8);
  background: rgba(255, 255, 255, 0.1);
  color: rgb(248, 248, 248);
`;

