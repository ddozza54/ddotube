import { Outlet } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Header from './components/Header';

const queryClient = new QueryClient();

//쿼리는 가장 근접한 부모에 해줘야함. header 는 
function App() {
  return (<>
    <Header />
    <QueryClientProvider client={queryClient}>
      <Outlet />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </>);
}

export default App;
