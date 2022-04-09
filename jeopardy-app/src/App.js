import "./App.css";
import { useState, useEffect } from "react";

function App() {
    const [data, setData] = useState(0);
    const [Message, setMessage] = useState({
      content: "",
      type: "",
    });
    const [score, setScore] = useState(0);
  
    const getData = async () => {
      const response = await fetch("https://jservice.io/api/random");
      const data = await response.json();
      setData(data);
      setMessage({
        ...Message,
        ["content"]: data[0].question,
        ["type"]: "Question",
      });
    };
    // useEffect(() => {
    //   getData();
    // }, []);
  
    const handleClick = async (e) => {
      getData();
    };

    