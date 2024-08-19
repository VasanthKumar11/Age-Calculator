import { useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdPlayCircleOutline } from "react-icons/md";


function Age() {
    const [del, setDel] = useState('')
    const [cal, setCal] = useState({
      years: 0,
      months: 0,
      days: 0
    });
  
  
    const million = () => {
      const now = new Date();
      const date = new Date(del);
  
      let years = now.getFullYear() - date.getFullYear()
      let months = now.getMonth() - date.getMonth()
      let days = now.getDate() - date.getDate()
  
      if (months < 0 || (months === 0 && now.getDate() < date.getDate())) {
        years--;
        months = 12 - Math.abs(months)
      }
  
      if (days < 0) {
        months--;
        const mds = new Date(now.getFullYear(), now.getMonth() - 1, 0).getDate();
        days = mds - Math.abs(days)
      }
      setCal({ years, months, days })
      console.log(cal.days)
      console.log(years, months, days)
    }
  return (
    <div className='bgm'>
            <>
        
      <Row>
        <Col xs={12} md={3} className='a3'></Col>
        <Col xs={12} md={6} className ='a2'>
          <Card className='a1'>
          <Card.Body className='a5'>
              <Card.Text>
                <div>
               <label className='a6'>Agecalculator</label>
                <br/>
                <br/>
                <input type='date' value={del} onChange={(e) => setDel(e.target.value)} className='a7'></input>
                <br/>
                <br/>
                <label className='a8'>Find your Age</label>
                <br/>
                <button onClick={million} className='a9'>Calculate<MdPlayCircleOutline/></button><br></br>
                <label className='a10'>Your Age is</label><br/>
               <label className='a11'>{cal.years} years {cal.months} months {cal.days} days</label>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={3} className='a4'></Col>
      </Row>
    </>
    </div>
  )
}

export default Age