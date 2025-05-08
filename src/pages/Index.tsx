
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// This is just a redirect page to the Home component
const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate('/');
  }, [navigate]);
  
  return null;
};

export default Index;
