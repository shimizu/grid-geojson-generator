import React, { memo } from 'react';


//カード類
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

//タイポブラフィ
import Typography from '@mui/material/Typography';


import TextField from '@mui/material/TextField';

export default memo((props) => {
    const { geojson } = props;


    if (!geojson) return null;
    const output = (geojson.features.length > 0) ? JSON.stringify(geojson, null, "\t") : "";

    return (
        <Card
            variant="outlined"
            sx={{
                width: 300,
                height: 206,
                marginBottom: 1,
            }}
        >
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    GeoJSON
                </Typography>
                <TextField
                    sx={{
                        width: "100%",
                        height: "200px"
                    }}
                    rows={5}
                    placeholder="ここにGeoJOSNが出力されます。"
                    multiline
                    value={output}
                />
            </CardContent>
        </Card>
    )
})
