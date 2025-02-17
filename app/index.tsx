import { Redirect } from "expo-router";
import { StatusBar } from "expo-status-bar";

const SignIn = () => {
  return (
    <>
      <Redirect href={"/(auth)/welcome"} />
      <StatusBar backgroundColor="#161622" style="light" />
    </>
  );
};

export default SignIn;
