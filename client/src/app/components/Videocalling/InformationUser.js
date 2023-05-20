import { useEffect, useState } from "react";

function InformationUser() {
  const [patient, setPatient] = useState([]);
  useEffect(() => {
    fetch("http://ec2-18-228-59-5.sa-east-1.compute.amazonaws.com/patient")
      .then((response) => response.json())
      .then((data) => setPatient(data));
  }, []);
  const { firstName, lastName } = patient[0];

  return (
    <div>
      <h1>
        {" "}
        hola {firstName} {lastName}{" "}
      </h1>
    </div>
  );
}

export default InformationUser;
