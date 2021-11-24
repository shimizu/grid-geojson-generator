import React, {useState,  useEffect } from 'react';
import DeckGL from '@deck.gl/react';
import { StaticMap } from 'react-map-gl';
import * as turf from '@turf/turf'


import { createTheme, ThemeProvider  } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
//MUIテーマスタイル
const theme = createTheme({
    palette: {
        mode: 'dark',
    },
});


//UI
import Output from "./UI/Output";
import GridType from './UI/GridType';
import CellSize from './UI/CellSize';


//レイヤー
import { EditLayer } from "./Layers/EditLayer";
import { GridLayer } from "./Layers/Gridlayer";


// 背景マップに使用するMapboxのトークン設定
const MAPBOX_ACCESS_TOKEN = process.env.MAPBOX_ACCESS_TOKEN;

// 初期ビューポートの設定
const INITIAL_VIEW_STATE = {
    latitude: 35.73202612464274,
    longitude: 137.53268402693763,
    zoom: 7.5,
    minZoom:6
};

//selector options
const SELECTORS = [
    { label: "pointGrid", value:"pointGrid"},
    { label: "squareGrid", value: "squareGrid" },
    { label: "hexGrid", value: "hexGrid" },
    { label: "triangleGrid", value: "triangleGrid" }
]


function Map({ data }) {

    const [viwState, setViewState] = useState(INITIAL_VIEW_STATE);

    const [editGeojson, setEditGeojson] = useState({
        type: 'FeatureCollection',
        features: []
    });
    const [gridGeojson, setGridGeoJson] = useState({
        type: 'FeatureCollection',
        features: []
    });

    
    const [gridType, setGridType] = useState("pointGrid");
    const [gridCellSize, setGridCellSize] = useState(5);


    //girdデータを生成
    useEffect(()=>{
        const bbox = turf.bbox(editGeojson);
        const  grid = turf[gridType](bbox, gridCellSize);
        setGridGeoJson(()=>grid);
    }, [editGeojson, gridType, gridCellSize])


    return (
        <div>
            <DeckGL
                initialViewState={viwState}
                controller={true}
                layers={[
                    EditLayer({
                        editGeojson,
                        setEditGeojson,
                    }),
                    GridLayer({
                        gridGeojson,
                        gridCellSize
                    })
                ]}
            >
                <StaticMap
                    mapStyle="mapbox://styles/shimizu/cjophihsq4qye2snwwz0i2pfa"
                    mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
                />
            </DeckGL>
            <ThemeProvider theme={theme}>
                <Box
                    sx={{
                        position: "absolute",
                        top: 20,
                        left: 10
                    }}

                >
                    <Card
                        sx={{
                            display:"flex",
                            width: "100%"
                        }}
                        variant="outlined"
                    >
                        <GridType Selectors={SELECTORS} value={gridType} setValue={setGridType}/>
                        <CellSize defaultValue={gridCellSize} setValue={setGridCellSize}/>
                    </Card>
                </Box>
                <Box
                    sx={{
                        position: "absolute",
                        bottom: 20,
                        right: 10
                    }}
                >
                    <Output geojson={gridGeojson}/>
                </Box>


            </ThemeProvider>
        </div>
    );
}

export default Map;