import AppLayout from "../components/AppLayout"
import RoutesContainer from "./RoutesContainer";


const AppContainer = () => {
  return (
    <>
      <AppLayout>
        <RoutesContainer />
      </AppLayout>
    </>
  );
};

export default AppContainer;