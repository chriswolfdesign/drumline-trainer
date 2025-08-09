import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";

const CARD_CONTENT_STYLE = {
  textAlign: "center",
  height: "75vh",
};

const CARD_STYLE = {
  height: "75vh",
};

function ExerciseViewer(props) {
  return (
    <Card sx={CARD_STYLE}>
      <CardHeader>Exercise time</CardHeader>
      <CardContent sx={CARD_CONTENT_STYLE}>
        <object
          title="Exercise viewer"
          width="80%"
          height="100%"
          data={props.pdfLink}
        >
          Exercise
        </object>
      </CardContent>
    </Card>
  );
}

export default ExerciseViewer;
