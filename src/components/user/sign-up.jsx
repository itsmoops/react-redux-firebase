import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as userActions from '../../actions/user-actions'
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
    state = {
        email: undefined,
        password: undefined
    }
    handleInputChange = (e) => {
        const type = e.target.type
        const value = e.target.value
        this.setState({[type]: value})
    }
    onClickSubmit = (e) => {
        e.preventDefault();
        this.props.actions.userSignUp({email: this.state.email, password: this.state.password})
    }
    render() {
        return (
            <FlexContainer>
                <Header size="large">Sign Up</Header>
                <Form size="big">
                    <Form.Field>
                        <Input transparent type="email" placeholder='Email' onChange={this.handleInputChange}/>
                    </Form.Field>
                    <Form.Field>
                        <Input transparent type="password" placeholder='Password' onChange={this.handleInputChange}/>
                    </Form.Field>
                    <Form.Field>
                        <Checkbox label='I agree to the Terms and Conditions'/>
                    </Form.Field>
                    <Button type='submit' size="big" className="float-right" onClick={this.onClickSubmit}>Sign Up</Button>
                </Form>
            </FlexContainer>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        users: state.users // determined by our reducers/index.js file
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
