import {
    Grid,
    Header,
    Form,
    Input,
    Checkbox,
    Button
} from 'semantic-ui-react'
import FlexContainer from '../shared/flex-container'

class Login extends React.Component {
    componentDidMount() {
        document.title = "Login"
    }
    render() {
        return (
            <FlexContainer>
                <Header size="large">Login</Header>
                <Form size="big">
                    <Form.Field>
                        <Input transparent type="email" placeholder='Email'/>
                    </Form.Field>
                    <Form.Field>
                        <Input transparent type="password" placeholder='Password'/>
                    </Form.Field>
                    <Button type='submit' size="big" className="float-right">Login</Button>
                </Form>
            </FlexContainer>
        )
    }
}

export default Login
