import Grid from "@mui/material/Grid";
import {Skeleton} from "../layout/Layout.jsx";
import {darkTheme} from "../theme.js";
import LayerGroup from "ol/layer/Group.js";
import {XYZ} from 'ol/source.js';
import {Tile} from 'ol/layer.js';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import {fromLonLat} from "ol/proj.js";
import {Feature} from 'ol';
import {Point} from 'ol/geom';
import {Style, Icon} from 'ol/style';
import {Vector as VectorLayer} from 'ol/layer';
import {Vector as VectorSource} from 'ol/source';
import Overlay from 'ol/Overlay';
import LayerSwitcher from "ol-layerswitcher";
import 'ol-layerswitcher/dist/ol-layerswitcher.css';
import 'ol/ol.css';
import {useEffect, useState} from "react";
import {Box} from "@mui/material";

// icon
import onIcon from '../assets/images/onArrow.png';
import offIcon from '../assets/images/offArrow.png';

// data
import data from '../data.json';

function Maps() {
    const [mapObject, setMapObject] = useState(null);
    const [selectedFeature, setSelectedFeature] = useState(null);
    const [overlay, setOverlay] = useState(null);

    useEffect(() => {
        // 지도 생성
        const map = new Map({
            target: 'map', view: new View({
                center: fromLonLat([127.8900000, 36.5028093]), zoom: 7.45,
            }),
        });

        // 베이스 맵 추가
        const baseMap = new Tile({
            title: '라이트모드', visible: true, source: new XYZ({
                url: 'http://api.vworld.kr/req/wmts/1.0.0/F29065AD-8D42-3A88-8D7F-4DADA8D2E838/Base/{z}/{y}/{x}.png'
            })
        });

        map.addLayer(baseMap);

        // 마커 추가
        const vectorSource = new VectorSource();
        let firstFeature = null;

        data.forEach((location, index) => {
            const feature = new Feature({
                geometry: new Point(fromLonLat([location.ypos, location.xpos])),
                id: location.index,
                region: location.region
            });

            feature.setStyle(new Style({
                image: new Icon({
                    anchor: [0.5, 1], src: index === 0 ? onIcon : offIcon, scale: 0.09,
                })
            }));

            vectorSource.addFeature(feature);
            if (index === 0) firstFeature = feature;
        });

        const vectorLayer = new VectorLayer({
            source: vectorSource,
        });

        map.addLayer(vectorLayer);

        // 첫 번째 마커 선택
        setSelectedFeature(firstFeature);

        // 🔹 네모 박스(Overlay) 추가
        const popupElement = document.createElement('div');
        popupElement.id = 'marker-popup';
        popupElement.style.position = 'absolute';
        popupElement.style.background = 'white';
        popupElement.style.padding = '5px';
        popupElement.style.border = '1px solid black';
        popupElement.style.borderRadius = '5px';
        popupElement.style.fontSize = '12px';
        popupElement.style.fontWeight = 'bold';
        popupElement.style.boxShadow = '0px 2px 5px rgba(0,0,0,0.3)';
        popupElement.style.display = 'none'; // 기본적으로 숨김

        // 테이블 스타일 추가
        popupElement.innerHTML = `
    <table style="width: 100%; border-collapse: collapse;">
        <tr style="background: #f4f4f4; text-align: center;">
            <th style="border: 1px solid black; padding: 5px;">항목</th>
            <th style="border: 1px solid black; padding: 5px;">정보</th>
        </tr>
        <tr>
            <td style="border: 1px solid black; padding: 5px;">지역</td>
            <td id="popup-region" style="border: 1px solid black; padding: 5px;"></td>
        </tr>
        <tr>
            <td style="border: 1px solid black; padding: 5px;">온도</td>
            <td id="popup-xpos" style="border: 1px solid black; padding: 5px;"></td>
        </tr>
        <tr>
            <td style="border: 1px solid black; padding: 5px;">습도</td>
            <td id="popup-ypos" style="border: 1px solid black; padding: 5px;"></td>
        </tr>
                <tr>
            <td style="border: 1px solid black; padding: 5px;">풍향</td>
            <td id="popup-ypos" style="border: 1px solid black; padding: 5px;"></td>
        </tr>
    </table>
`;

        document.body.appendChild(popupElement);

        const overlayPopup = new Overlay({
            element: popupElement,
            positioning: 'bottom-center',
            offset: [0, -50] // 아이콘 위로 올리기
        });

        map.addOverlay(overlayPopup);
        setOverlay(overlayPopup);

        setMapObject({map});

        if (firstFeature) {
            const coordinate = firstFeature.getGeometry().getCoordinates();
            overlayPopup.setPosition(coordinate);

            // 테이블 데이터 채우기
            document.getElementById('popup-region').innerText = firstFeature.get('region');
            document.getElementById('popup-xpos').innerText = firstFeature.getGeometry().getCoordinates()[1].toFixed(6);
            document.getElementById('popup-ypos').innerText = firstFeature.getGeometry().getCoordinates()[0].toFixed(6);

            popupElement.style.display = 'block';
        }

        return () => {
            if (popupElement && popupElement.parentNode) {
                popupElement.parentNode.removeChild(popupElement);
            }
            map.setTarget(null);
        };


    }, []);

    useEffect(() => {
        if (!mapObject || !mapObject.map || !overlay) return;

        const map = mapObject.map;

        // 클릭 이벤트 리스너 추가
        const handleMapClick = (event) => {
            const feature = map.forEachFeatureAtPixel(event.pixel, function (feat) {
                return feat;
            });

            if (feature) {
                if (selectedFeature && selectedFeature !== feature) {
                    // 기존 선택된 마커를 offIcon으로 변경
                    selectedFeature.setStyle(new Style({
                        image: new Icon({
                            anchor: [0.5, 1], src: offIcon, scale: 0.09,
                        })
                    }));
                }

                // 새로 클릭한 마커를 onIcon으로 변경
                feature.setStyle(new Style({
                    image: new Icon({
                        anchor: [0.5, 1], src: onIcon, scale: 0.09,
                    })
                }));

                setSelectedFeature(feature); // 새로운 마커 선택

                // 🔹 네모 박스(Overlay) 업데이트
                const coordinate = feature.getGeometry().getCoordinates();
                overlay.setPosition(coordinate);

                document.getElementById('popup-region').innerText = feature.get('region');
                document.getElementById('popup-xpos').innerText = coordinate[1].toFixed(6);
                document.getElementById('popup-ypos').innerText = coordinate[0].toFixed(6);

                popupElement.style.display = 'block';
            }
        };

        map.on('click', handleMapClick);

        return () => {
            map.un('click', handleMapClick); // cleanup 이벤트
        };


    }, [mapObject, selectedFeature, overlay]);

    return (<div>
        <Grid container spacing={1}>
            <Grid item xs={1} md={0}/>
            <Grid item xs={10} md={12}>
                <Skeleton height={800} sx={{
                    backgroundColor: darkTheme.palette.action.hover,
                }}>
                    <Box id="map" value={mapObject} style={{height: 800, width: '100%', color: "black"}}></Box>
                </Skeleton>
            </Grid>
            <Grid item xs={1} md={0}/>
        </Grid>
    </div>);
}

export default Maps;
