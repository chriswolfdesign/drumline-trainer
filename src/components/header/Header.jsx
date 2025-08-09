import DialogTitle from "@mui/material/DialogTitle";

const TITLE = "DRUMLINE TRAINER";

const STYLE = {
  textAlign: "center",
  fontSize: "48px",
  fontWeight: "bold",
  textDecoration: "underline",
};

function Header() {
  return <DialogTitle sx={STYLE}>{TITLE}</DialogTitle>;
}

export default Header;
