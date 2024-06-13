"use client"

import { PROD_API_URL } from "@/config/urls";
import { useEffect, useState } from "react";

export default function Home() {


  const [name, setName] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      console.log(PROD_API_URL);
      const response = await fetch(`${PROD_API_URL}/getName`);
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
