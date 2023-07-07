import { Button } from "@mui/material";

interface EmailRegisterProps {
  goBack: () => void;
}

const EmailRegister: React.FC<EmailRegisterProps> = ({ goBack }) => {
  return (
    <>
      <h2> Email Register </h2>
      <Button variant="contained" color="primary" onClick={goBack}>
        Volver
      </Button>
    </>
  );
};

export default EmailRegister;
