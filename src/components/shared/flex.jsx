import styled from 'styled-components'
import { Flex } from 'rebass'

export default styled(Flex)`
	height: ${props => props.theme.screen.small && '100%'};
	padding-top: ${props => props.theme.navBarHeight};
`
