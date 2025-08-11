import { useState } from "react";
import ExercisePlayer from "../exercise_player/ExercisePlayer";
import ExerciseViewer from "../exercise_viewer/ExerciseViewer";
import PdfDropdown from "../pdf_dropdown/PdfDropdown";
import TempoDropdown from "../tempo_dropdown/TempoDropdown";
import ExerciseDropdown from "../exercise_dropdown/ExerciseDropdown";

const DEFAULT_PDF = "exercises/eights/pdfs/eights_snare.pdf";
const DEFAULT_MP3 = "exercises/eights/mp3s/eights_100.wav";
const DEFAULT_TEMPO = "100";
const DEFAULT_INSTRUMENT = "snare";
const DEFAULT_EXERCISE = "eights";

function ExerciseManager() {
  const [currentPDF, setCurrentPDF] = useState(DEFAULT_PDF);
  const [currentMP3, setCurrentMP3] = useState(DEFAULT_MP3);
  const [currentTempo, setCurrentTempo] = useState(DEFAULT_TEMPO);
  const [currentInstrument, setCurrentInstrument] =
    useState(DEFAULT_INSTRUMENT);
  const [currentExercise, setCurrentExercise] = useState(DEFAULT_EXERCISE);

  function updateInstrument(instrument) {
    setCurrentInstrument(instrument);
    setCurrentPDF(
      `exercises/${currentExercise}/pdfs/${currentExercise}_${instrument}.pdf`
    );
  }

  function updateTempo(tempo) {
    setCurrentTempo(tempo);
    setCurrentMP3(
      `exercises/${currentExercise}/mp3s/${currentExercise}_${tempo}.wav`
    );
  }

  function updateExercise(exercise) {
    setCurrentExercise(exercise);
    setCurrentPDF(
      `exercises/${exercise}/pdfs/${exercise}_${currentInstrument}.pdf`
    );
    setCurrentMP3(`exercises/${exercise}/mp3s/${exercise}_${currentTempo}.wav`);
  }

  return (
    <>
      <ExerciseDropdown updateExercise={updateExercise} />
      <PdfDropdown updateInstrument={updateInstrument} />
      <TempoDropdown updateTempo={updateTempo} />
      <ExerciseViewer pdfLink={currentPDF} />
      <ExercisePlayer mp3Link={currentMP3} />
    </>
  );
}

export default ExerciseManager;
