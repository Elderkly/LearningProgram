import {useState,useEffect} from 'react'
export default function Page1() {
    const [_time, setTime] = useState(10)
    //  方法1
    // useEffect(() => {
    //     const interval = setInterval(() => setTime(_time - 1),1000)
    //     return () => clearInterval(interval)
    // })
    //  方法2
    useEffect(() => {
        setTimeout(() => setTime(_time - 1),1000)
    })
    return (
        <div>{_time}</div>
    )
}