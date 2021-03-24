import MasterPage from '../components/MasterPage'

import Login from '../components/Login'

const Home = (props) => {
    return (
        <MasterPage setToken = {props.setToken}/>
    )
}

export default Home