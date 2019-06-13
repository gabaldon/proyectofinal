import React, {Component} from 'react';
//Cesium components
import Viewer from "cesium/Source/Widgets/Viewer/Viewer";
import SkyBox from "cesium/Source/Scene/SkyBox"
// import SkyAtmosphere from "cesium/Source/Scene/SkyAtmosphere"
// import Scene from "cesium/Source/Scene/Scene"
import Color from "cesium/Source/Core/Color"
// import CesiumPoints from "./CesiumPoints"
import Cartesian3 from "cesium/Source/Core/Cartesian3"
// import GeoJsonDataSource from "cesium/Source/DataSources/GeoJsonDataSource"
// import EntityCollection from "cesium/Source/DataSources/EntityCollection"
// import Data from '../../example.json'
// import BillboardCollection from "cesium/Source/Scene/BillboardCollection"
import PostServices from '../../service/post-services'
import ScreenSpaceEventHandler from 'cesium/Source/Core/ScreenSpaceEventHandler'
import Cesium from 'cesium/Source/Cesium'




class CesiumGlobe extends Component {
    state = {viewerLoaded : false}

    componentDidMount() {

        this.setState({
            viewerLoaded : true,
           
        });

        

        this.viewer = new Viewer(this.cesiumContainer, {
            animation : false,
            baseLayerPicker : true,
            fullscreenButton : false,
            useDepthPicking:true,
            geocoder : true,
            homeButton : false,
            infoBox : false,
            sceneModePicker : false,
            selectionIndicator : false,
            timeline : false,
            navigationHelpButton : false,
            scene3DOnly : true,
            skyBox: new SkyBox({
            show: false
            })
        })

        this.viewer.scene.backgroundColor = Color.SPRINGGREEN 
        this.viewer.scene.skyAtmosphere.show = false
        this.viewer.scene.globe.showGroundAtmosphere = true
        this.viewer.scene.moon.show = false
        this.viewer.scene.sun.show = false
    

    this.services = new PostServices()
        
    const postsPoints = this.services.getAllPosts().then(data =>{

       data.forEach ( post =>{
            var long = post.longitude
            var lat = post.latitude
            
        
        

        let entity = this.viewer.entities.add(
            { position : Cartesian3.fromDegrees(
                long,
                lat
                ),
            point : {
                show : true, // default
                color : Color.BLUE, // default: WHITE
                pixelSize : 10, // default: 1
                outlineColor : Color.BLUE, // default: BLACK
                outlineWidth : 3 // default: 0
            },

            polyline :{
                
                width : 2
            }
        });

        // EVENT LISTENER

        this.viewer.scene.pickTranslucentDepth = true
        var handler = new ScreenSpaceEventHandler(this.viewer.scene.canvas);
        
        handler.setInputAction((movement)=> {
            var pickedObject = this.viewer.scene.pick(movement.endPosition)
            if (Cesium.defined(pickedObject) && (pickedObject.id === entity)) {
                entity.point.pixelSize = 5;
                console.log(pickedObject)
                let audioUrl = post.audio
                let audio = new Audio(audioUrl).play().then(res => console.log(res))
                
                console.log(audio)
               
                
            } else {
                
                entity.point.pixelSize = 5;
                
                
            }

       
        }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);

        //END EVENT LISTENER
        
    })
        


    })

    }

   

    render() {
        const containerStyle = {
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'fixed',
            display : "flex",
            alignItems : "stretch",
            };
    
            const widgetStyle = {
                flexGrow : 2
            }
    

        return(

            <div className="cesiumGlobeWrapper" style={containerStyle}>
                
                <div
                    className="cesiumWidget"
                    ref={ element => this.cesiumContainer = element }
                    style={widgetStyle}
                    >   
                </div>
            </div>
        )
    }

}
export default CesiumGlobe;