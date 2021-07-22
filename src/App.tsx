import Amplify from "@aws-amplify/core";
import { withAuthenticator } from "@aws-amplify/ui-react";

import "@aws-amplify/ui/dist/style.css";

Amplify.Logger.LOG_LEVEL = "DEBUG";
Amplify.configure({
  Auth: {
    identityPoolId: "eu-west-1:00000000-0000-4000-0000-000000000000",
    region: "eu-west-1",
    userPoolId: "eu-west-1_XXXXXXXXX",
    userPoolWebClientId: "XXXXXXXXXXXXXXXXXXXXXXXXXX",
    mandatorySignIn: true,
  },
});

const WelcomePage = () => <p>Welcome!</p>;

export default withAuthenticator(WelcomePage);
