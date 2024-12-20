import styled from "styled-components";

export const Container = styled.button`
    width: 40%;
     border-radius: 5px;
    margin: 1rem auto;
    display:block;
    background: indigo;
    border:none;
`

export const Titulo = styled.h2`
    font-size: 2em;
    font-style: italic;
    color: white;
    text-transform: capitalize;
    font-family: verdana;
    margin: 1rem 0 10px;
`

export const Input = styled.input`
    width: 90%;
    height: 2rem ;
    display:block;
    border:none;
    border-radius: 5px;
    margin: 0 auto;
    padding: 0 1rem;
    outline:none;
    font-size:1.2em;
`

export const AddBtn = styled.button`
    border-radius:50%;
    width:50px;
    aspect-ratio:1;
    margin:1.8rem 0;
    font-size:2em;
    outline: 2px solid white;
    border:none;
    outline-offset: 4px;
    cursor:pointer;
    transition: 0.15s ease-in ;

    &:hover{
         transform:scale(1.1);
         background: lightblue;
         outline-offset: 6px;
         outline: 2px solid   lightblue;
         color: indigo;
    }
`

export const DelBtn = styled.button`
    border-radius:50%;
    width:50px;
    aspect-ratio:1;
    margin:1.2rem 0;
    font-size:2em;
    outline: 2px solid white;
    border:none;
    outline-offset: 4px;
    cursor:pointer;

`

export const  Tasks = styled.div`
background: white;
width:90%;
margin: 1rem auto;
display:flex;
justify-content: space-between;
align-items:center;
height:2rem;
border-radius: 5px;
padding: 0 1rem;
font-size: 1.2em;

button{

    border-radius:50%;
    width: 25px;
    aspect-ratio:1;
    border:none;
    background: red;
    color:white;
    cursor:pointer;
    transition: 0.2s linear;

    &: hover{
    transform:scale(0.9)
    }
}

p{
    text-transform: capitalize;
}



`