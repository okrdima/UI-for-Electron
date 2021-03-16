import { Container, Col,  Row,  Box} from '@qonsoll/react-design'
import {useStoreContext} from "../context";
import {Combined, ListItemPoint} from "./index";
import {useEffect, useState} from "react";
import {Button, Typography} from "@material-ui/core";
import SoundIntensity from "../functions/SoundIntensity";
import SoundIntensityLevel from "../functions/SoundIntensityLevel";
import SoundPressureLevel from "../functions/SoundPressureLevel";


const ListPoint = ()=>{
  const { store } = useStoreContext()
  const [points, setPoints] = useState(store)
  useEffect(()=>
  {setPoints(store)
  },[store])
  points?.points?.map((item:any, index:number)=>{
    let I:number = SoundIntensity(item.value)
    let L0:number = SoundIntensityLevel(I)
    let L:number = SoundPressureLevel(item.value)
    console.log(I.toFixed(5 ))
    console.log(L0.toFixed(1))
    console.log(L.toFixed(2))
  })
  return (
    <Container mt={3}>
      <Row  h="center" noGutters>
        <Col cw={'auto'}>
          <Typography>Point List</Typography>
        </Col>
      </Row>
      <Row noGutters>
        <Col>
        {
          points?.points?.length === 0 ?
          <img
            src="/noData.svg"
            alt="no data"
            style={{ width: '100%', height: '175px' }}
          /> :
          points?.points?.map((item:any, index:number)=>(
            <ListItemPoint key={index} pointName={item.pointName}  start={item.start} end={item.end} value={item.value} id={item.id}/>
          ))
        }
        </Col>
      </Row>
      <Row noGutters mt={2} v={'center'} h={'center'}>
        <Col cw={'auto'}>
        <Combined title="Add points">
          <Button variant="contained" type='submit' color="primary" >Add Point</Button>
        </Combined>
        </Col>
      </Row>
    </Container>
  )
}
export default ListPoint