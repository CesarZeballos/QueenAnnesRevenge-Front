
import { IProps } from "@/interfaces/interfaceProps";

export const ItemContainer = (props: IProps) => {
    const {children, className} = props

    return (
        <div className={`flex flex-col w-full h-full gap-2 items-center container ${className}`}>
            {children}
        </div>
    )
}

export default ItemContainer;