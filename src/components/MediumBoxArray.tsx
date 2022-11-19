import React from 'react'
import { flatUIPalette } from '../dataset/flatUIPalette'
import BaseArray from './BaseArray'
import BaseBox from './BaseBox'
import { FlexDirectionEnum } from './styles/baseArrayStyles'

const eightColorData = flatUIPalette.slice(0, 7) 

const ColorDataMappedToElementArray = eightColorData.map((colorData: string, index: number) => {
    return (
        <BaseBox
            boxSize={'6em'}
            backgroundColor={colorData}
            key={index}
        >
            <></>
        </BaseBox>
    )
})

const MediumBoxArray: React.FC = () => {
    return (
        <BaseArray ChildArray={ColorDataMappedToElementArray} flexDirectionEnum={FlexDirectionEnum.Row} />
    )
}

export default MediumBoxArray