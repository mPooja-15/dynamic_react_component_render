import mockResponse from './dynamic-rendering/dynamic-rendering.mock';
import { createPage } from './dynamic-rendering';
import "./styles/index.scss"

function App() {
  return (
    <div className="my-3">
      <div className="ms-4 mb-3">
        <p className="">
        dynamic react component render 
        </p>
      </div>
      {createPage(mockResponse)}
    </div>
  );
}

export default App;
