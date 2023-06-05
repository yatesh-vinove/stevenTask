import logo from './logo.svg';
import './App.css';
import Layout from './components/layouts';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css';

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Inter',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
        <div className="App">
          <Layout />
        </div>
      </ThemeProvider>
  );
}

export default App;
