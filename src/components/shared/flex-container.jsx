import {Grid, Segment} from 'semantic-ui-react'

class FlexContainer extends React.Component {
    render() {
        return (
            <Grid columns={3} className="max-height">
                <Grid.Row verticalAlign="middle" centered>
                    <Grid.Column computer={5} tablet={4} mobile={2}/>
                    <Grid.Column computer={6} tablet={8} mobile={12} textAlign="center">
                        {this.props.children}
                    </Grid.Column>
                    <Grid.Column computer={5} tablet={4} mobile={2}/>
                </Grid.Row>
            </Grid>
        )
    }
}

export default FlexContainer
