import {  exchangeCodeAsync,
    makeRedirectUri,
useAuthRequest,
    useAutoDiscovery,
} from 'expo-auth-session';

/* @info <strong>Web only:</strong> This method should be invoked on the page that the auth popup gets redirected to on web, it'll ensure that authentication is completed properly
* On native this does nothing
* */
WebBrowser.maybeCompleteAuthSession();
/* @end */

export default function App() {
    // Endpoint
    const discovery = useAutoDiscovery(
        'https://login.microsoftonline.com/<TENANT_ID>/v2.0',
    );
    const redirectUri = makeRedirectUri({
        /* @info The URI <code>[scheme]://</code> to be used
    * If undefined, the <code>scheme</code> property of your app.json or app.config.js will be used instead
    * */
        scheme: undefined,
        /* @end */
        /* @info Azure requires there to be a path in your redirect URI
    * */
        path: 'auth',
        /* @end */
    });
    const clientId = '<CLIENT_ID>';

    // We store the JWT in here
    const [token, setToken] = useState<string | null>(null);

    // Request
    const [request, , promptAsync] = useAuthRequest(
        {
            clientId,
            scopes: ['openid', 'profile', 'email', 'offline_access'],
            redirectUri,
        },
        discovery,
    );

    return (
        <SafeAreaView>
            <Button
                disabled={/* @info Disable the button until the request is loaded asynchronously*/!request/* @end */}
                title="Login"
                onPress={() => {
                    /* @info Prompt the user to authenticate in a user interaction or web browsers will block it
          * */
                    promptAsync().then((codeResponse) => {
                        /* @end */
                        if (request && codeResponse?.type === 'success' && discovery) {
                            /* @info Exchange the code to get the JWT
              * */
                            exchangeCodeAsync(
                                /* @end */
                                {
                                    clientId,
                                    code: codeResponse.params.code,
                                    /* @info Reuse the codeVerifier for PKCE */
                                    extraParams: request.codeVerifier
                                        ? { code_verifier: request.codeVerifier }
                                        : undefined,
                                    /* @end */
                                    redirectUri,
                                },
                                discovery,
                            ).then((res) => {
                                setToken(res.accessToken);
                            });
                        }
                    });
                }}
            />
            <Text>{token}</Text>
        </SafeAreaView>
    );
}