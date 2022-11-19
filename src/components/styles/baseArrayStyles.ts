export type BaseArrayStylesParams = {
    flexDirectionEnum: FlexDirectionEnum
}

export enum FlexDirectionEnum {
    Row = 'Row',
    Column = 'Column'
}

export const baseArrayStyles = (params: BaseArrayStylesParams) => {
    const {flexDirectionEnum} = params
    return {
        flexContainer: {
            display: 'flex',
            flexDirection: flexDirectionEnum === FlexDirectionEnum.Row ? 'row' as 'row' : 'column' as 'column'
        }
    }
}