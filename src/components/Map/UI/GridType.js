import React, { memo } from 'react';


//カード類
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

//タイポブラフィ
import Typography from '@mui/material/Typography';


//フォームコントローラー
import FormControl from '@mui/material/FormControl';

//セレクター
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';



export default memo((props) => {
    const { Selectors, value, setValue } = props;

    const onChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Select Grid Type
            </Typography>
            <FormControl sx={{}} variant="filled">
                <Select
                    value={value}
                    onChange={onChange}                            >
                    {Selectors.map(d =>
                        <MenuItem key={d.label} value={d.value}>{d.label}</MenuItem>
                    )}
                </Select>
            </FormControl>
        </CardContent>
    )
})
