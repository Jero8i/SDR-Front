import { Button } from "@mui/material";

interface EmailLoginProps {
  goBack: () => void;
}

const EmailLogin: React.FC<EmailLoginProps> = ({ goBack }) => {
  return (
    <>
      <h2> Email Login </h2>
      <Button variant="contained" color="primary" onClick={goBack}>
        Volver
      </Button>
    </>
  );
};

export default EmailLogin;
