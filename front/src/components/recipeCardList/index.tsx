'use client'
import EditIcon from '@mui/icons-material/Edit';
import CancelIcon from '@mui/icons-material/Cancel';
import Link from 'next/link';
import { IRecipe } from '@/interfaces/interfacesRecipes';

export const RecipeCardList: React.FC<{data: IRecipe}> = ({data}): React.ReactNode => {
    const {id, name, nickname} = data
    return (
        <div key={id} className="flex flex-row items-center justify-between w-full">
            <h1 className="textBodyBold">{name}</h1>
            <h2 className="textBody w-full ml-2">{nickname}</h2>
            <Link href={`/recipes/${id}/edit`}>
                <EditIcon className='text-darkBrown' />
            </Link>
            <button><CancelIcon className='text-darkBrown'/></button>
        </div>
    )
}