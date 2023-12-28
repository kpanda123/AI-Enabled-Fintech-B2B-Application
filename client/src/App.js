// import React from 'react';
// import './App.css';
// import theme from '../src/utils/theme';
// import { Button, makeStyles } from '@material-ui/core';
// import CollectorDashboard from '../src/views/CollectorDashboard';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { ROLL_NUMBER } from '../src/utils/constants';
// import Header from './components/Header.js';
// import InvoiceTable from './components/InvoiceTable.js';
// import DltModal from './components/DltModal.js';

// import Rough from './components/Rough.js';
// import AddModal from './components/AddModal.js';

// import Invoicegrid from './components/Invoicegrid.js';
// import Botton from './components/Buttong.js';
// import Assignment  from './Assignment.js';

// const useStyles = makeStyles((theme) => ({
//   '@global': {
//     '*::-webkit-scrollbar': {
//       width: '0.4em',
//       height: '0.4em',
//     },
//     '*::-webkit-scrollbar-track': {
//       '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
//     },
//     '*::-webkit-scrollbar-thumb': {
//       backgroundColor: '#6D7183',
//       outline: '1px solid slategrey',
//     },
//   },
//   mainBackground: {
//     background: theme.palette.primary.main,
//     height: '100vh',
//     width: '100vw',
//     overflow: 'hidden',
//   },
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     height: 140,
//     width: 100,
//   },
// }));
// const App = () => {
//   console.log('theme', theme);
//   const classes = useStyles();
//   return (
//     //  <div className={classes.mainBackground}>
//     //     <Router basename={`/${ROLL_NUMBER}`}>
//     //    <Route exact path="/" component={CollectorDashboard} />
//     //    </Router>   
//        <div>
//         {/* <AddModal/> */}
//          {/* <Assignment/>
//        </div> */}
//        {/* <Invoicegrid/> */}
//        <DltModal/>
//        </div>


//   );
// };

// export default App;
import React from 'react';
import './App.css';
import theme from '../src/utils/theme';
import { Button, makeStyles } from '@material-ui/core';
import CollectorDashboard from '../src/views/CollectorDashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ROLL_NUMBER } from '../src/utils/constants';
import Header from './component/Header.js';
import InvoiceTable from './components/InvoiceTable.js';
import DltModal from './components/DltModal.js';

import Grid1 from './component/Grid1.js';
//import Invoicegrid from './components/AddModal.js';

import Invoicegrid from './component/Invoicegrid.js';
import Botton from './components/Buttong.js';
import Assignment  from './Assignment.js';

const useStyles = makeStyles((theme) => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.4em',
      height: '0.4em',
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: '#6D7183',
      outline: '1px solid slategrey',
    },
  },
  mainBackground: {
    background: theme.palette.primary.main,
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
}));
const App = () => {
  console.log('theme', theme);
  const classes = useStyles();
  return (
      <div className={classes.mainBackground}>
         {/* <Router basename={`/${ROLL_NUMBER}`}>
       <Route exact path="/" component={CollectorDashboard} />
        </Router>   
       <div> */}
        {/* <AddModal/> */}
         {/* <Assignment/>
       </div> */}
       {/* <Invoicegrid/> */}
       {/* <DltModal/> */}
       <Header />
        {/* <Invoicegrid/>  */}
        <Grid1/>
       </div>


  );
};

export default App;
