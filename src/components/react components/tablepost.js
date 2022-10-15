import axios from "axios"

export default function Tablepost(){
    const[datas,setDatas]=useState({id:"",})
    
    function postdata(){
        axios.post(('https://reqres.in/api/users'),
    }
    
    
    return(
        <>
        <input type={text} name={id} value={datas.value} onChange={(e)=>setDatas(...datas,e.target.value)}/>
        <input type={text} name={email} value={datas.value} onChange={(e)=>setDatas(...datas,e.target.value)}/>
        <input type={text} name={first_name} value={datas.value} onChange={(e)=>setDatas(...datas,e.target.value)}/>
        <input type={text} name={last_name} value={datas.value} onChange={(e)=>setDatas(...datas,e.target.value)}/>
        </>
    )
}