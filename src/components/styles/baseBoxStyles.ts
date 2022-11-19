export type BaseBoxStylesParams = {
    backgroundColor: string
    boxSize: string
}

export const baseBoxStyles = (params: BaseBoxStylesParams) => {
    const {backgroundColor, boxSize} = params
    return {
        box: {
            backgroundColor,
            height: boxSize,
            width: boxSize
        }
    }
}