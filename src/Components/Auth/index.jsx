import { useContext } from 'react';
import { AuthContext } from '../../Context/Auth';
import { When } from 'react-if';

function Auth({ capability, children }){
  const { isLoggedIn, authorize } = useContext(AuthContext);

  return (
    <When condition={isLoggedIn && authorize(capability)}>
      {children}
    </When>
  )
}
export default Auth;