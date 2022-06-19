import { connect } from '../services/moralis/connection.js'

export function useServer() {
    connect(process.env.SERVER_URL, process.env.SERVER_URL);
}