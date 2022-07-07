import Create from "./components/Main/Create/Create.js";
import Dashboard from "./components/Main/Dashboard/Dashboard.js";
import DetailsOtherPet from "./components/Main/DetailsOtherPet/DetailsOtherPet.js";
import Header from "./components/Header/Header.js";
import Login from "./components/Main/Login/Login.js"
import MyPet from "./components/Main/MyPet/MyPet.js";
import MyPets from "./components/Main/MyPets/MyPets.js";
import OtherPet from "./components/Main/OtherPet/OtherPet.js";
import Register from "./components/Main/Register/Register.js";
import DeletePet from "./components/Main/DeletePet/DeletePet.js"
import DetailsMyPet from "./components/Main/DetailsMyPet/DetailsMyPet.js";


function App() {
  return (

    <div id="container">

      <Header />

      <main id="site-content">
        <section className="basic">
          <h1> Welcome to pet my pet!</h1>
        </section>
        <Login />
        <Register />
        <Create />
        <MyPet />
        <OtherPet />
        <DeletePet />
        <DetailsMyPet />
        <DetailsOtherPet />
        <Dashboard />
        <MyPets />
      </main>

    </div>
  );
}

export default App;
