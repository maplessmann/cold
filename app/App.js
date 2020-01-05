import { hot } from 'react-hot-loader/root'
import Header from 'components/Header'
import Routes from './routes'

import 'styles/main.scss'

const App = () => {
  return (
    <div className="app-layout">
      <Header />
      <Routes />
    </div>
  )
}

export default hot(App)
