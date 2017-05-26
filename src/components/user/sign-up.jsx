import {
    Grid,
    Header,
    Form,
    Input,
    Checkbox,
    Button
} from 'semantic-ui-react'
import FlexContainer from '../shared/flex-container'

class SignUp extends React.Component {
    render() {
        return (
            <FlexContainer>
                <Header size="large">Sign Up</Header>
                <Form size="big">
                    <Form.Field>
                        <Input transparent type="email" placeholder='Email'/>
                    </Form.Field>
                    <Form.Field>
                        <Input transparent type="password" placeholder='Password'/>
                    </Form.Field>
                    <Form.Field>
                        <Checkbox label='I agree to the Terms and Conditions'/>
                    </Form.Field>
                    <Button type='submit' size="big" className="float-right">Sign Up</Button>
                </Form>
            </FlexContainer>
        )
    }
}

export default SignUp
