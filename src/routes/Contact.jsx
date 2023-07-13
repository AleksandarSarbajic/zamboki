import ScrollToTop from "../assets/customHooks/useScrollToTop";
import ContactPage from "../Componenets/Contact/ContactPage";
import ContactTable from "../Componenets/Contact/ContactTable";

export default function Contact() {
  return (
    <>
      <ContactTable />
      <ContactPage />
      <ScrollToTop />
    </>
  );
}
