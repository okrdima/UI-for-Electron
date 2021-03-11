import Button from '@material-ui/core/Button'
import TimePicker from "./TimePicker";
const { Form, FormGenerator, FormButtons} = require('mui-form-generator-fractal-band-2')

const config = [
  {
    inlineLayout: [
      {
        type: 'text',
        label: 'Point Name',
        name: 'pointName',
        placeholder: 'Enter point name',
        rules: {
          required: 'Enter point name',
          pattern: {
            value: 'word'
          }
        }
      },
      {
        type: 'number',
        label: 'Value',
        name: 'value',
        placeholder: 'Enter width',
        rules: {
          required: 'Enter widths',
        }
      }
    ]
  },
  {
    inlineLayout: [
      {
        label: 'Start',
        name: 'start',
        Component: TimePicker,
        rules: {
          required: 'Enter start time',
        }
      },
      {
        label: 'End',
        name: 'end',
        Component: TimePicker,
        rules: {
          required: 'Enter end time',
        }
      }
    ]
  }
]
interface TimePointProps  {
  onSubmit: any,
  form:any,
  buttonProps?:object,
  show:Array<string>
}
const TimePointForm = (props:TimePointProps) => {
  const {show,buttonProps,onSubmit,form}=props
  return (
    <Form
      form={form}
      onSubmit={onSubmit}>
      <FormGenerator config={config} show={show} />
      <FormButtons Button={Button} {...buttonProps}/>
    </Form>
  )
}

export default TimePointForm