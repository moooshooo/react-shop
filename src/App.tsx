
import Footer from "./components/layout/footer.tsx";
import Header from "./components/layout/header.tsx";
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
