import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
 
function App() {
  const [value, setValue] = useState("");
  const onChangeHandle = (e, editor) => {
    console.log(editor.getData());
    const data = editor.getData();
    setValue(data);
  }

  return (
    <div className="App">
      <h2>CKEditor 5</h2>
      <CKEditor
        editor = {ClassicEditor }
        onChange = {onChangeHandle}

        config={
          {
            ckfinder:{
              uploadUrl:"/"
            }
          }
        }
      />

      <div className="display">
      <Link params={{ testvalue: "hello" }} to="/blog">Post</Link>
      {/* { ReactHtmlParser(value) } */}
        {value}
      </div>
    </div>
  );
}

export default App;
