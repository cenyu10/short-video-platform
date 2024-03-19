import { NavigationContainer } from '@react-navigation/native';

import AppRoutes from './routes/app.routes';

const Routes = () => {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
};

export default Routes;
