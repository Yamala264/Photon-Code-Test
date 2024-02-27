import { useEffect, useState } from 'react';
import List from './list';

const SchoolData = () => {
    const [schoollistData, setSchoolListData] = useState([]);
    const [selectedSchool, setSelectedSchool] = useState('');
    const [displayPara, setDisplayData] = useState([]);
    useEffect(() => {
         fetch("https://data.cityofnewyork.us/resource/s3k6-pzi2.json")
            .then((res) => res.json())
            .then((res) => setSchoolListData(res));
    })

    const handlechange = (e) => {
        setSelectedSchool(e.target.value);
        const copyschoollistData = [...schoollistData]
        let para = copyschoollistData.filter((val) => val.school_name === selectedSchool)
        setDisplayData(para);
    }

    return (
        <>
            <div>NYC High schools Information</div>
            <List
                schoollistData={schoollistData}
                name="schooldbn"
                label="dbn"
               />
            <List
                schoollistData={schoollistData}
                name="school_name"
                label="school_name"
                handlechange = {handlechange}/>
            {displayPara.length > 0 && <p>{displayPara[0].overview_paragraph}</p>}
        </>

    )
}

export default SchoolData;
