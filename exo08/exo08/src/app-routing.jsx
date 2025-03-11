import { createBrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import ContactForm from "./pages/ContactForm";
import ContactList from "./pages/ContactList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      
      { path: "/", element: <ContactList /> },
      { path: "/add", element: <ContactForm /> },
      { path: "/edit/:contactId?", element: <ContactForm /> },
      { path: "/delete/:contactId?", element: <ContactForm /> }
    ]
  }
]);

export default router;
