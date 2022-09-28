// import { useState, useEffect } from "react";
// import axios from 'axios';

// import { validPartnerIds } from "../utils";
// import {useGlobalState} from "../context";
// import useSessionStorage from "./useSessionStorage";

// export const useCredentials = () => {
//     const [sessionUserKey, setSessionUserKey] = useSessionStorage("apiKey")
//     const [userKey, setUserKey] = useState(sessionUserKey || "");
//     const [sessionSecretKey, setSessionSecretKey] = useSessionStorage("secretKey")
//     const [secretKey, setSecretKey] = useState(sessionSecretKey || "");
//     const [, setPosts] = useGlobalState("posts");
//     const [, setWorking] = useGlobalState("working");
//     const [, setIsChecked] = useGlobalState("isChecked");
    

//     const setSessionItems = () => {
//         setSessionUserKey(userKey);
//         setSessionSecretKey(secretKey);
//     }

//     useEffect(() => {
//         const url_getUserSites = `https://accounts.eu1.gigya.com/admin.getUserSites?userKey=${userKey}&secret=${secretKey}`;
//         axios.get(url_getUserSites)
//         .then(res =>{
//           if (res.data.statusCode !== 403) {
//           setPosts(res.data.sites);
//           setWorking(true);
//           } else 
//           {setWorking(false);}
//         })
//         .catch(error => {
//             setWorking(false);
//             console.error(error)
//         });
//         setSessionItems();
//         const initialIsChecked = Object.keys(validPartnerIds).reduce((acc, d) => {
//           acc[d]=true;
//           return acc;
//         }, {});
//         setIsChecked(initialIsChecked);
//       }, [userKey, secretKey])


// }

