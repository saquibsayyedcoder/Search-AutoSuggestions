import React from 'react'
import Autocomplete from './component/Autocomplete'

const App = () => {
  const cities = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Kolkata",
    "Chennai",
    "Hyderabad",
    "Ahmedabad",
    "Pune",
    "Jaipur",
    "Lucknow",
    "Kanpur",
    "Surat",
    "Nagpur",
    "Indore",
    "Chandigarh"
  ];
  const fetchSuggestions = async(query)=>{
    const response = await fetch(
      `https://dummyjson.com/recipes/search?q=${query}`
    );
    if(!response.ok){
      throw new Error("network response was not ok");

    }
    const result = await response.json();
    return result.recipes;
    

  }
  return (
    <>
    <div>
      <h1>AutoComplete / Typehead</h1>
      <Autocomplete
      placeholder={"Enter City Name"}
      fetchSuggestions={fetchSuggestions}
      dataKey={"name"}
      customeLoading={<> Loading Cities...</>}
      onSelect={(res) => console.log(res)}
      onChange={(e)=>{}}
      onBlur={(e)=>{}}
      onFocus={(e)=>{}}
      customStyles={{}}
      />
    </div>
    </>
  )
}

export default App