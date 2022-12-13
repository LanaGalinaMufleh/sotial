import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postData = [
	{id:"1", message:"hello", likes:40},
	{id:"2" , message:"i am Elon Musk", likes:3},
	{id:"3" , message:"i love Mars", likes:509},
	{id:"4" , message:"Tesla", likes:708},
	{id:"5" , message:"I am rich", likes:34}
]

let dialogNames = [
	{id:"1",name:"Donald Trump"},
	{id:"2" ,name:"Bill Gates"},
	{id:"3" ,name:"Joe Biden"},
	{id:"4" ,name:"Barak Obama"}
]
let messageItems = [
	{id:1, message:"Hello. I am great"},
	{id:2, message:"Hello. I am richer than you"},
	{id:3, message:"Where I am?"},
	{id:4, message:"Who is there? 8)"}
]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App postData={postData} dialogNames={dialogNames} messageItems={messageItems} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
