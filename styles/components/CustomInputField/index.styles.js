import { makeStyles } from "@mui/styles";

const customInputStyles = makeStyles((theme) => ({
    inputLabelNoShrink: {
      textTransform: "uppercase",
      fontSize: "12px",
      lineHeight: "16.39px",
      letterSpacing: "-0.004em",
      fontWeight: '500',
      transform: "translate(2px, -25px) scale(1)",
    },
    root: {
      marginTop: 20,
      borderRadius: 7,
      "& .MuiInputBase-root": {
        background: "#fff"
      },
      "& .MuiFormLabel-root": {
        color: "#5b6a7e",
      },
    },
    notchedOutline: {
      borderWidth: "2px",
      boxShadow: "none",
      borderColor: "#7e7e7e",
    },
  }));

export default customInputStyles