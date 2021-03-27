import React,{ useState } from 'react'
import { Button } from '@material-ui/core'
import { Modal, TimePointForm } from './index'
import { useStoreContext } from '../context'
const {useForm} = require( 'mui-form-generator-fractal-band-2')

interface CombinedProps  {
  title:string,
  children?: JSX.Element
}

const CombinedAddPoint= (props:CombinedProps) => {
// [INTERFACES]
  const {title, children} = props


  // [COMPONENT_STATE_HOOKS]
  const [open, setOpen] = useState(false)

  // [ADDITIONAL_HOOKS]
  const form = useForm()
  const { dispatch } = useStoreContext()

  // [HELPER_FUNCTIONS]
  const onAddPoint: any = (data: object) => {
    dispatch({ type: 'ADD_POINT', payload: data })
    setOpen(false)
    form.reset({})
  }
  const submitForm: any = () => form.submit()
  const handleClickOpen: any = () => setOpen(true)
  const handleClose: any = () => {
    setOpen(false)
  }

  // [TEMPLATE]
  return (
    <>
      {(children &&
        React.cloneElement(children, {onClick: handleClickOpen})) || (
        <Button onClick={handleClickOpen}/>
      )}

      <Modal
        open={open}
        title={title}
        dialogProps={{
          maxWidth: 'sm',
          fullWidth: true
        }}
        buttonSubmitProps={{
          text: 'Submit',
          variant: 'contained',
          color: 'primary',
          onClick: submitForm,
        }}
        buttonCancelProps={{
          text: 'Cancel',
          variant: 'contained',
          onClick: handleClose
        }}
        buttonSubmitText={'Add point'}>

        {
          <TimePointForm show={['pointName', 'value','start','end']} onSubmit={onAddPoint} form={form} buttonProps={{visible: false}}/>
        }
      </Modal>
    </>
  )
}
export default CombinedAddPoint
