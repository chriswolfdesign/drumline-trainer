import { useState } from "react";
import ExercisePlayer from "../exercise_player/ExercisePlayer";
import ExerciseViewer from "../exercise_viewer/ExerciseViewer";

const DEFAULT_PDF = "exercises/eights/pdfs/eights_snare.pdf";
const DEFAULT_MP3 = "exercises/eights/mp3s/eights_144.wav";

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
