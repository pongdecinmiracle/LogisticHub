import DatePicker from 'react-datepicker';
import moment from 'moment';

class Calender extends Component {

  constructor(props) {
    super(props);
    this.state = { startDate: moment() }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(date) {
      console.log(date)
    this.setState({
      startDate: date
    })

  }

  render() {
    return (
        <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
            placeholderText="dd/mm/yyyy"
            dateFormat="DD/MM/YYYY" 
            className="input"
            type="date"
            name={this.props.name}
            value={this.props.value}
                          
        />

    )

  }
}
export default Calender