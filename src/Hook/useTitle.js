import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} - Tour Expert`;
    },[title])
}

export default useTitle;