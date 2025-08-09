import { useState } from "react";
import ExercisePlayer from "../exercise_player/ExercisePlayer";
import ExerciseViewer from "../exercise_viewer/ExerciseViewer";

const DEFAULT_PDF = "exercises/example/example.pdf";
const DEFAULT_MP3 = "exercises/example/example.mp3";

function ExerciseManager() {
  const [currentPDF, setCurrentPDF] = useState(DEFAULT_PDF);
  const [currentMP3, setCurrentMP3] = useState(DEFAULT_MP3);
  return (
    <>
      <ExerciseViewer pdfLink={currentPDF} />
      <ExercisePlayer mp3Link={currentMP3} />
    </>
  );
}

export default ExerciseManager;
