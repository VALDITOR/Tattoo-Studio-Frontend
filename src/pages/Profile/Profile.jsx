import React, { useState, useEffect } from "react";
import "./Profile.css";

import { CustomInput } from "../../common/CustomInput/CustomInput";
import { validator } from "../../services/useful";


//Importo elementos para conexión a RDX en modo lectura
import { useSelector } from "react-redux";
import { userData } from "../userSlice";

export const Profile = () => {
  //Instancio a RDX en modo lectura
  const datosRdxUser = useSelector(userData);

  //Variables de estado con hook useState en las que voy a guardar los valores de los input
  const [profile, setProfile] = useState({
    name: datosRdxUser.credentials.name,
    surname: datosRdxUser.credentials.surname,
    email: datosRdxUser.credentials.email,
  });

  const [profileError, setProfileError] = useState({
    nameError: '',
    surnameError: '',
    emailError: '',
    passwordError: '',
  });

  const [isEnabled, setIsEnabled] = useState(true);

  useEffect(() => {
    //RDX se puede seguir como un hook de useState... por lo tanto seguimos

  }, [datosRdxUser]);

  const errorCheck = (e) => {

    let error = "";

    error = validator(e.target.name, e.target.value);

    setProfileError((prevState) => ({
        ...prevState,
        [e.target.name + 'Error']: error,
    }));
  }

  const functionHandler = (e) => {
    setProfile((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  const sendData = () => {
    console.log("wololo")
    setTimeout(()=>{
        setIsEnabled(true)
    }, 1000)
  }

  return (
    <div className="profileDesign">
      {console.log("hola")};
      {console.log(profile)};
      <CustomInput
        disabled={isEnabled}
        design={`inputDesign ${
          profileError.firstNameError !== "" ? "inputDesignError" : ""
        }`}
        type={"text"}
        name={"name"}
        placeholder={""}
        value={profile.name}
        functionProp={functionHandler}
        functionBlur={errorCheck}
      />
      <CustomInput
        disabled={isEnabled}
        design={`inputDesign ${
          profileError.lastNameError !== "" ? "inputDesignError" : ""
        }`}
        type={"text"}
        name={"surname"}
        placeholder={""}
        value={profile.surname}
        functionProp={functionHandler}
        functionBlur={errorCheck}
      />
      <CustomInput
        disabled={isEnabled}
        design={`inputDesign ${
          profileError.emailError !== "" ? "inputDesignError" : ""
        }`}
        type={"email"}
        name={"email"}
        placeholder={""}
        value={profile.email}
        functionProp={functionHandler}
        functionBlur={errorCheck}
      />
      {
        isEnabled 
        ? (<div className="editDesign" onClick={()=>setIsEnabled(!isEnabled)}>Edit</div>)

        : (<div className="sendDesign" onClick={()=>sendData()}>Send</div>)
      }
    </div>
  );
};