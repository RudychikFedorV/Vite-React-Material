import "./App.css";
import AppMenu from "./components/AppMenu";
import Avatars from "./components/Avatars";
import BasicTextFields from "./components/BasicTextFields";
import Checkboxs from "./components/Checkboxs";
import ColorButton from "./components/ColorButton";
import ImageAvatars from "./components/ImageAvatars";
import Paginations from "./components/Paginations";

function App() {
  return (
    <div className="container">
      <AppMenu />
      <Paginations />
      <ColorButton />
      <Checkboxs />
      <Avatars />
      <BasicTextFields />
      <ImageAvatars />
    </div>
  );
}

export default App;
