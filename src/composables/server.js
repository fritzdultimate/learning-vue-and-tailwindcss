import { connect } from '../services/moralis/connection.js'

export function useServer() {
    connect(import.meta.env.SERVER_URL, import.meta.env.SERVER_URL);
}