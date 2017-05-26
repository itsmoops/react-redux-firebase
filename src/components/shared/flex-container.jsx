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
        const mobileSize = (this.props.mobile && parseInt(this.props.mobile)) || 14
        return (
            <Grid columns={3} className="max-height">
                <Grid.Row verticalAlign="middle" centered>
                    <Grid.Column computer={this.gutterSize(this.props.computer)} tablet={this.gutterSize(this.props.tablet)} mobile={this.gutterSize(this.props.mobile)}/>
                    <Grid.Column computer={this.props.computer} tablet={this.props.tablet} mobile={this.props.mobile} textAlign="center">
                        {this.props.children}
                    </Grid.Column>
                    <Grid.Column computer={this.gutterSize(this.props.computer)} tablet={this.gutterSize(this.props.tablet)} mobile={this.gutterSize(this.props.mobile)}/>
                </Grid.Row>
            </Grid>
        )
    }
}

FlexContainer.defaultProps = {
    computer: 6,
    tablet: 10,
    mobile: 14
}

export default FlexContainer
