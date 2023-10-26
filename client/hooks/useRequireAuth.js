import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import GetCurrentUserQuery from '../queries/CurrentUserQuery';

const useRequireAuth = () => {
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GetCurrentUserQuery);

  useEffect(() => {
    if (!loading && !data.currentUser) {
      navigate('/login');
    }
  }, [loading, data]);

  return { loading, error, data };
}

export default useRequireAuth;