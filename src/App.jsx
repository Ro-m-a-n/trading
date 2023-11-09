import { BigInvest } from "./components/bigInvest/bigInvest";
import { ContactUs } from "./components/contactUs/contactUs";
import { GetStart } from "./components/getStart/getStart";
import { NavBar } from "./components/navBar/navBar";
import { Questions } from "./components/questions/questions";
import { WelcomePage } from "./components/welcomePage/welcomePage";
import "./scss/main/main.css";
const App = () => {
  return (
    <>
      <NavBar />
      <WelcomePage />
      <GetStart />
      <BigInvest />
      <Questions />
      <ContactUs />
      {/* <Form />
      <Footer />
      <Rights /> */}
    </>
  );
};

export default App;
