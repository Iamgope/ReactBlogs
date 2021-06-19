import Navbar from "./Navbar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  logo: {
    maxWidth: 180,
  },
}));
const Header = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
    </>
  );
};
export default Header;
