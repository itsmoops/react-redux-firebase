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

class Login extends React.Component {
    state = {
        email: undefined,
        password: undefined
    }
    componentDidMount() {
        document.title = "Login"
    }
    handleInputChange = (e) => {
        const type = e.target.type
        const value = e.target.value
        this.setState({[type]: value})
    }
    onClickSubmit = (e) => {
        e.preventDefault();
        this.props.actions.userLogin({email: this.state.email, password: this.state.password})
    }
    render() {
        return (
            <FlexContainer>
                <Header size="large">Login</Header>
                <Form size="big">
                    <Form.Field>
                        <Input transparent type="email" placeholder='Email' onChange={this.handleInputChange}/>
                    </Form.Field>
                    <Form.Field>
                        <Input transparent type="password" placeholder='Password' onChange={this.handleInputChange}/>
                    </Form.Field>
                    <Button type='submit' size="big" className="float-right" onClick={this.onClickSubmit}>Login</Button>
                </Form>
            </FlexContainer>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {user: state.user}
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
