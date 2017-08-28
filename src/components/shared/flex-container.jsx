import {Grid} from 'semantic-ui-react'

/**
 * FlexContainer - Semantic UI grid wrapper that builds a responsive flexbox
 */
class FlexContainer extends React.Component {
    render() {
        return (
            <Grid columns={3} verticalAlign='middle' className='max-height'>
                <Grid.Row centered>
                    <Grid.Column desktop={this.props.desktop} tablet={this.props.tablet} mobile={this.props.mobile} textAlign='center'>
                        {this.props.children}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

// default responsive column widths
FlexContainer.defaultProps = {
    desktop: 6,
    tablet: 10,
    mobile: 14
}

export default FlexContainer
