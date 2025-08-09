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

function TempoDropdown(props) {
  function tempoChange(e) {
    props.updateTempo(e.target.value);
  }

  return (
    <FormControl sx={DROPDOWN_STYLE}>
      <InputLabel
        sx={DROPDOWN_STYLE}
        variant="standard"
        htmlFor="uncontrolled-native"
      >
        Tempo
      </InputLabel>
      <NativeSelect
        defaultValue="144"
        inputProps={{
          name: "tempo",
          id: "uncontrolled-native",
        }}
        sx={NATIVE_SELECT_STYLE}
        onChange={tempoChange}
      >
        <option value="144">144</option>
        <option value="208">208</option>
      </NativeSelect>
    </FormControl>
  );
}

export default TempoDropdown;
