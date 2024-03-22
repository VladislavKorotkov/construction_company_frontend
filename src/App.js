import logo from './logo.svg';
import {BrowserRouter} from 'react-router-dom'
import AppRouter from './components/AppRouter';
import Header from './components/Header';
import Footer from './components/Footer';
import { observer } from 'mobx-react-lite';
import { useContext, useEffect } from 'react';
import { Context } from '.';
import { check } from './http/userApi';

const App = observer(()=> {
  const {userApp} = useContext(Context)
  useEffect(()=>{
    check().then(data=>{
      if(data){
        userApp.setIsAuth(true)
        userApp.setUser(data)
        userApp.setRole(data.role)
      }
    })
  }, [])
  return (
        <BrowserRouter>
          <Header></Header>
          <AppRouter/>
          <Footer/>
        </BrowserRouter>
  );
}) 

export default App;
