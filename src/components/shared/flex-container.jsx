import {Grid, Segment} from 'semantic-ui-react'

class FlexContainer extends React.Component {
    constructor(props) {
        super(props)
        this.gutterSize = this.gutterSize.bind(this)
    }
    gutterSize(size) {
        return (16 - size) / 2
    }
    render() {
        const computerSize = (this.props.computer && parseInt(this.props.computer)) || 6
        const tabletSize = (this.props.tablet && parseInt(this.props.tablet)) || 10
        const mobileSize = (this.props.tablet && parseInt(this.props.tablet)) || 14
        return (
            <Grid columns={3} className="max-height">
                <Grid.Row verticalAlign="middle" centered>
                    <Grid.Column computer={this.gutterSize(computerSize)} tablet={this.gutterSize(tabletSize)} mobile={this.gutterSize(mobileSize)}/>
                    <Grid.Column computer={computerSize} tablet={tabletSize} mobile={mobileSize} textAlign="center">
                        {this.props.children}
                    </Grid.Column>
                    <Grid.Column computer={this.gutterSize(computerSize)} tablet={this.gutterSize(tabletSize)} mobile={this.gutterSize(mobileSize)}/>
                </Grid.Row>
            </Grid>
        )
    }
}

export default FlexContainer
