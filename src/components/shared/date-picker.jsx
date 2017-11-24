import styled, { css } from 'styled-components'
import { Container, Flex, Box } from 'rebass'
import Select from './select'

const StyledBox = styled(Box)`
	${props => css`
		${props.theme.screen.small} {
			padding-left: 5px;
		}
	`};
`

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
            <Flex wrap>
                <Box w={[1, 1 / 3]}>
                    <Select name="birthMonth" onChange={props.onChange}>
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
                </Box>
                <StyledBox w={[1, 1 / 3]}>
                    <Select name="birthDay" onChange={props.onChange}>
                        {days}
                    </Select>
                </StyledBox>
                <StyledBox w={[1, 1 / 3]}>
                    <Select name="birthYear" onChange={props.onChange}>
                        {years.reverse()}
                    </Select>
                </StyledBox>
            </Flex>
        </Container>
    )
}

export default DatePicker
