import React from 'react'
import { baseArrayStyles, FlexDirectionEnum } from './styles/baseArrayStyles'

export type BaseArrayProps = {
    ChildArray: React.ReactNode[]
    flexDirectionEnum: FlexDirectionEnum
}

const BaseArray: React.FC<BaseArrayProps> = (props) => {
    const { ChildArray, flexDirectionEnum } = props
    const baseArrayClasses = baseArrayStyles({flexDirectionEnum})
    return (
        <div style={baseArrayClasses.flexContainer}>
            {ChildArray.map((Child: React.ReactNode) => {
                return Child
            })}
        </div>
    )
}

export default BaseArray