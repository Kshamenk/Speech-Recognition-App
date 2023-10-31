import styled from 'styled-components'



export const MyButton = styled.button`
text-align: center;
color: #000 ;
text-transform: uppercase;
font-weight: 600;
curson: pointer;
display: inline-block;
`


export const NeonButton = styled(MyButton)`
width: 130px;
padding-top: 10px;
padding-bottom: 10px;
margin-right: 10px;
background-color: transparent;
border: 3px solid green;
border-radius: 50px;
color:green;
 

&:hover{
    box-shadow: 0 0 10px 0 green inset, 0 0 20px 2px green;
}

`