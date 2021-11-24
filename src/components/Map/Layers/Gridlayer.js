import { GeoJsonLayer } from '@deck.gl/layers';

export function GridLayer(props) {
    const { gridGeojson, gridCellSize } = props;

    const geojsonayer = new GeoJsonLayer({
        id: 'geojson-layer',
        data: gridGeojson,
        pickable: true,
        stroked: true,
        filled: true,
        extruded: false,
        pointType: 'circle',
        lineWidthScale: 1,
        lineWidthMinPixels: 1,
        pointRadiusScale: 40,
        getPointRadius: gridCellSize*10,
        getFillColor: [160, 160, 180, 200],
        getLineColor: [0, 0, 0, 255],
        getLineWidth: 1,
    });

    return geojsonayer;
}
