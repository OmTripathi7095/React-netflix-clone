import "./css/App.css";
import Home from "./Home";
import Section from "./Section";
import Faq from "./Faq";
import Form from "./Form";
import { data } from "./props";

const { title_1, title_2, title_3, para_1, para_2, para_3 } = data;
function App() {
  return (
    <>
      <Home />
      <Section
        title={title_1}
        para={para_1}
        img="./src/assets/video-1.m4v"
        isLeft={false}
        isVideo={true}
      />
      <Section
        title={title_2}
        para={para_2}
        img="./src/assets/Stranger-things.jpg"
        isLeft={true}
        isVideo={false}
      />
      <Section
        title={title_3}
        para={para_3}
        img="./src/assets/img-3.png"
        isLeft={false}
        isVideo={false}
      />
      <Faq />
      <div className="last">
        <Form />
      </div>
    </>
  );
}

export default App;
