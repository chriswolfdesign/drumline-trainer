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
        defaultValue="100"
        inputProps={{
          name: "tempo",
          id: "uncontrolled-native",
        }}
        sx={NATIVE_SELECT_STYLE}
        onChange={tempoChange}
      >
        <option value="100">100</option>
        <option value="108">108</option>
        <option value="120">120</option>
        <option value="132">132</option>
        <option value="144">144</option>
        <option value="152">152</option>
        <option value="160">160</option>
        <option value="172">172</option>
        <option value="180">180</option>
        <option value="192">192</option>
        <option value="200">200</option>
        <option value="208">208</option>
      </NativeSelect>
    </FormControl>
  );
}

export default TempoDropdown;
