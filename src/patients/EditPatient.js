import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
export default function EditPatient() {
    let navigate = useNavigate();
    const { id } = useParams();
    const [patient, setPatient] = useState({
        name: "",
        gender: "",
        age: "",
        phno:"",
        diagnosedwith:"",
      });
      const { name, gender, age,phno,diagnosedwith } = patient;
      const onInputChange = (e) => {
        setPatient({ ...patient, [e.target.name]: e.target.value });
      };
      useEffect(() => {
        loadPatient();
      }, []);
      const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:9095/patient/${id}`, patient);
        navigate("/app");
      };
      const loadPatient = async () => {
        const result = await axios.get(`http://localhost:9095/patient/${id}`);
        setPatient(result.data);
      };
      return (
        <div>
          <div class="blue">
        <nav className="navbar navbar-expand-lg"><h3>Patient Management</h3></nav>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow border border-primary">
              <h2 className="text-center m-4">Edit Patient</h2>
              <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3 ">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <div className="border border-primary">
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                Gender
              </label>
              <div className="border border-primary">
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter gender"
                name="gender"
                value={gender}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            </div>
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                Age
              </label>
              <div className="border border-primary">
              <input
                type={"number"}
                className="form-control"
                placeholder="Enter Age"
                name="age"
                value={age}
                onChange={(e) => onInputChange(e)}
              />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                PhoneNumber
              </label>
              <div className="border border-primary">
              <input
                type={"number"}
                className="form-control"
                placeholder="Enter Number"
                name="phno"
                value={phno}
                onChange={(e) => onInputChange(e)}
              />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                 DiagnosedWith
              </label>
              <div className="border border-primary">
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter problem"
                name="diagnosedwith"
                value={diagnosedwith}
                onChange={(e) => onInputChange(e)}
              />
              </div>
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/app">
              Cancel
            </Link>
          </form>
        </div>
      </div>
      
    </div>
    <footer className="footerspace bg-light text-center text-lg-start">
      <div class="blue">
            <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>

            </div>
      </div>
      </footer>
    </div>
  );
}