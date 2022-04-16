import React from 'react';
import { Badge, Button, Card, Container } from 'react-bootstrap';

const Country = (props) => {
    const{name,nativeName,region,capital,population,flag}=props.country
    return (
        <Container >
           <Card border="light"  className="bg-light " style={{ width: '18rem', height:'22rem' ,margin:'10px'}}>
           <Card.Img variant="top"  style={{width:'auto',height:'150px'}} src={flag} />
     
             <h4 className='text-success'>{name}</h4>  
             <Badge pill bg="dark" className='my-1 py-2'>Native_Name:
        {nativeName}
        </Badge>
            <Badge pill bg='dark' className='my-1 py-2'> Capital: {capital}</Badge>
            <Badge pill bg="dark" className=' py-2'>
            Region: {region}
        </Badge>
        <Badge pill bg="dark" className='my-1 py-2'>Population: {population}
        </Badge>
            {/* <a href={`./countryinfo/${name}`}><Button>Details</Button></a> */}
        </Card>
        </Container>
    );
};

export default Country;