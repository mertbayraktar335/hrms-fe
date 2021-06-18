import React, { useState,useEffect } from 'react'
import { Table,Header,Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import EmployerService from '../services/employerService'
export default function EmployerList() {
    const [employers, setEmployers]=useState([])
    useEffect(() => {
        let employerService = new EmployerService()
        employerService.getEmployers().then(result=> setEmployers(result.data.data))
       
    }, [])
   
    return (
        
          <div>
            <Header as='h3' icon textAlign='center'>
      <Icon  name='factory'   />
      <Header.Content>EMPLOYERS</Header.Content>
    </Header>
        
            <Table celled inverted color="blue">
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Employer Id</Table.HeaderCell>
        <Table.HeaderCell>Company Name</Table.HeaderCell>
        <Table.HeaderCell>Web Address</Table.HeaderCell>
        <Table.HeaderCell>Email</Table.HeaderCell>
        <Table.HeaderCell>Phone Number</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
        {
            employers.map((employer => (
      <Table.Row key={employer.id} >
        <Table.Cell><Link style={{ color:"white"}} to={`/employers/${employer.id}`} >{employer.id}</Link></Table.Cell>
        <Table.Cell>{employer.companyName}</Table.Cell>
        <Table.Cell>{employer.webAddress}</Table.Cell>
        <Table.Cell>{employer.email}</Table.Cell>
        <Table.Cell>{employer.phoneNumber}</Table.Cell>
        <Table.Cell textAlign='right'></Table.Cell>
      </Table.Row>
      
    )))}
    </Table.Body>
    </Table>
    </div>
  
        
    )} 
        
    
