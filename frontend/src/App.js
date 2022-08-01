import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
 
} from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import {AuthProvider} from './contexts/AuthContext'
import AdminHomeScreen from './screens/AdminHomeScreen';
import { NewRegProvider } from './contexts/NewRegContext';
import Detail from './screens/Detail';
import RecordScreen from './screens/RecordScreen';
import BookingScreen from './screens/BookingScreen';
import { DetailProvider } from './contexts/DetailContext';
import PrivateRoute from './utils/PrivateRoute';
import UserListScreen from './screens/UserListScreen';



function App() {
  return (
    <div >

      <BrowserRouter>
      <AuthProvider>
        <NewRegProvider>
        <DetailProvider>
      <Routes>        
      
      <Route path="/login" element={<LoginScreen/>}  />        

      <Route path="/signup" element={<SignupScreen/>}  /> 

      <Route path="/admin_home" element={<PrivateRoute/>} >
      <Route path="/admin_home" element={<AdminHomeScreen/>} />
      </Route>

      <Route exact path="/" element={<PrivateRoute/>}  > 
      <Route exact path="/" element={<HomeScreen/>} /> 
      </Route>

      <Route path="/detail/:id" element={<PrivateRoute/>} > 
      <Route path="/detail/:id" element={<Detail/>}  /> 
      </Route>

      <Route path="/records" element={<PrivateRoute/>}  >
      <Route path="/records" element={<RecordScreen/>}  />
      </Route>

      <Route path="/booking" element={<PrivateRoute/>}  >
      <Route path="/booking" element={<BookingScreen/>}  />
      </Route>

      <Route path="/users" element={<PrivateRoute/>}  >
      <Route path="/users" element={<UserListScreen/>}  />
      </Route>

      </Routes>
      </DetailProvider>
      </NewRegProvider>
      </AuthProvider> 
      </BrowserRouter>
    
   
    </div>
  );
}

export default App;
