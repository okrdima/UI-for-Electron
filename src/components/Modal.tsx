import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography
} from '@material-ui/core'

interface ModalProps  {
  open: any,
  dialogProps:any,
  title:string,
  children: any,
  buttonSubmitProps:any,
  buttonCancelProps:any,
}

const Modal = (props:ModalProps) => {
  const {
    open,
    dialogProps,
    title,
    children,
    buttonSubmitProps,
    buttonCancelProps
  } = props
  return (
    <Dialog open={open} onClose={buttonCancelProps.onClick} {...dialogProps}>
      <DialogTitle disableTypography>
        <Typography component="h2">
          {title}
        </Typography>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
            <Button {...buttonCancelProps}>Cancel</Button>
            <Button {...buttonSubmitProps}>Add Point</Button>
      </DialogActions>
    </Dialog>
  )
}
export default Modal