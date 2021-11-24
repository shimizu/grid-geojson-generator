import React, { memo } from 'react';


//カード類
import CardContent from '@mui/material/CardContent';

//タイポブラフィ
import Typography from '@mui/material/Typography';


//フォームコントローラー
import FormControl from '@mui/material/FormControl';

//セレクター

import TextField from '@mui/material/TextField';


export default memo((props) => {
    const { defaultValue, setValue } = props;

    const onChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                CellSize
            </Typography>
            <FormControl sx={{ width: '10ch' }} variant="filled">
                <TextField
                    variant="filled"
                    id="outlined-number"
                    type="number"
                    label="km"
                    defaultValue={defaultValue}
                    inputProps={{ min: "0.1", max: "100", step: "0.1" }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={onChange}
                />
            </FormControl>
        </CardContent>
    )
})


