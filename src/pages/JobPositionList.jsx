import React, { useState,useEffect } from 'react'
import { Table,Header,Icon,Pagination } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import JobPositionService from '../services/jobPositionService'

export default function JobPositionList() {
    const [jobPositions,setJobPositons] =useState([])
    useEffect(() => {
        let jobPositonService = new JobPositionService()
        jobPositonService.getJobPositions().then(result=> setJobPositons(result.data.data))
       
    }, [])
    return (
        <div>
        <Header as='h3' icon textAlign='center'>
  <Icon  name='handshake'  />
  <Header.Content>JOB POSITIONS</Header.Content>
</Header>
    
<Table  celled inverted color="blue">
<Table.Header>
  <Table.Row>
    <Table.HeaderCell>Job Position Id</Table.HeaderCell>
    <Table.HeaderCell>Position</Table.HeaderCell>

  </Table.Row>
</Table.Header>

<Table.Body>
    {
        jobPositions.map((jobPosition => (
  <Table.Row  key={jobPosition.id} >
    <Table.Cell ><Link style={{color:"white"}}  to={`/jobPositions/${jobPosition.id}`}>{jobPosition.id} </Link></Table.Cell>
    <Table.Cell>{jobPosition.position}</Table.Cell>

    <Table.Cell textAlign='right'></Table.Cell>
  </Table.Row>
  
)))}
</Table.Body>
</Table>
<Pagination
inverted color="blue"
boundaryRange={0}
defaultActivePage={1}
ellipsisItem={"..."}
firstItem={null}
lastItem={null}
siblingRange={10}
totalPages={50}
/>
</div>
    )
}
