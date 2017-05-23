import { Link } from 'react-router-dom'

class Landing extends React.Component {
  render() {
    return (
      <div>
        <h1>Landing</h1>
        <Link to="/about">About</Link>
      </div>
    )
  }
}
export default Landing
