
export function connect(serverUrl, appId) {
    console.log(serverUrl);
        console.log(appId);
    try {
        

        Moralis.start( { serverUrl, appId } );

    } catch (err){
        console.log(err.code);
        console.log(err);

        switch (err.code) {
            case Moralis.Error.INVALID_SESSION_TOKEN:
            Moralis.User.logOut();
            break;
        }
    }
    
}