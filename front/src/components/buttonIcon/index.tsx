import { IProps } from '@/interfaces/interfaceProps';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Link from 'next/link';

export default function ButtonIcon(props: IProps) {
    const {children} = props
    const route = (props.href)
    return (
        <Link className="buttonPrimary iconContainer" href={`${route}`}>
            {children}
        </Link>
    )
}
