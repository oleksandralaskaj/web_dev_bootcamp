import React, {useEffect, useState} from "react";
import {Stage, Layer} from 'react-konva';
import styles from './Planner.module.scss'
import {Rectangle} from "../components/Rectangle";
import {GridLayer} from "../components/GridLayer";
import {TestPrintFunction} from "../components/TestPrintFunction";
import ReactDOMServer from 'react-dom/server';

export const GRIDCELLSIZE = 50;

type Attrs = {
    id: number,
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

export const Planner = () => {
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const [selectedNodeAttrs, setSelectedNodeAttr] = useState<Attrs | null>({
        id: 0,
        x: 0,
        y: 0,
        height: 0,
        width: 0,
        fill: '',
        rotation: 0,
    })

    const updateAttrs = (object: Attrs) => {
        setSelectedNodeAttr({
            id: object.id,
            x: Math.floor(object.x),
            y: Math.floor(object.y),
            height: Math.floor(object.height),
            width: Math.floor(object.width),
            fill: object.fill,
            rotation: object.rotation,
        });
    }

    const initialShapeArray: {width:number, height: number, fill: string, rotation:number, id: number}[] = [
        {
            id: 1,
            width: 100,
            height: 100,
            fill: 'blue',
            rotation: 0,
        },
        {
            id: 2,
            width: 1000,
            height: 100,
            fill: 'grey',
            rotation: 0,
        },
    ];

    const checkDeselect = (e) => {
        // deselect when clicked on empty area
        const clickedOnEmpty = e.target === e.target.getStage();
        if (clickedOnEmpty) {
            setSelectedId(null);
            setSelectedNodeAttr(null)
            console.log('clicked outside of shape')
        }
    };

    const [shapeArray, setShapeArray] = useState(initialShapeArray);

    const updateCanvasData = (newData) => {
        const newShapeArray = shapeArray.slice();
        const indexOfShapeToBeUpdated = shapeArray.findIndex((oldData) => oldData.id === newData.id);
            newShapeArray[indexOfShapeToBeUpdated] = newData
        setSelectedNodeAttr(newData)
        setShapeArray(newShapeArray)
    }

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

            </div>
            <Stage height={canvasSize.height} width={canvasSize.width} onMouseDown={checkDeselect}>
                <Layer>
                    {shapeArray.map((shapeData, i) => {
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
                    }
                </Layer>
                <GridLayer/>
            </Stage>
        </div>
    )
}
