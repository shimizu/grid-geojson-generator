import { EditableGeoJsonLayer, DrawRectangleMode } from 'nebula.gl';

const selectedFeatureIndexes = [];

export function EditLayer(props) {
    const { editGeojson, setEditGeojson} = props;

    const editableLayer = new EditableGeoJsonLayer({
        id: 'edit-layer',
        data: editGeojson,
        filled: false,
        stroked: false,
        mode: DrawRectangleMode,
        selectedFeatureIndexes,
        onEdit: (d) => {
            const { updatedData } = d;
            if (updatedData.features.length > 1) {
                updatedData.features = [updatedData.features[1]];
            }
            setEditGeojson(v => updatedData);
        }
    });

    return editableLayer;
}
