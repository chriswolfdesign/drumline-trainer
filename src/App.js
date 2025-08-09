import ExercisePlayer from "./components/exercise_player/ExercisePlayer";
import ExerciseViewer from "./components/exercise_viewer/ExerciseViewer";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <ExerciseViewer />
      <ExercisePlayer />
    </div>
  );
}

export default App;
