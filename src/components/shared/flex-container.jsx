import {Grid} from 'semantic-ui-react'

class FlexContainer extends React.Component {
    render() {
        return (
            <Grid columns={3} className="max-height">
                <Grid.Row verticalAlign="middle" centered>
                    <Grid.Column textAlign="center">
                        {this.props.children}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default FlexContainer
