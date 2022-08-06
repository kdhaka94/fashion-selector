import Cookies from "js-cookie";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  LoginPage,
  NotificationsPage,
  OSPPage,
  ProfilePage,
  TeamPerformancePage,
  WorkHoursPage,
} from "./pages";

function App() {
  // TODO : Remove the sketchy login mechanism
  !Cookies.get("auth_token") &&
    Cookies.set(
      "auth_token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMTc3ZDgzOTU3ODYyN2FhZDNlOWM5YyIsImlhdCI6MTY0NTcwNzE4MX0.wBhiGfT1-A3tsOGyQLCZSAHqCCUHbMNE1VtyClHxH7U"
    );
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<TeamPerformancePage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/work-hours" element={<WorkHoursPage />} />
          <Route path="/osp" element={<OSPPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
