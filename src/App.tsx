import Footer from "./components/layout/Footer.tsx";
import Header from "./components/layout/Header.tsx";
import AppRoutes from "./routes/AppRoutes.tsx";

console.log("Powered by: Mos\n===============");

function App() {
  return (
    <>
      <Header />
      <main >
      <AppRoutes />
      </main>

      <Footer />
    </>
  );
}
export default App;
