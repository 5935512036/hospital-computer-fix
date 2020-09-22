import React, { useState } from 'react';
import { useHistory, Link, Route, Router } from "react-router-dom";
import { IonPage, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonInput, IonIcon, IonGrid, IonRow, IonCol, IonRoute, IonRouterLink } from '@ionic/react';
import './login.css';
import { people, lockClosedOutline } from 'ionicons/icons';
import Register from './register';
import { register } from '../serviceWorker';

const Login: React.FC = () => {
  const [username, setusername] = useState<string>();
  const [password, setpassword] = useState<string>();
  let history = useHistory()

  console.log(username);
 console.log(password);
   
  return (
    <IonPage className='bg'>
 
      <IonGrid >
        <IonRow>
          <IonCol>
            <IonCard className='card'>
              <IonCardHeader>
                <IonCardTitle className='texttitle' color='--ion-color-primary-contras'>กรุณาเข้าสู่ระบบ</IonCardTitle>
                <hr className='line' />
              </IonCardHeader>
              <IonCardContent>
                <p className='p'>ชื่อผู้ใช้</p>
                <IonItem>
                  <IonIcon icon={people} />
                  <IonInput value={username} placeholder="User Name" onIonChange={e => setusername(e.detail.value!)} clearInput></IonInput>
                </IonItem>
                <p className='p'>รหัสผ่าน</p>
                <IonItem>
                  <IonIcon icon={lockClosedOutline} />
                  <IonInput type='password' value={password} placeholder="Password" onIonChange={e => setpassword(e.detail.value!)} clearInput></IonInput>
                </IonItem>
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol className='btn' >
            <IonButton color="medium"  >เข้าสู่ระบบ</IonButton>
          </IonCol>
          <IonCol className='btn' >
  
   <IonRouterLink href="/register">
          <IonButton color="medium">สมัครสมาชิก</IonButton>
 </IonRouterLink>

         
      
            
    
               
          
           
    
          </IonCol>
        </IonRow>
      </IonGrid>

    </IonPage>
  );
};

export default Login;
