import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
`;

export const Card = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
`;

export const Title = styled.h1`
  color: #333;
  text-align: center;
  margin-bottom: 30px;
`;

export const Subtitle = styled.h2`
  color: #555;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-weight: bold;
  color: #555;
`;

export const Input = styled.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.3s;
  
  &:focus {
    outline: none;
    border-color: #4CAF50;
  }
`;

export const Button = styled.button`
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #45a049;
  }
  
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

export const NavButton = styled(Button)`
  background-color: #3f51b5;
  
  &:hover {
    background-color: #303f9f;
  }
`;

export const Result = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 5px;
  border-left: 5px solid #4CAF50;
`;

export const ResultTitle = styled.h3`
  color: #4CAF50;
  margin-bottom: 10px;
`;

export const ResultText = styled.p`
  margin-bottom: 8px;
  font-size: 16px;
  color: black;
`;

export const DietList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 20px 0;
`;

export const DietItem = styled.li`
  padding: 10px;
  margin-bottom: 8px;
  background-color: #f9f9f9;
  border-radius: 5px;
  border-left: 3px solid #4CAF50;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const NavLink = styled.button`
  background: none;
  border: none;
  color: #3f51b5;
  font-size: 16px;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 5px;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #f1f3f9;
  }
  
  &.active {
    background-color: #e8eaf6;
    font-weight: bold;
  }
`;

export const InfoBox = styled.div`
  background-color: #e8f5e9;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
  color: black;
`;

export const CategoryBox = styled.div`
  display: flex;
  margin-bottom: 15px;
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 5px;
  color: black;
`;

export const CategoryLabel = styled.span`
  width: 150px;
  font-weight: bold;
  color: black;
`;

export const CategoryValue = styled.span`
  flex: 1;
`; 