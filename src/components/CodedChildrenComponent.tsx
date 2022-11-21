import React from 'react'
import SmallBoxArray from "./SmallBoxArray";
import MediumBoxArray from "./MediumBoxArray";
import LargeBoxArray from "./LargeBoxArray";

const CodedChildrenComponent: React.FC = () => {
    return (
        <div>
            <SmallBoxArray />
            <MediumBoxArray />
            <LargeBoxArray />
        </div>
    )
}

export default CodedChildrenComponent