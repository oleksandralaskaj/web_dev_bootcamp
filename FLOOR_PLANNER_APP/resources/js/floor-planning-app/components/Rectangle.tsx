import React, {useEffect, useRef, useState} from "react";
import {Rect, Transformer} from "react-konva";

type Attrs = {
    id: string,
    x: number,
    y: number,
    height: number,
    width: number,
    fill: string,
    rotation: number
}

const makeid = () => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 6; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

const initialCoordinates = {
    x: 50,
    y: 50
}

export const Rectangle = ({providedAttrs, selectedNodeId, setSelectedId, updateCanvasData}) => {
    const [attrs, setAttrs] = useState<Attrs>({
        id: makeid(),
        x: initialCoordinates.x,
        y: initialCoordinates.y,
        height: providedAttrs.height,
        width: providedAttrs.width,
        rotation: providedAttrs.rotation,
        fill: providedAttrs.fill
    })

    const isSelected = () => {
        return selectedNodeId === attrs.id
    }

    const shapeRef = useRef<object>({});
    const trRef = useRef<object>({});

    useEffect(() => {
        if (isSelected()) {
            // we need to attach transformer manually
            trRef.current.nodes([shapeRef.current]);
            trRef.current.getLayer().batchDraw();
        }
    }, [selectedNodeId]);

    useEffect(() => {
        updateCanvasData(attrs)
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
                    setAttrs({
                        ...attrs,
                        x: Math.floor(e.target.x()),
                        y: Math.floor(e.target.y()),
                    });
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
                        x: Math.floor(node.x()),
                        y: Math.floor(node.y()),
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
                        return newBox;
                    }}
                />
            )}
        </>
    );
}
