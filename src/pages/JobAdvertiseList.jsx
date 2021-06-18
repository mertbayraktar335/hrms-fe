import React, { useState,useEffect } from 'react'
import { Table,Header,Icon,Pagination } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import JobAdvertiseService from '../services/jobAdvertiseService'

export default function JobAdvertiseList() {

    const [jobAdvertises,setJobAdvertises] =useState([])
    useEffect(() => {
        let jobAdvertisService = new JobAdvertiseService()
        jobAdvertisService.getJobAdvertisesByIsActiveOrderByCreatedDateDesc().then(result=> setJobAdvertises(result.data.data))
       
    }, [])
    return (
        <div>
        <Header as='h3' icon textAlign='center'>
  <Icon  name='file text outline'  />
  <Header.Content>JOB ADVERTISES</Header.Content>
</Header>
    
<Table  celled inverted color="blue">
<Table.Header>
  <Table.Row>
    <Table.HeaderCell>Company Name</Table.HeaderCell>
    <Table.HeaderCell>Job Position</Table.HeaderCell>
    <Table.HeaderCell>Open Positions</Table.HeaderCell>
    <Table.HeaderCell>Creation Date</Table.HeaderCell>
    <Table.HeaderCell>End Date</Table.HeaderCell>
  </Table.Row>
</Table.Header>

<Table.Body>
    {
        jobAdvertises.map((jobAdvertise => (
  <Table.Row  key={jobAdvertise.id} >
    <Table.Cell><Link style={{color:"white"}}  to={`/jobAdvertise/${jobAdvertise.employerCompanyName}`}>{jobAdvertise.employerCompanyName}</Link> </Table.Cell>
    <Table.Cell>{jobAdvertise.jobPositionPosition}</Table.Cell>
    <Table.Cell>{jobAdvertise.numberOfOpenPositions}</Table.Cell>
    <Table.Cell>{jobAdvertise.createdDate}</Table.Cell>
    <Table.Cell>{jobAdvertise.applicationDeadline}</Table.Cell>
    <Table.Cell textAlign='right'></Table.Cell>
  </Table.Row>
  
)))}
</Table.Body>

</Table>
<Pagination
    inverted color="blue"
    boundaryRange={0}
    defaultActivePage={1}
    ellipsisItem={null}
    firstItem={null}
    lastItem={null}
    siblingRange={1}
    totalPages={10}
  />
</div>

    
)}