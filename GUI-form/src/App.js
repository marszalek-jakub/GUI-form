import StepWizard from "react-step-wizard";
import "./App.css";
// import 'reset-css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { validPartnerIds } from "./utils";
//Components
import Header from "./components/Header.tsx";
import Authorization from "./components/Authorization";
import PartnerIDs from "./components/PartnerIDs";
import CountryCode from "./components/CountryCode";
import Summary from "./components/Summary";

//Hooks
import useSessionStorage from "./hooks/useSessionStorage";

import { useGlobalState } from "./context";

function App() {
  const [sessionUserKey, setSessionUserKey] = useSessionStorage("apiKey");
  const [userKey, setUserKey] = useState(sessionUserKey || "");
  const [sessionSecretKey, setSessionSecretKey] =
    useSessionStorage("secretKey");
  const [secretKey, setSecretKey] = useState(sessionSecretKey || "");
  const [, setPosts] = useGlobalState("posts");
  const [, setWorking] = useGlobalState("working");
  const [, setIsChecked] = useGlobalState("isChecked");

  const setSessionItems = () => {
    setSessionUserKey(userKey);
    setSessionSecretKey(secretKey);
  };

  useEffect(() => {
    const url_getUserSites = `https://accounts.eu1.gigya.com/admin.getUserSites?userKey=${userKey}&secret=${secretKey}`;
    axios
      .get(url_getUserSites)
      .then((res) => {
        if (res.data.statusCode !== 403) {
          setPosts(res.data.sites);
          setWorking(true);
        } else {
          setWorking(false);
        }
      })
      .catch((error) => {
        setWorking(false);
        console.error(error);
      });
    setSessionItems();

    const initialIsChecked = validPartnerIds.map((site) => {
      if (site.name === "Roche SandBox") {
        site.visible = false;
      } else {
        site.visible = true;
      }
      return site;
    });
    console.log(initialIsChecked);

    // .reduce((acc,d ) => {

    //   if(validPartnerIds[d].name==="Roche SandBox"){
    //     d++;
    //     acc[d]=false
    //   } else
    //   {
    //     d++;
    //  acc[d]=true;}
    //   return acc;
    // }, {});
    setIsChecked(initialIsChecked);
  }, [userKey, secretKey]);

  return (
    <div className="App">
      <Header title="Site Provisioner - EPICX" />
      <StepWizard>
        <Authorization
          title="Step 1. Complete your admin credentials"
          userKey={userKey}
          secretKey={secretKey}
          setUserKey={setUserKey}
          setSecretKey={setSecretKey}
        />
        <PartnerIDs title="Step 2. Choose parent ids:" />
        <CountryCode title="Step 3. Country Code:" />
        <Summary title="Step 4. Summary:" />
      </StepWizard>
    </div>
  );
}

export default App;
