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

function PdfDropdown(props) {
  function instrumentChange(e) {
    props.updateInstrument(e.target.value);
  }

  return (
    <FormControl sx={DROPDOWN_STYLE}>
      <InputLabel
        sx={DROPDOWN_STYLE}
        variant="standard"
        htmlFor="uncontrolled-native"
      >
        Instrument
      </InputLabel>
      <NativeSelect
        defaultValue="snare"
        inputProps={{
          name: "instrument",
          id: "uncontrolled-native",
        }}
        sx={NATIVE_SELECT_STYLE}
        onChange={instrumentChange}
      >
        <option value="snare">Snare</option>
        <option value="quads">Quads</option>
        <option value="bass">Bass</option>
      </NativeSelect>
    </FormControl>
  );
}

export default PdfDropdown;
