/* @info <strong>Web only:</strong> This method should be invoked on the page that the auth popup gets redirected to on web, it'll ensure that authentication is completed properly
* On native this does nothing
* */
WebBrowser.maybeCompleteAuthSession();
/* @end */
const redirectUri = AuthSession.makeRedirectUri();

export default function App() {
    /* @info If the provider supports auto discovery then you can pass an issuer to the `useAutoDiscovery` hook to fetch the discovery document
  * */
    const discovery = AuthSession.useAutoDiscovery('https://demo.identityserver.io');
    /* @end */
    // Create and load an auth request
    const [request, result, promptAsync] = AuthSession.useAuthRequest(
        {
            clientId: 'native.code',
            /* @info After a user finishes authenticating, the server will redirect them to this URI
      * Learn more about <a href="../../linking/overview/">linking here</a>
      * */
            redirectUri,
            /* @end */
            scopes: ['openid', 'profile', 'email', 'offline_access'],
        },
        discovery
    );

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title="Login!" disabled={!request} onPress={() => promptAsync()} />
            {result && <Text>{JSON.stringify(result, null, 2)}</Text>}
        </View>
    );
}