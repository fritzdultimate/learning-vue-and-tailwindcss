import { connect } from '../services/moralis/connection.js'

export function useServer(serverUrl, appId) {
    connect(import.meta.env.VITE_SERVER_URL, import.meta.env.VITE_APP_ID);
}

moralis-admin-cli watch-cloud-folder
--moralisApiKey L5miPKEuTafJ4St
--moralisApiSecret SRzXYiBxU8qncvf
--moralisSubdomain zqqlc9enecak.usemoralis.com
--autoSave 1
--moralisCloudfolder C:\Users\HP\OneDrive\Documents\moralis\cloud\spacearn