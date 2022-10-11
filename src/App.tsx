import { Grid } from '@mui/material';
import './App.css';
import Asif from './components/dstable/Asif';
import DSTable from './components/dstable/DSTable';

function App() {
  return (
    <div className="App">
<div className="container">
<Grid container >
<Grid item xs={12}>
<DSTable/>
  </Grid>
  </Grid>
{/* <Asif/>  */}
</div>
 
    </div>
  );
}

export default App;
