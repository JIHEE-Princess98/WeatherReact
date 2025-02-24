import Grid from "@mui/material/Grid2";
import {Skeleton} from "../layout/Layout.jsx";
import {darkTheme} from "../theme.js";
import LayerGroup from "ol/layer/Group.js";
import {XYZ} from 'ol/source.js';
import {Tile} from 'ol/layer.js';
import Feature from 'ol/Feature.js';
import Map from 'ol/Map.js';
import Point from 'ol/geom/Point.js';
import View from 'ol/View.js';
import {fromLonLat, get as getProjection} from "ol/proj.js";
import LayerSwitcher from "ol-layerswitcher";
import 'ol-layerswitcher/dist/ol-layerswitcher.css';
import 'ol/ol.css';
import {useEffect, useState} from "react";
import {Box} from "@mui/material";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";  // 스타일


function Maps() {
    const [mapObject, setMapObject] = useState(null);

    // 배경지도 레이어
    const darkMap = new Tile({
        title: '다크모드',
        displayInLayerSwitcher: false,
        visible: true,
        source: new XYZ({
            url: 'http://api.vworld.kr/req/wmts/1.0.0/F29065AD-8D42-3A88-8D7F-4DADA8D2E838/midnight/{z}/{y}/{x}.png'
        })
    });

    const baseMap = new Tile({
        title: '라이트모드',
        displayInLayerSwitcher: false,
        visible: false,
        source: new XYZ({
            url: 'http://api.vworld.kr/req/wmts/1.0.0/F29065AD-8D42-3A88-8D7F-4DADA8D2E838/Base/{z}/{y}/{x}.png'
        })
    });

// 배경지도 레이어
    const aerialMap = new Tile({
        title: '항공사진',
        visible: false,
        source: new XYZ({
            url: 'http://api.vworld.kr/req/wmts/1.0.0/F29065AD-8D42-3A88-8D7F-4DADA8D2E838/Satellite/{z}/{y}/{x}.jpeg'
        })
    });

    const hybridMap = new Tile({
        title: '하이브리드',
        visible: false,
        displayInLayerSwitcher: false,
        source: new XYZ({
            url: 'http://api.vworld.kr/req/wmts/1.0.0/F29065AD-8D42-3A88-8D7F-4DADA8D2E838/Hybrid/{z}/{y}/{x}.png'
        })
    });

    const aerialGroupMap = new LayerGroup({
        title: '지도 테마',
        baseLayer: true,
        openInLayerSwitcher: true,
        visible: false,
        layers: [aerialMap, hybridMap, darkMap, baseMap]
    });

    useEffect(() => {
        const map = new Map({
            target: 'map',
            view: new View({
                center: fromLonLat([127.8900000, 36.5028093]),
                zoom: 7.45,
            }),
        });

        map.addLayer(baseMap);
        map.addLayer(aerialGroupMap);

        map.addControl(
            new LayerSwitcher({
                tipLabel: "레이어범례",
                mouseover: true,
                collapsed: true,
            })
        );

        setMapObject({map});

        return () => {
            map.setTarget(null);
        }
    }, []);


    return (
        <div>
            <Grid container spacing={1}>
                <Grid size={{xs: 1, md: 0}}/>
                <Grid size={{xs: 10, md: 12}}>
                    <Skeleton height={800} sx={{
                        backgroundColor: darkTheme.palette.action.hover,
                    }}>
                        <Box id="map" value={mapObject} style={{height: 800, width: '100%', color:"black"}}></Box>
                    </Skeleton>
                </Grid>
                <Grid size={{xs: 1, md: 0}}/>
            </Grid>
        </div>
    )
}

export default Maps;