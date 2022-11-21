import React, {JSXElementConstructor} from 'react'

export type PassedChildrenComponentProps = {
    SmallBoxArrayComponent: JSXElementConstructor<any>
    MediumBoxArrayComponent: JSXElementConstructor<any>
    LargeBoxArrayComponent: JSXElementConstructor<any>
}

const PassedChildrenComponent: React.FC<PassedChildrenComponentProps> = (props) => {
    const {SmallBoxArrayComponent, MediumBoxArrayComponent, LargeBoxArrayComponent} = props
    return (
        <div>
            <SmallBoxArrayComponent />
            <MediumBoxArrayComponent />
            <LargeBoxArrayComponent />
        </div>
    )
}

export default PassedChildrenComponent