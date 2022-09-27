import { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function EmpDetailUploadForm() {
  // alert("ok");

  const EmpDetailImg = useLocation();

  //  alert("ok");

  const [selectedFile, setSelectedFile] = new useState({
    EmpDetailImage: null,
  });

  const handleChange = (evnt) => {
    setSelectedFile({ EmpDetailImage: evnt.target.files[0] });
  };

  const handleSubmit = (evnt) => {
    evnt.preventDefault();

    const formData = new FormData();

    formData.append(
      "EmpDetailImage",
      selectedFile.EmpDetailImage,
      selectedFile.name
    );

    const config = {
      Headers: {
        "content-type": "multipart/form-data",
      },
    };

    axios
      .post(
        "http://localhost:9090/employee/upload/" + EmpDetailImg.state,
        formData,
        config
      )
      .then((response) => {
        alert(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <>
      <div className="container mt-3">
        <h2>EmpDetail update form</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3 mt-3">
            <label forName="EmpDetailImage" className="form-label">
              Model:
            </label>
            <input type="file" name="EmpDetailImage" onChange={handleChange} />
          </div>

          <button type="submit" className="btn btn-primary">
            Upload
          </button>
        </form>
      </div>
    </>
  );
}
export default EmpDetailUploadForm;
