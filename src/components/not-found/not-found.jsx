import { Box } from 'grid-styled'
import Flex from '../shared/flex'

class NotFound extends React.Component {
    componentWillMount() {
        document.title = 'Page Not Found'
    }
    render() {
        return (
            <Flex>
                <Box w={[1, 2 / 3, 1 / 2]} px={20} m="auto">
                    <h1>404</h1>
                    <h2>Page not found!</h2>
                </Box>
            </Flex>
        )
    }
}

export default NotFound
