import Button from "@material-ui/core/Button";
import InstagramIcon from "@material-ui/icons/Instagram";
import { client_id, redirect_uri } from "../config";

const Login = () => {
  return (
    <Button
      variant="outlined"
      color="primary"
      size="large"
      style={{ borderColor: "white", color: "white" }}
      href={`https://www.instagram.com/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=user_profile,user_media&response_type=code`}
    >
      <InstagramIcon style={{ marginRight: "10px" }} />
      Login
    </Button>
  );
};

export default Login;
