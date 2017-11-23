import styled from 'styled-components'
import { Container } from 'rebass'
import Select from './select'

const DatePicker = (props) => {
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
            <Select name="birthMonth" w={[1, 3 / 10]} mr={10}>
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
            </Select>
            <Select name="birthDay" w={[1, 3 / 10]} mr={10}>
                {days}
            </Select>
            <Select name="birthYear" w={[1, 3 / 10]} mr={10}>
                {years.reverse()}
            </Select>
        </Container>
    )
}

export default DatePicker
