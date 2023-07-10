import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
export default function Home() {
    const [patients, setPatients] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    loadPatients();
  }, []);
  const loadPatients = async () => {
    const result = await axios.get("http://localhost:9095/patients");
    setPatients(result.data);
  };
  const deletePatient = async (id) => {
    await axios.delete(`http://localhost:9095/patient/${id}`);
    loadPatients();
  };
  return (
    <div className="containe">
      
      <div className="py-4">
      <Link className="btn btn-outline-primary" to="/addpatient">
            Add Patient
          </Link>
          <div class="tab">
        <table className="table border shadow">
          <thead>
            <tr>
              
            <th scope="col"><div className="blue">S.No</div></th>
              <th scope="col"><div className="blue">Name</div></th>
              <th scope="col"><div className="blue">Gender</div></th>
              <th scope="col"><div className="blue">Age</div></th>
              <th scope="col"><div className="blue">PhoneNumber</div></th>
              <th scope="col"><div className="blue">DiagnosedWith</div></th>
              
            </tr>
          </thead>
          <tbody>
            {patients.map((patient, index) => (
                 <tr>
                 <th scope="row" key={index}>
                   {index + 1}
                 </th>
                 <td>{patient.name}</td>
                <td>{patient.gender}</td>
                <td>{patient.age}</td>
                <td>{patient.phno}</td>
                <td>{patient.diagnosedwith}</td>
                <td>
                  <Link
                    className="btn blue"
                    to={`/viewpatient/${patient.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn b1"
                    to={`/editpatient/${patient.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn pink"
                    onClick={() => deletePatient(patient.id)}
                  >
                    Delete
                  </button>
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
}