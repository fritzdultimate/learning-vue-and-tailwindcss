import { connect } from '../services/moralis/connection.js'

export function useServer(serverUrl, appId) {
    connect(serverUrl, appId)
}