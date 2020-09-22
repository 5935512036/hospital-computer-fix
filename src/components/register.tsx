import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonButton, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonInput, IonIcon, IonGrid, IonRow, IonCol } from '@ionic/react';

import './login.css';
import { text, ellipse, people, lockClosedOutline } from 'ionicons/icons';
import { Route } from 'react-router';

const Register: React.FC = () => {
  const [username, setusername] = useState<string>();
  const [password, setpassword] = useState<string>();

  console.log(username);
 console.log(password);
   
  return (
    <IonPage className='bg'>
 
      <IonGrid >
        <IonRow>
          <IonCol>
            <IonCard className='card'>
              <IonCardHeader>
                <IonCardTitle className='texttitle' color='--ion-color-primary-contras'>สมัครสมาชิก</IonCardTitle>
                <hr className='line' />
              </IonCardHeader>
              <IonCardContent>
                <p className='p'>ชื่อ-สกุล</p>
                <IonItem>
            
                  <IonInput value={username} placeholder="User Name" onIonChange={e => setusername(e.detail.value!)} clearInput></IonInput>
                </IonItem>


                
                <p className='p'>รหัสผ่าน</p>
                <IonItem>
                  
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
            
            <IonButton color="medium"  >สมัครสมาชิก</IonButton>
          
          </IonCol>
        </IonRow>
      </IonGrid>

    </IonPage>
  );
};

export default Register;
