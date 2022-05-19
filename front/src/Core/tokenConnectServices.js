import store from '../../store'

const USER_TOKEN = store.state.token

const AuthStr = 'Bearer '.concat(USER_TOKEN);

export {AuthStr}
