import React, {useEffect, useRef, useState} from "react";
import {Stage, Layer} from 'react-konva';
import styles from './Planner.module.scss'
import {Rectangle} from "../components/Rectangle";
import {GridLayer} from "../components/GridLayer";
import {DownloadImage} from "../components/DownloadImage";
import Konva from "konva";

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
    const [selectedId, setSelectedId] = useState<string | null>(null);

    //data for illustration of selected node
    const [selectedNodeAttrs, setSelectedNodeAttr] = useState<Attrs | null>()

    const updateSelectedNodeAttrs = () => {
        const shape = shapeArray.find(item => item.id === selectedId)
        setSelectedNodeAttr(shape);
    }

    useEffect(() => {
        updateSelectedNodeAttrs()
    }, [selectedId]);

    const makeid = () => {
        let result = '';
        if (self.crypto.randomUUID) {
            result = self.crypto.randomUUID()
        } else {
            //dev mode purposes
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            for (let i = 0; i < 6; i++) {
                result += characters.charAt(Math.floor(Math.random() * characters.length));
            }
        }
        return result;
    }
    // deselect when clicked on empty area
    const checkDeselect = (e) => {
        const clickedOnEmpty = e.target === e.target.getStage();
        if (clickedOnEmpty) {
            setSelectedId(null);
            setSelectedNodeAttr(null)
            console.log('clicked outside of shape')
        }
    };
    const initialShapeArray: Attrs[] = [
        {
            id: makeid(),
            width: 100,
            height: 100,
            x: initialCoordinates.x,
            y: initialCoordinates.y,
            fill: 'blue',
            rotation: 0,
        },
        {
            id: makeid(),
            width: 1000,
            height: 100,
            x: initialCoordinates.x,
            y: initialCoordinates.y,
            fill: 'grey',
            rotation: 0,
        },
    ];

    //state containing data all elements of canvas
    const [shapeArray, setShapeArray] = useState(initialShapeArray);

    const updateCanvasData = (newData: Attrs) => {
        const newShapeArray = shapeArray.slice();
        const indexOfShapeToBeUpdated = shapeArray.findIndex((oldData) => oldData.id === newData.id);
        newShapeArray[indexOfShapeToBeUpdated] = newData
        setShapeArray(newShapeArray)
    }

    const content = shapeArray.map((shapeData, i) => {
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

    const layerRef: React.RefObject<Konva.Layer> = useRef(null);
    const linkToDownloadImage = layerRef.current?.toDataURL()

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
            </div>
            <Stage height={canvasSize.height} width={canvasSize.width} onMouseDown={checkDeselect}>
                <Layer ref={layerRef} >
                    {content}
                </Layer>
                <GridLayer/>
            </Stage>
        </div>
    )
}
