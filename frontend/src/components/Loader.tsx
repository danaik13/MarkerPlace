import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


const Loader = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' , justifyContent:'center', height: '100vh'}}>
    <CircularProgress />
  </Box>
)

export default Loader;