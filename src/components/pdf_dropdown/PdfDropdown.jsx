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
  function changePDF(e) {
    if (e.target.value === "snare") {
      props.setCurrentPDF("exercises/eights/pdfs/eights_snare.pdf");
    } else if (e.target.value === "bass") {
      props.setCurrentPDF("exercises/eights/pdfs/eights_bass.pdf");
    } else {
      props.setCurrentPDF("exercises/eights/pdfs/eights_quads.pdf");
    }
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
        onChange={changePDF}
      >
        <option value="snare">Snare</option>
        <option value="quads">Quads</option>
        <option value="bass">Bass</option>
      </NativeSelect>
    </FormControl>
  );
}

export default PdfDropdown;
