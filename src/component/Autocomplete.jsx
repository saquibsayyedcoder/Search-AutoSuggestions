import React, { useEffect, useState } from 'react'

const Autocomplete = (
    placeholder="",
    fetchSuggestions,
    dataKey="",
    customeLoading="Loading...",
    onSelect=() =>{},
    onChange=()=>{},
    onBlur=()=>{},
    onFocus=()=>{},
    customStyles={}

) => {

    const [inputValue, setInputValue] = useState();
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleInputChange = (event)=>{
        setInputValue(event.target.value);
        onChange(event.target.value);
    };

    const getSuggestions = async(query)=>{
        setError(null)
        setLoading(true)
        try {
            let result;
            if(cities){
                result = cities.filter((item)=>{
                    return item.toLowerCase().includes(query.toLowerCase());

                });
            } else if( fetchSuggestions){
                result = await fetchSuggestions(query)
            }
            setSuggestions(result);
            
        } catch (error) {
            setError("Failed to fetch suggestions");
            setSuggestions([]);
        }finally{
            setLoading(false);
        }
    }
    useEffect(() => {
        if(inputValue.lenght > 1){
            getSuggestions(inputValue);

        }else{
            setSuggestions([]);
        }
    }, [inputValue])
  return (
    <div className='contianer'>
        <input type='text' style={customStyles}
        onBlur={onBlur}
        onFocus={onFocus}
        onChange={handleInputChange}
        value={inputValue}

        />

    </div>
  );
};
export default Autocomplete