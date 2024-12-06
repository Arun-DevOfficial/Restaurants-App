import { useState } from "react";

function FileReaderComponent() {
  const [fileContent, setFileContent] = useState("");
  const [file, setFile] = useState(null);
  
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      console.log("Blob Data (File Object):", file); // Log the Blob (file) data

      const reader = new FileReader();

      reader.onload = (e) => {
        setFileContent(e.target.result); // Set the file content as Data URL
      };

      reader.onerror = (err) => {
        console.log("Error reading file:", err); // Handle errors
      };

      reader.readAsDataURL(file); // Read the file as a Data URL (for images)
    } else {
      console.log("No file selected.");
    }
  };
  console.log("BLOB DATA:", fileContent);
  return (
    <div>
      <h2>Select a file to read:</h2>
      <input type="file" onChange={handleFileChange} />
      {fileContent && <img src={fileContent} alt="Uploaded" />}{" "}
      {/* Render image if fileContent exists */}
    </div>
  );
}

export default FileReaderComponent;
