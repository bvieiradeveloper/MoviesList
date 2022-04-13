import './styles/global.scss';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import MovieProvider from './Context/movieContext';

export function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <MovieProvider>
       <SideBar/>
       <Content/>
      </MovieProvider>
    </div>
  )
}