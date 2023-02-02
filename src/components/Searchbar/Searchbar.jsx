import React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";


const Searchbar = ({products}) => {
  const cellphones = products


  return (
    <div style={{display:"flex",justifyContent:"flex-end"}}>
      <Stack spacing={2} sx={{ width: 300 , marginRight: 5,color:"#58117c"}}>
        <Autocomplete
          color="secondary"
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={cellphones.map((cellphone) => cellphone.model)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search"
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          )}
        />
      </Stack>
    </div>
  );
};

export default Searchbar;
