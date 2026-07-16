import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageLoader from "../components/PageLoader";

function RootLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="app">
      <Header />
      <main className="app__main">
        {isLoading ? <PageLoader /> : <Outlet />}
      </main>
      <Footer />
    </div>
  );
}

export default RootLayout;
