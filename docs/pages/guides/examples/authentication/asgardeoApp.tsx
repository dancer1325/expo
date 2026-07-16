
WebBrowser.maybeCompleteAuthSession();

const redirectUri = AuthSession.makeRedirectUri();

/* @info <strong>Client ID:</strong> This can be found on the protocol tab of Asgardeo Console */
const CLIENT_ID = "YOUR_CLIENT_ID";
/* @end */

export default function App() {

    /* @info <strong>Auto Discovery URL:</strong> This can be found on the info tab of Asgardeo Console
* Copy the link under `Issuer` */
    const discovery = AuthSession.useAutoDiscovery('https://api.asgardeo.io/t/<YOUR_ORG_NAME>/oauth2/token');
    /* @end */
    const [tokenResponse, setTokenResponse] = useState({});
    const [decodedIdToken, setDecodedIdToken] = useState({});

    const [request, result, promptAsync] = AuthSession.useAuthRequest(
        {
            redirectUri,
            clientId: CLIENT_ID,
            responseType: "code",
            scopes: ["openid", "profile", "email"]
        },
        discovery
    );

    const getAccessToken = () => {
        if (result?.params?.code) {
            /* @info <strong>Token Endpoint:</strong> This can be found on the info tab of Asgardeo Console
    * Copy the link under `Token` */
            fetch(
                /* @end */
                "https://api.asgardeo.io/t/iamapptesting/oauth2/token",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: `grant_type=authorization_code&code=${result?.params?.code}&redirect_uri=${redirectUri}&client_id=${CLIENT_ID}&code_verifier=${request?.codeVerifier}`
                }).then((response) => {
                return response.json();
            }).then((data) => {
                setTokenResponse(data);
                setDecodedIdToken(jwtDecode(data.id_token));
            }).catch((err) => {
                console.log(err);
            });
        }
    }

    useEffect(() => {
        (async function setResult() {
            if (result) {
                if (result.error) {
                    Alert.alert(
                        "Authentication error",
                        result.params.error_description || "something went wrong"
                    );
                    return;
                }
                if (result.type === "success") {
                    getAccessToken();
                }
            }
        })();
    }, [result]);


    return (
        <View style={styles.container}>
            <Button title="Login" disabled={!request} onPress={() => promptAsync()} />
            {decodedIdToken && <Text>Welcome {decodedIdToken.given_name || ""}!</Text>}
            {decodedIdToken && <Text>{decodedIdToken.email}</Text>}
            <View style={styles.accessTokenBlock}>
                decodedToken && <Text>Access Token: {tokenResponse.access_token}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    accessTokenBlock: {
        width: 300,
        height: 500,
        overflow: "scroll"
    }
});