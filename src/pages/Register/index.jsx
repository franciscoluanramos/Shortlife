import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { Quote } from '../../components/Quote';
import { InputForm } from './InputForm';


import styles from './styles.module.css';

export function Register() {

  const [oldYears, setOldYears] = useState();
  const [sexOfBirth, setSexOfBirth] = useState();
  const [country, setCountry] = useState();

  const navigate = useNavigate();

  return(
    <Background>
      
      <Header/>
      <div className={styles.contentContainer}>
        <div className={styles.messageContainer}>
          <Quote 
            description={"“...For what is your life? It is even a vapor that appeareth for a little time, and then vanisheth away. ”"}
            citation={"- James 4:14, Holy Bible"}
            strongCitation
          />
          <Quote 
            description={"Life's but a walking shadow, a poor player that struts and frets his hour upon the stage, and then is heard no more."}
            citation={"- William Shakespear, The Tragedy of Macbeth"}
          />
        </div>
        <form
          className={styles.form} 
          action=""
        >
          <h3 className={styles.titleForm}>
            Greetings to you!
          </h3>

          <InputForm 
            title={"How old are you?"}
            value={oldYears}
            setValue={setOldYears}
          />
          <InputForm 
            title={"What's your sex of birth?"}
            value={sexOfBirth}
            setValue={setSexOfBirth}
          />
          <InputForm 
            title={"Which country do you live in?"}
            value={country}
            setValue={setCountry}
          />

          <a
            className={styles.button} 
            href="#"
            onClick={() => {
              navigate("/result");
            }}
          >
            START
          </a>

        </form>
      </div>
    </Background>
  )
}