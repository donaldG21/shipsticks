import { QueryClientProvider } from '@tanstack/react-query';
import { Layout } from 'components/Layout';
import { AppContextProvider } from 'contexts/AppContext';
import { Home } from 'features/home';
import { queryClient } from 'libs/react-query';
import { FC } from 'react';

const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <Layout>
          <Home />
        </Layout>
      </AppContextProvider>
    </QueryClientProvider>
  );
};

export default App;
