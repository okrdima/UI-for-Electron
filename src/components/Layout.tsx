import {Container,Col,Row,Box} from '@qonsoll/react-design'
import {SizeForm, ListPoint} from './index'
import {Typography} from "@material-ui/core";
const {useForm } = require('mui-form-generator-fractal-band-2')

const Layout = ()=>{

  const form = useForm()
  const onSubmit:any= (data:object )=>{
    console.log(data)
    form.reset({})
  }
  return(
        <Container>
          <Row>
            <Col>
              <Row>
                <Col cw={7}>
                </Col>
                <Col cw={5}>
                  <Row v={"center"} h={"center"} noInnerGutters>
                    <Col>
                      <Row  h="center">
                        <Col cw={'auto'}>
                          <Typography>Enter size room</Typography>
                        </Col>
                      </Row>
                    <SizeForm form={form} onSubmit={onSubmit} show={['height','width']} buttonProps={ {visibleCancel:false}}/>
                    </Col>
                  </Row>
                  <Row v={"center"} h={"center"} noInnerGutters>
                    <Col>
                      <ListPoint/>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
    )
}
export default Layout