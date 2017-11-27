import styled, { css } from 'styled-components'
import { Container, Flex, Box } from 'rebass'
import { format } from 'date-fns'
import Select from './select'

const StyledBox = styled(Box)`
	${props => css`
		${props.theme.screen.small} {
			padding-left: 5px;
		}
	`};
`

class DatePicker extends React.Component {
	state = {
		birthMonth: undefined,
		birthDay: undefined,
		birthYear: undefined
	}
	handleSelectChange = e => {
		const name = e.target.name
		const value = e.target.value
		this.setState({
			[name]: value
		})
	}
	render() {
		let selectedMonth
		let selectedDay
		let selectedYear
		if (this.props.date) {
			const date = format(new Date(this.props.date), 'MM/DD/YYYY').split('/')
			selectedMonth = date[0].includes('0') ? date[0].substring(1) : date[0]
			selectedDay = date[1].includes('0') ? date[1].substring(1) : date[1]
			selectedYear = date[2]
		}

		const monthNames = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'
		]
		const months = []
		for (let i = 1; i <= monthNames.length; i++) {
			months.push(
				<option value={i} key={i}>
					{monthNames[i - 1]}
				</option>
			)
		}

		const days = []
		for (let i = 1; i <= 31; i++) {
			days.push(
				<option value={i} key={i}>
					{i}
				</option>
			)
		}

		const years = []
		const currYear = parseInt(
			new Date()
				.getYear()
				.toString()
				.substr(1)
		)
		for (let i = currYear; i <= currYear + 100; i++) {
			const year = i
			let fullYear
			if (year > 99) {
				fullYear = `20${year.toString().substr(1)}`
			} else {
				fullYear = `19${year}`
			}
			years.push(
				<option value={fullYear} key={fullYear}>
					{fullYear}
				</option>
			)
		}
		return (
			<Container px={0}>
				<Flex wrap>
					<Box w={[1, 1 / 3]}>
						<Select
							name="birthMonth"
							onChange={e => {
								this.handleSelectChange(e)
								this.props.onChange(e)
							}}
							value={this.state.birthMonth || selectedMonth}
						>
							{months}
						</Select>
					</Box>
					<StyledBox w={[1, 1 / 3]}>
						<Select
							name="birthDay"
							onChange={e => {
								this.handleSelectChange(e)
								this.props.onChange(e)
							}}
							value={this.state.birthDay || selectedDay}
						>
							{days}
						</Select>
					</StyledBox>
					<StyledBox w={[1, 1 / 3]}>
						<Select
							name="birthYear"
							onChange={e => {
								this.handleSelectChange(e)
								this.props.onChange(e)
							}}
							value={this.state.birthYear || selectedYear}
						>
							{years.reverse()}
						</Select>
					</StyledBox>
				</Flex>
			</Container>
		)
	}
}

export default DatePicker
