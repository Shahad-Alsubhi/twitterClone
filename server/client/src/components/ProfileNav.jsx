import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Tweet from './Tweet';
import TweetContent from './tweetContent';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

export default function ProfileNav() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', maxWidth:"656px", padding:"0" }}
  >
      <Box sx={{backgroundColor:"black" , minWidth:"0", borderBottom:"solid #252424 1px"}}>

        <Tabs value={value} onChange={handleChange}

                  aria-label="basic tabs example">
          <Tab label="Posts" sx={{fontSize:"15px",textTransform:"capitalize",color:"#71767b", fontWeight:"600",minWidth:"0",maxWidth:"97px", ":focus":{color:"white", fontWeight:"900"}, 
        }} />
          <Tab label="Replise" sx={{fontSize:"15px",textTransform:"capitalize",color:"#71767b", fontWeight:"600",minWidth:"0",maxWidth:"97px", ":focus":{color:"white", fontWeight:"900"}, 
        }} />
          <Tab label="Likes"  sx={{fontSize:"15px",textTransform:"capitalize",color:"#71767b", fontWeight:"600",minWidth:"0",maxWidth:"97px", ":focus":{color:"white", fontWeight:"900"}, 
        }}/>
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
      <Tweet />
    <Tweet/>
    <Tweet img={true}/>
    

      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <TweetContent reply={true}/>
      <Tweet />
      <TweetContent reply={true}/>
      <Tweet />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <Tweet/>
    <Tweet/>
    <Tweet/>
          </CustomTabPanel>
    </Box>
  );
}
