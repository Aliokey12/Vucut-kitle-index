import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Navigation as Nav, NavLink } from '../styles/StyledComponents';

const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  return (
    <Nav>
      <NavLink 
        className={location.pathname === '/' ? 'active' : ''}
        onClick={() => navigate('/')}
      >
        BMI Hesapla
      </NavLink>
      
      <NavLink 
        className={location.pathname === '/bmi-nedir' ? 'active' : ''}
        onClick={() => navigate('/bmi-nedir')}
      >
        BMI Nedir?
      </NavLink>
    </Nav>
  );
};

export default Navigation; 