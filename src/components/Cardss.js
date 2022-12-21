import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { ADD } from '../redux/actions/action'
import Cardsdata from './CardsData'
import './style.css'

export const Cardss = () => {
  const [data, setdata] = useState(Cardsdata)
  const dispatch = useDispatch() //to trigger action
  const send = (e) => {
    dispatch(ADD(e))
  }
  return (
    <>
      <h1 className='text-center mt-4'>Abdul Salam's Kitchen</h1>
      <div className='container mt-5'>
        <div className='row'>
          {
            data.map((element, id) => {
              return (
                <>
                  <div className='col-md-4'>
                    <Card className='card'>
                      <Card.Img className='card-img' variant="top" src={element.imgdata} />
                      <Card.Body>
                        <Card.Title>{element.rname}</Card.Title>
                        <Card.Text>
                          <h4>Rs {element.price}</h4>
                        </Card.Text>
                        <div className="d-grid gap-2">
                          <Button variant="primary" size="lg" onClick={() => send(element)}>
                            Add To Cart
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                </>
              )
            })
          }
        </div>
      </div>
    </>
  )
}
