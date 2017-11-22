import { Box } from 'grid-styled'
import Flex from '../shared/flex'

class About extends React.Component {
    componentWillMount() {
        document.title = 'About'
    }
    render() {
        return (
            <Flex>
                <Box w={[1, 2 / 3, 1 / 2]} px={20} m="auto">
                    <h1>About</h1>
                    <div>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </Box>
            </Flex>
        )
    }
}
export default About
