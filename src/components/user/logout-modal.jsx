import { Button, Header, Icon, Modal } from 'semantic-ui-react'

class LogoutModal extends React.PureComponent {
    render() {
        return (
            <Modal open={this.props.open} basic size="small">
                <Header icon="warning" content="Logout" />
                <Modal.Content>
                    <p>Are you sure you want to log out?</p>
                </Modal.Content>
                <Modal.Actions>
                    <Button basic color="red" inverted>
                        <Icon name="remove" /> No
                    </Button>
                    <Button color="green" inverted>
                        <Icon name="checkmark" /> Yes
                    </Button>
                </Modal.Actions>
            </Modal>
        )
    }
}

export default LogoutModal
