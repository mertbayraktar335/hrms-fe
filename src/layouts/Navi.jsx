import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Button, Menu,Image } from 'semantic-ui-react'

export default function Navi() {
    return (
        <div>
         
            <Menu  inverted color="blue"  fixed="top" size='large'>
           
        <Menu.Item as={Link} to ="/"><Image size="small" src="/23a331.png" /> </Menu.Item>
        
        <Menu.Item as={NavLink} to ="/candidates" > Candidates </Menu.Item>
        <Menu.Item as={NavLink} to ="/employers" > Employers </Menu.Item>
        <Menu.Item as={NavLink} to ="/jobAdvertises" > Job Advertises </Menu.Item>
        <Menu.Item as={NavLink} to ="/jobPositions" > Job Positions </Menu.Item>
         

          <Menu.Menu position='right'>
          {/* <Menu.Item >

          <SocialIcon className="rigth floated"  url="https://github.com/mertbayraktar335/HumanResourceManagementSystem" style={{height:45,width:45}} bgColor="white"   />
          </Menu.Item> */}

            <Menu.Item >
              <Button  color="red">Sign Up</Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    )
         
          
        
}

         

         
        
       