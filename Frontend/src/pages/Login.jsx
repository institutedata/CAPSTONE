/** @format */
import SignupDialog from '../components/Dialog/SignupDialog';
import LoginForm from '../components/Forms/LoginForm';
import { PageContainer } from '../themes/styles/default';
import { StyledPageArea } from '../themes/styles/default';

const Login = () => {
  return (
    <div>
      <PageContainer>
        <LoginForm />
        <StyledPageArea>
          <SignupDialog />
        </StyledPageArea>
      </PageContainer>
    </div>
  );
};

export default Login;
