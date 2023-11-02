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
border: 3px solid ${({status})=> status==='done' ? 'green' : status === 'inprocess' ? 'orange' : '#555'};
border-radius: 50px;
color:${({status})=> status==='done' ? 'green' : status === 'inprocess' ? 'orange' : '#555'};
 

&:hover{
    box-shadow: 0 0 10px 0 ${({status})=> status==='done' ? 'green' : status === 'inprocess' ? 'orange' : '#555'} inset, 0 0 20px 2px ${({status})=> status==='done' ? 'green' : status === 'inprocess' ? 'orange' : '#555'};
}

&:focus{
    outline-width: 0;
}
`

export const NeonDiv = styled(NeonButton)`
width: 90%;
padding-left: 10px;
padding-right: 10px;
margin-bottom: 10px;
text-transform: capitalize;
display: flex;


`