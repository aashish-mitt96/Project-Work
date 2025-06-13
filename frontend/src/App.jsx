import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import OnboardingPage from "./pages/OnboardingPage";
import CallPage from "./pages/CallPage";
import ChatPage from "./pages/ChatPage";
import NotificationPage from "./pages/NotificationPage";
import toast, { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />

      <button onClick={() => toast.success("Hello World!")}> button</button>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route path="/call" element={<CallPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/notifications" element={<NotificationPage />} />
      </Routes>
    </div>
  );
};

export default App;
