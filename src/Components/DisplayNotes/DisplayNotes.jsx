import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import uuid from "react-uuid"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const DisplayNotes = ({data}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        {
          data.map((savedNotes =>(
            <Grid item xs={12} sm={4} key={savedNotes.group}>
              {savedNotes.name.map((string)=>(
                <div key={uuid()}>
                  <Item>{string}</Item>  
                </div>
                
              ))}
            </Grid>
          )))
        }
      </Grid>
    </Box>
  );
}

export default DisplayNotes









//  const DisplayNotes = ({data}) => {
//   return (
//     <div>
        
//     </div>
//   )
// }


// export default DisplayNotes