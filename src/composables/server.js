import { connect } from '../services/moralis/connection.js'

export function useServer(serverUrl, appId) {
    connect(serverUrl || import.meta.env.VITE_SERVER_URL, appId || import.meta.env.VITE_APP_ID);
}