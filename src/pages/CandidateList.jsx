import React, { useState,useEffect } from 'react'
import { Table,Header,Icon,Pagination } from 'semantic-ui-react'
import CandidateService from "../services/candidateService"
import { Link } from 'react-router-dom'
export default function CandidateList() {

    const [candidates, setCandidates]=useState([])
    useEffect(() => {
        let candidateService = new CandidateService()
        candidateService.getCandidates().then(result=> setCandidates(result.data.data))
       
    }, [])
    return (
        <div>
            <Header as='h3' icon textAlign='center'>
      <Icon  name='users'  />
      <Header.Content>CANDIDATES</Header.Content>
    </Header>
        
    <Table  celled inverted color="blue">
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Candidate Id</Table.HeaderCell>
        <Table.HeaderCell>Firstname</Table.HeaderCell>
        <Table.HeaderCell>Lastname</Table.HeaderCell>
        <Table.HeaderCell>Email</Table.HeaderCell>
        <Table.HeaderCell>Birth Date</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
        {
            candidates.map((candidate => (
      <Table.Row  key={candidate.id} >
        <Table.Cell ><Link style={{color:"white"}}  to={`/candidates/${candidate.id}`}>{candidate.id} </Link></Table.Cell>
        <Table.Cell>{candidate.firstname}</Table.Cell>
        <Table.Cell>{candidate.lastname}</Table.Cell>
        <Table.Cell>{candidate.email}</Table.Cell>
        <Table.Cell>{candidate.birthDate}</Table.Cell>
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
  
        
    )}