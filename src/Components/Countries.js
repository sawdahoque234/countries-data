import React,{useState,useEffect} from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Country from './Country';
import './COuntrey.css'
import Lodaing from './Lodaing';


const Countries = () => {
    const[countries,setCountries]=useState([])
    const [displayCountry,setDisplayCountry]=useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v2/all')
        .then(res=>res.json())
        .then(data=>{
            setCountries(data)
            setDisplayCountry(data)
        })
    }, [])
const handlesearch=(event)=>{
const text=event.target.value;
const searchText=countries.filter(country=>country.name.toLowerCase().includes(text.toLowerCase()))
setDisplayCountry(searchText)
console.log(searchText)
}

    return (
        <Container > 
             <div>
            <form action="" style={{display:'block',margin:'auto'}}>
            <input type="text" onChange={handlesearch} className="w-50 m-3 p-2 rounded-3" style={{outline:'none'}}  placeholder="search by name" />
        </form>
        </div>
           {countries.length ===0 ?
              <Lodaing/>:
            <div className='data-container p-2 bg-dark'>{

            displayCountry.map((country)=>(
            <Country country={country} key={country.key} ></Country>))
            }

            </div>
           }
        </Container>
        
    );
};

export default Countries;