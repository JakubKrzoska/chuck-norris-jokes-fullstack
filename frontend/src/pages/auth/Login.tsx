import AuthLayout from '../../components/layout/AuthLayout';

export default function Login() {
  return (
    <AuthLayout 
      buttonText="LOG IN"
      linkText="Don't have an account?"
      linkLabel="Sign up here."
      linkPath="/signup"
    />
  );
}