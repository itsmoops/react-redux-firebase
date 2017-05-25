import {Link} from 'react-router-dom'
import {Grid, Header} from 'semantic-ui-react'

class Landing extends React.Component {
    render() {
        return (
            <Grid columns={3} height="100%" className="max-height">
                <Grid.Row verticalAlign="middle" centered>
                    <Grid.Column textAlign="center" className="center-column" width={6}>
                        <Header size="large">Landing</Header>
                        <Link to="/about">About</Link>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default Landing
