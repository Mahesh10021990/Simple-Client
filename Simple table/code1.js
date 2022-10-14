import React, {Component} from 'react';
import {TableContainer, Table, Thead, Th, Tr} from '@chakra-ui/react'
import StudentList from './code2';


class Message extends Component{

  
    render() {
    return(
       

        <TableContainer>
          
        <Table variant='simple'>
        <div>
          <Thead>
            <Tr>
              <Th isNumeric>Id</Th>
              <Th>Studentname</Th>
              <Th isNumeric>age</Th>
              <Th>branch</Th>
              </Tr>
            </Thead>
          <StudentList/>
          </div>
        </Table>
      
      </TableContainer>
                       
                  
    )

    }
}

export default Message