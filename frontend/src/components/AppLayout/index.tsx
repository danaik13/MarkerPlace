import Header from '../Header';
import Container from '@mui/material/Container';
import Footer from '../Footer';


const AppLayout = ({children}: any) => (
  <>
    <Header />
    <Container 
      component="main"
    >
      {children}
    </Container >
    <Footer />
  </>
)

export default AppLayout;