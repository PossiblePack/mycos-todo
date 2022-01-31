import { IconButton } from "@mui/material"
import { ReactNode, useCallback, useState } from "react"
import CircularProgress from '@mui/material/CircularProgress';

export interface TodoButtonProps {
    onAsyncHandleClick: () => Promise<any>
    children: ReactNode
}
function TodoAsyncButton({
    onAsyncHandleClick,
    children
}: TodoButtonProps) {

    const [loading, setLoading] = useState<boolean>(false)

    const handleClick = useCallback(async () => {
        try {
            setLoading(true)
            await onAsyncHandleClick()
        } finally{
            setLoading(false)
        }
        
    }, [onAsyncHandleClick])

    return (
        (<IconButton
            onClick={() => handleClick()}
                disabled={loading}
            >
                {loading ? <CircularProgress size={20} />: children}
        </IconButton>)
    )
}

export default TodoAsyncButton