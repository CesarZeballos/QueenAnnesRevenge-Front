import AddCircleIcon from '@mui/icons-material/AddCircle';

export default function ButtonIcon({"icon": icon, "text": text}: {"icon": string, "text": string}) {
    const newIcon = AddCircleIcon;

    return (
        <button className="buttonNotBg iconContainer">
            <AddCircleIcon />
            <p>{text}</p>
        </button>
    )
}
