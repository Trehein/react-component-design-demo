import React from 'react'
import { flatUIPalette } from '../dataset/flatUIPalette'
import BaseArray from './BaseArray'
import BaseBox from './BaseBox'
import { FlexDirectionEnum } from './styles/baseArrayStyles'

const fourColorData = flatUIPalette.slice(0, 3) 

const ColorDataMappedToElementArray = fourColorData.map((colorData: string, index: number) => {
    return (
        <BaseBox
            boxSize={'9em'}
            backgroundColor={colorData}
            key={index}
        >
            <></>
        </BaseBox>
    )
})

const LargeBoxArray: React.FC = () => {
    return (
        <BaseArray ChildArray={ColorDataMappedToElementArray} flexDirectionEnum={FlexDirectionEnum.Row} />
    )
}

export default LargeBoxArray