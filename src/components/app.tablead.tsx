"use client"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import CreateModal from './create.modal';
import { useState } from 'react';



function TableCRUI() { 
  const [showModalCreate , setShowModalCreate] = useState<boolean>(false) 
  return (
    <div>
       <Button
        className='mt-3 float-end'
        variant="primary"
        onClick={() => setShowModalCreate(true)}>POST
        </Button>{' '}
       <TechNewsView/>
       <Future_technology_posts/>
       <Tutorials_and_tips_posts/> 
       <CreateModal
       showModalCreate = {showModalCreate}
       setShowModalCreate = {setShowModalCreate} 
       />
    </div>
    
  );
}

export default TableCRUI;

function TechNewsView() {  
  return (
    <div>
      <h4>Tech News</h4>  
    <Table striped>
    <thead>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Date</th>
        <th>Content</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td className=' m-3'>
          <Button variant="outline-info">View</Button>{' '}
          <Button variant="outline-success">Update</Button>{' '}
          <Button variant="outline-danger">Delete</Button>{' '}
          </td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
        <td>
          <Button variant="outline-info">View</Button>{' '}
          <Button variant="outline-success">Update</Button>{' '}
          <Button variant="outline-danger">Delete</Button>{' '}
          </td>
      </tr> 
    </tbody>
  </Table> 
  </div> 
  );
}

function Future_technology_posts() {  
    return (
      <div>
        <h4>Công nghệ tương lai</h4>  
      <Table striped>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Date</th>
          <th>Content</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td className=' m-3'>
            <Button variant="outline-info">View</Button>{' '}
            <Button variant="outline-success">Update</Button>{' '}
            <Button variant="outline-danger">Delete</Button>{' '}
            </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>
            <Button variant="outline-info">View</Button>{' '}
            <Button variant="outline-success">Update</Button>{' '}
            <Button variant="outline-danger">Delete</Button>{' '}
            </td>
        </tr> 
      </tbody>
    </Table> 
    </div> 
    );
}

function Tutorials_and_tips_posts() {  
  return (
    <div>
      <h4>Hướng dẫn và thủ thuật</h4>
    <Table striped>
    <thead>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Date</th>
        <th>Content</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td className=' m-3'>
          <Button variant="outline-info">View</Button>{' '}
          <Button variant="outline-success">Update</Button>{' '}
          <Button variant="outline-danger">Delete</Button>{' '}
          </td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
        <td>
          <Button variant="outline-info">View</Button>{' '}
          <Button variant="outline-success">Update</Button>{' '}
          <Button variant="outline-danger">Delete</Button>{' '}
          </td>
      </tr> 
    </tbody>
  </Table> 
  </div>
  
  );
}