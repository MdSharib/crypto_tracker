import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { ThemeProvider, createTheme } from '@mui/material';

const TabsComponent = ({coins}) => {
  const [value, setValue] = useState('grid');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = createTheme({
    palette:{
      primary:{
        main: "#3a80e9",
      }
    }
  })

  const style = {
    color: "var(--white)",
    width: "50vw",
    fontSize: "1.2rem",
    fontWeight: 600,
    fontFamily: "Inter",
    textTransform: "capitalize"
  }

  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>

          <TabList onChange={handleChange} variant='fullWidth'>
            <Tab label="Grid" value="grid" sx={style}/>
            <Tab label="List" value="list" sx={style}/>
 
          </TabList>

        <TabPanel value="grid"><div>{coins.map((val, i) => {
          return <div>{i+1} - {val.name}</div>
        })}</div></TabPanel>
        <TabPanel value="list"><div>mapping for list</div></TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}

export default TabsComponent