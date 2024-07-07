import { IProps } from "@/interfaces/interfaceProps";

export const DashboardContainer = (props: IProps) => {
    const {children, className} = props

    return (
        <div className={`grid grid-cols-4 gap-x-8 ${className}`}>
            {children}
        </div>
    )
}

export default DashboardContainer;
