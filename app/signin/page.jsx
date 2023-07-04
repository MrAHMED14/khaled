import SignInBtn from "@/components/global/SignInBtn";

const SignInPage = ({ searchParams: { callbackUrl } }) => {
  return <SignInBtn callbackUrl={callbackUrl || "/"} />;
};
export default SignInPage;
