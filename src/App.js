import "./App.css";
import MainContainer from "./components/ui/MainContainer";
import Home from "./pages/home/Home";
import NotificationProvider from "./shared/context/notification-context";

function App() {
  return (
    <MainContainer>
      <NotificationProvider>
        <Home />
      </NotificationProvider>
    </MainContainer>
  );
}

export default App;
