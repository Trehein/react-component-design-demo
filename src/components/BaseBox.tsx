import React from 'react'
import { baseBoxStyles } from './styles/baseBoxStyles'

export type BaseBoxProps = {
    boxSize: string
    backgroundColor: string,
    children: React.ReactNode
}

const BaseBox: React.FC<BaseBoxProps> = (props: BaseBoxProps) => {
    const { backgroundColor, boxSize, children } = props
    const baseBoxClasses = baseBoxStyles({backgroundColor, boxSize})
    return (
        <div style={baseBoxClasses.box}>
            {children}
        </div>
    )
}

export default BaseBox