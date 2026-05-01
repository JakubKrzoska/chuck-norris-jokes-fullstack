import AuthLayout from '../../components/layout/AuthLayout';

export default function SignUp() {
  return (
    <AuthLayout 
      buttonText="CREATE ACCOUNT"
      linkText="Already have an account?"
      linkLabel="Log in here."
      linkPath="/login"
    />
  );
}