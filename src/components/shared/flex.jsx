import styled from 'styled-components'
import { Flex } from 'rebass'

export default styled(Flex)`
	max-width: 100%;
	height: ${props => props.theme.screen.small && '100%'};
	padding-top: ${props => props.theme.navBarHeight};
`
