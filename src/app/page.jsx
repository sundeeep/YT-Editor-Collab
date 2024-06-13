"use client"

import { useEffect, useState } from "react";

export default function Home() {

  const DEV_DB_BASE_URL = "http://localhost:3699/";
  const PROD_DB_BASE_URL = "";

  const [name, setName] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${DEV_DB_BASE_URL}getName`);
      const data = await response.json();
      setName(prev => (prev = data?.name));
    }
    fetchData();
    return () => fetchData
  },[])
  
  return (
    <>
    {
      name
      ?<div>Welcome, {name}!</div>
      :<h1>Loading...</h1>
    }
    </>
      
  );
}
