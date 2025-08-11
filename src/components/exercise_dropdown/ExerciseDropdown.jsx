import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import NativeSelect from "@mui/material/NativeSelect";

const NATIVE_SELECT_STYLE = {
  textAlign: "center",
  width: "100%",
};

const DROPDOWN_STYLE = {
  paddingLeft: "200px",
};

function ExerciseDropdown(props) {
  function exerciseChange(e) {
    props.updateExercise(e.target.value);
  }

  return (
    <FormControl sx={DROPDOWN_STYLE}>
      <InputLabel
        sx={DROPDOWN_STYLE}
        variant="standard"
        htmlFor="uncontrolled-native"
      >
        Exercise
      </InputLabel>
      <NativeSelect
        defaultValue="eights"
        inputProps={{
          name: "exercise",
          id: "uncontrolled-native",
        }}
        sx={NATIVE_SELECT_STYLE}
        onChange={exerciseChange}
      >
        <option value="eights">Eights</option>
        <option value="sixteenth_note_timing">Sixteenth Note Timing</option>
        <option value="triplet_timing">Triplet Timing</option>
        <option value="bucks">Bucks</option>
      </NativeSelect>
    </FormControl>
  );
}

export default ExerciseDropdown;
