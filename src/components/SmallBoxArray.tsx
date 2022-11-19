import React from 'react'
import { flatUIPalette } from '../dataset/flatUIPalette'
import BaseArray from './BaseArray'
import BaseBox from './BaseBox'
import { FlexDirectionEnum } from './styles/baseArrayStyles'

const sixteenColorData = flatUIPalette.slice(0, 15) 

const ColorDataMappedToElementArray = sixteenColorData.map((colorData: string, index: number) => {
    return (
        <BaseBox
            boxSize={'3em'}
            backgroundColor={colorData}
            key={index}
        >
            <></>
        </BaseBox>
    )
})

const SmallBoxArray: React.FC = () => {
    return (
        <BaseArray ChildArray={ColorDataMappedToElementArray} flexDirectionEnum={FlexDirectionEnum.Row} />
    )
}

export default SmallBoxArray