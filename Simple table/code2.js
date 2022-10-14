import React from 'react';
import {Tbody, Tr, Td} from '@chakra-ui/react'

function StudentList() {

    const students = [
        {
            Studentid:1,
            Studentname: "Ram",
            age:30,
            branch:"EC"
        },

        {
            Studentid:2,
            Studentname: "Raj",
            age:30,
            branch:"EC"
        },

        {
            Studentid:3,
            Studentname: "mahesh",
            age:30,
            branch:"EC"
        },

        {
            Studentid:4,
            Studentname: "shyam",
            age:30,
            branch:"EC"
        },

        
    ]
 
    const student1 = students.map(student =>
        
        <Tbody>
            <Tr>
              <Td isNumeric>{student.Studentid}</Td>
              <Td>{student.Studentname}</Td>
              <Td isNumeric>{student.age}</Td>
              <Td>{student.branch}</Td>
            </Tr>
        </Tbody>
        
    
    
    );

    return (
        <>
            {student1}
        </>)
}


    export default StudentList
   
    
