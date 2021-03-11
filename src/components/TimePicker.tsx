import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker
} from '@material-ui/pickers'

interface TimePickerProps  {
  value: any,
  onChange:any,
}
const TimePicker = (props:TimePickerProps) => {
  const { value, onChange } = props
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardTimePicker
        margin="normal"
        label="Time picker"
        value={value}
        onChange={onChange}
        KeyboardButtonProps={{
          'aria-label': 'change time',
        }}
      />
    </MuiPickersUtilsProvider>
  )
}
export default TimePicker