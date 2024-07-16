import React, {useEffect, useRef, useState} from "react";
import {Stage, Layer} from 'react-konva';
import styles from './Planner.module.scss'
import {Rectangle} from "../components/Rectangle";
import {GridLayer} from "../components/GridLayer";
import {DownloadImage} from "../components/DownloadImage";
import Konva from "konva";
import {json, useParams} from "react-router-dom";
import axios from "axios";
import {MakeId} from '../functions/MakeId'
import {SavePlan} from "../components/SavePlan";

export const GRIDCELLSIZE = 10;

export type Attrs = {
    id: string,
    x: number,
    y: number,
    height: number,
    width: number,
    fill: string,
    rotation: number,
}

const canvasSize = {
    height: window.innerHeight,
    width: window.innerWidth - 132,
}

const initialCoordinates = {
    x: 50,
    y: 50
}
export const Planner = () => {
    //project data
    const [projectData, setProjectData] = useState(null)

    // initial state of layer, based on fetched data or default set
    let initialShapeArray: Attrs[] = []

    const getProjectData = async (): Promise<void> => {
        try {
            const res = await axios.get(`/api/projects/${project_id}`)
            setProjectData(res.data)
            setShapeArray(JSON.parse(res.data.data))
        } catch (error) {
            console.log('error fetching project data', error)
        }
    }

    //in case project already exists
    const {project_id} = useParams();
    if (project_id) {
        useEffect(() => {
            getProjectData()
        }, []);
    } else {
        //in case project in new
        initialShapeArray = [
            {
                id: MakeId(),
                width: 100,
                height: 100,
                x: initialCoordinates.x,
                y: initialCoordinates.y,
                fill: 'red',
                rotation: 0,
            },
            {
                id: MakeId(),
                width: 100,
                height: 100,
                x: initialCoordinates.x + 200,
                y: initialCoordinates.y + 200,
                fill: 'green',
                rotation: 0,
            },
        ];
    }

    //state containing data all elements of canvas
    const [shapeArray, setShapeArray] = useState(initialShapeArray);

    const updateCanvasData = (newData: Attrs) => {
        const newShapeArray = shapeArray.slice();
        const indexOfShapeToBeUpdated = shapeArray.findIndex((oldData) => oldData.id === newData.id);
        newShapeArray[indexOfShapeToBeUpdated] = newData
        setShapeArray(newShapeArray)
    }

    //id of selected shape
    const [selectedId, setSelectedId] = useState<string | null>(null);

    //data for illustration of selected node
    const [selectedNodeAttrs, setSelectedNodeAttr] = useState<Attrs | null>()

    const updateSelectedNodeAttrs = () => {
        const shape = shapeArray?.find(item => item.id === selectedId)
        setSelectedNodeAttr(shape);
    }

    useEffect(() => {
        updateSelectedNodeAttrs()
    }, [selectedId, shapeArray]);


    // deselect when clicked on empty area
    const checkDeselect = (e) => {
        const clickedOnEmpty = e.target === e.target.getStage();
        if (clickedOnEmpty) {
            setSelectedId(null);
            setSelectedNodeAttr(null)
            console.log('clicked outside of shape')
        }
    };

    //downloading plan as picture
    const layerRef: React.RefObject<Konva.Layer> = useRef(null);
    const linkToDownloadImage = layerRef.current?.toDataURL()

    //everything, that goes to canvas
    const content = shapeArray?.map((shapeData, i) => {
        return (
            <Rectangle
                key={i}
                selectedNodeId={selectedId}
                setSelectedId={setSelectedId}
                providedAttrs={shapeData}
                updateCanvasData={updateCanvasData}
                setShapeArray={setShapeArray}
            />
        )
    })

    return (
        <div className={styles.container} id={'workspace'}>
            <div className={styles.info}>
                {selectedNodeAttrs ? <>
                        <p>id: {selectedNodeAttrs.id}</p>
                        <p>X: {selectedNodeAttrs.x}</p>
                        <p>Y: {selectedNodeAttrs.y}</p>
                        <p>H: {selectedNodeAttrs.height}</p>
                        <p>W: {selectedNodeAttrs.width}</p></> :
                    ''
                }
                {linkToDownloadImage && <DownloadImage href={linkToDownloadImage}/>}
                <SavePlan project_id={project_id} data={
                    {...projectData, data: shapeArray}
                }/>
            </div>
            <Stage height={canvasSize.height} width={canvasSize.width} onMouseDown={checkDeselect}>
                <Layer ref={layerRef}>
                    {content}
                </Layer>
                <GridLayer/>
            </Stage>
        </div>
    )
}
