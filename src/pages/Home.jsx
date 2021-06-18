import React from 'react'

import { Header,Icon} from 'semantic-ui-react'
export default function Home() {
    return (
        <div>
             <a href="https://github.com/mertbayraktar335/HumanResourceManagementSystem">
             <Header as='h1' icon>
    <Icon name='github square' size="huge" />
    <Header.Content >
      HUMAN RESOURCE MANAGEMENT SYSTEM BACK-END
     </Header.Content>
  </Header>
  </a>    
  <a href="https://github.com/mertbayraktar335/hrms-fe">
             <Header as='h1' icon>
    <Icon name='github square' size="huge" />
    <Header.Content >
      HUMAN RESOURCE MANAGEMENT SYSTEM FRONT-END
     </Header.Content>
  </Header>
  </a>    
            
           
        </div>
    )
}
