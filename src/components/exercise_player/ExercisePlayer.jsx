import ReactAudioPlayer from "react-audio-player";
import Card from "@mui/material/Card";

const CARD_STYLE = {
  textAlign: "center",
};

function ExercisePlayer(props) {
  return (
    <Card sx={CARD_STYLE}>
      <ReactAudioPlayer src={props.mp3Link} controls={true} />
    </Card>
  );
}

export default ExercisePlayer;
