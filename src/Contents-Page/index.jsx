import React from 'react'
import { Button, FloatingLabel, Form } from 'react-bootstrap'
import { LeftToRight } from '../Animations'

const ContentsPage = () => {
  return (
    <LeftToRight>
      <div className='add-item-shadow rounded-4 overflow-hidden p-4 m-3' style={{ backgroundColor: " rgba(255, 255, 255, 0.5)", borderLeft: "solid rgb(255, 255, 255, 0.4) 1px", borderBottom: "solid rgb(255, 255, 255, 0.4) 1px", borderTop: "solid rgba(255, 255, 255, 0.4) 2px", borderRight: "solid rgb(255, 255, 255, 0.4) 1px" }}>

        <h2>Posting artikel</h2>
        <hr />
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="text" placeholder="Masukan judul artikel" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Masukan isi artikel</Form.Label>
            <Form.Control as="textarea" type="text" placeholder="Masukan judul artikel" style={{ height: '100px' }} />
          </Form.Group>


          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Thumbnail artikel</Form.Label>
            <Form.Control type="file" placeholder="upload thumbnail artikel" />
          </Form.Group>
          <hr />
          <Button variant="primary" type="submit">
            Post artikel
          </Button>
        </Form>
      </div>
    </LeftToRight>
  )
}

export default ContentsPage