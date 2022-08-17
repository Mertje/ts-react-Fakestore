import { useEffect, useState } from "react";
import FakeProductAPI from "../interface/FakeProductApi";

export default function useFetch(path: string = 'products') {
    const [data, setData] = useState<FakeProductAPI[]>()
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        fetch(`https://fakestoreapi.com/${path}`)
            .then(res => {
                if (!res.ok) throw Error('something went wrong')
                return res.json()
            })
            .then(resJson => {
                setData(resJson)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }, [path])

    return { data, loading }

}