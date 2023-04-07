import { alignProperty } from '@mui/material/styles/cssUtils'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
function Footer() {
  return (
    <>
    <div style={{width:"10vw", display:"flex", marginLeft:"2%"}}>
        <a href='https://www.instagram.com/shree_porwal.07' style={{color:"white", paddingRight:"20%",paddingBottom:"20%", cursor:"pointer"}}><InstagramIcon/></a>
        <a href='https://in.linkedin.com/in/shriya-porwal-084814237' style={{color:"white", paddingRight:"20%",paddingBottom:"20%", cursor:"pointer"}}><LinkedInIcon/></a>
        <a href='https://github.com/shreeporwal07' style={{color:"white", paddingRight:"20%",paddingBottom:"20%", cursor:"pointer"}}><GitHubIcon/></a>
        <a href='https://twitter.com/shree_porwal07' style={{color:"white", paddingRight:"20%",paddingBottom:"20%", cursor:"pointer"}}><TwitterIcon/></a>
        <div style={{color:"white"}}>
          <div style={{display:"flex"}}>
          <hr style={{width:"10vw", height:"1%"}}></hr>
          <span>&nbsp;&nbsp;&nbsp;Follow&nbsp;me</span>
          </div>
        </div>
    </div>
    </>
  )
}

export default Footer
