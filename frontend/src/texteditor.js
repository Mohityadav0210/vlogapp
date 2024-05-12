import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import './TextEditor.css'; // Import custom CSS styles

function TextEditor() {
  const [title, setTitle] = useState('');
  const [editorHtml, setEditorHtml] = useState('');
  

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleChange = (html) => {
    console.log(html)
    setEditorHtml(html);
  };
  useEffect( ()=>{
    let timeout = setTimeout(()=>{
       handleSubmit();
    },2000)
    return ()=>clearTimeout(timeout)
  },[title,editorHtml]
  )
  

  const handleSubmit = () => {
    // Prepare the data to be sent
    const data = {
        documentid:1,
       title: title,
       editorHtml: editorHtml
     };

    // Define the URL of your backend API
    const url = 'http://localhost:8000/save'; // Update this with your actual backend URL
    

// Convert data to URL-encoded form data
const formData = new URLSearchParams();
for (const key in data) {
  formData.append(key, data[key]);
}

    // Send the data to the backend
    fetch(url, {
      method: 'POST',
      headers: {
        //'Content-Type': 'application/json'
       'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formData
    })
    .then(response => {
      if (response.ok) {
        console.log('Data sent successfully!');
      } else {
        console.error('Failed to send data:', response.statusText);
      }
    })
    .catch(error => {
      console.error('Error occurred while sending data:', error);
    });
  };

  return (
    <div className="text-editor-container">
      <input
        className="titleeditor"
        placeholder="Title....."
        value={title}
        onChange={handleTitleChange}
      />
      <ReactQuill
        value={editorHtml}
        onChange={handleChange}
        placeholder="Write Something Here........................................"
      />
    </div>
  );
}

export default TextEditor;
