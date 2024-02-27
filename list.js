const List = ({schoollistData,name,label,handlechange}) => {
    return (
        <>
        <label for={label}>{label}</label>
        <select id={label} name={name} onChange = {name==="school_name" ? handlechange:()=>{}}>
            { schoollistData.length>0 && schoollistData?.map((val)=>{
                return <option>{name==="school_name"? val.school_name:val.dbn}</option>
            })}
        </select>
        </>

    )
}

export default List;