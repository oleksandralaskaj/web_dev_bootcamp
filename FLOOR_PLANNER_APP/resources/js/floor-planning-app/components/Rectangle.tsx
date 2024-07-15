import React, {ReactNode, RefObject, useEffect, useRef, useState} from "react";
import {Rect, Transformer} from "react-konva";
import {GRIDCELLSIZE} from '../pages/Planner'
import {Box} from "konva/lib/shapes/Transformer";


type Attrs = {
    id: number,
    x: number,
    y: number,
    height: number,
    width: number,
    fill: string,
    rotation: number
}

const initialCoordinates = {
    x: 50,
    y: 50
}

const makeid = () => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 6; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

export const Rectangle = ({providedAttrs, selectedNodeId, setSelectedId, updateCanvasData, setShapeArray}) => {
    const [attrs, setAttrs] = useState<Attrs>({
        // id: makeid(),
        id: providedAttrs.id,
        x: initialCoordinates.x,
        y: initialCoordinates.y,
        height: providedAttrs.height,
        width: providedAttrs.width,
        rotation: providedAttrs.rotation,
        fill: providedAttrs.fill,
    })


    const isSelected = () => {
        return selectedNodeId === attrs.id
    }

    const shapeRef = useRef<HTMLCanvasElement | null>(null);
    const trRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        if (isSelected()) {
            // we need to attach transformer manually
            trRef.current.nodes([shapeRef.current]);
            trRef.current.getLayer().batchDraw();
        }
    }, [selectedNodeId]);

    useEffect(() => {
        updateCanvasData(attrs)
        console.log('new state of attrs.truefalse', attrs.truefalse)
    }, [attrs]);


    return (
        <>
            <Rect
                onMouseDown={() => {
                    setSelectedId(attrs.id)
                    updateCanvasData(attrs)
                }}
                ref={shapeRef}
                {...attrs}
                draggable
                onDragEnd={(e) => {
                    e.target.to({
                        x: Math.round(e.target.x() / GRIDCELLSIZE) * GRIDCELLSIZE,
                        y: Math.round(e.target.y() / GRIDCELLSIZE) * GRIDCELLSIZE,
                    })
                    setAttrs({
                        ...attrs,
                        x: Math.round(e.target.x() / GRIDCELLSIZE) * GRIDCELLSIZE,
                        y: Math.round(e.target.y() / GRIDCELLSIZE) * GRIDCELLSIZE,
                    })
                }}
                onTransformEnd={(e) => {
                    // transformer is changing scale of the node
                    // but in the memory we have only width and height
                    // to match the data better we will reset scale on transform end
                    const node = shapeRef.current;
                    const scaleX = node.scaleX();
                    const scaleY = node.scaleY();
                    // we will reset it back
                    node.scaleX(1);
                    node.scaleY(1);
                    setAttrs({
                        ...attrs,
                        // x: Math.floor(node.x()),
                        // y: Math.floor(node.y()),
                        // set minimal value
                        width: Math.max(5, Math.floor(node.width() * scaleX)),
                        height: Math.max(5, Math.floor(node.height() * scaleY)),
                        rotation: Math.floor(node.rotation() * scaleY)
                    })
                }
                }
            />
            {isSelected() && (
                <Transformer
                    ref={trRef}
                    flipEnabled={false}
                    // centeredScaling={true}
                    rotationSnaps={[0, 90, 180, 270]}
                    boundBoxFunc={(oldBox, newBox) => {
                        // sets minimum height and width of a node
                        if (Math.abs(newBox.width) < 10 || Math.abs(newBox.height) < 10) {
                            return oldBox;
                        }
                        const resizedBox:Box = newBox
                        resizedBox.height = Math.round(newBox.height / GRIDCELLSIZE) * GRIDCELLSIZE
                        resizedBox.width = Math.round(newBox.width / GRIDCELLSIZE) * GRIDCELLSIZE
                        newBox = resizedBox
                        console.log('new box', newBox)
                        return newBox;
                    }}
                />
            )}
        </>
    );
}
