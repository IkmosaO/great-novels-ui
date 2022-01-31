// 1 import react
// 2 create a function (same as the name of your file)
// 3 return some JSX
// 4 export that function

import React, {useState, useEffect} from "react";
import axios from "axios";
import Title from "./Title";
import Input from "./Input";
import "./DisplayPage.css"
// import Input from "./Input";
// import Title from "./Title";

const DisplayPage = () => {


const [searchTerm, setSearchTerm] = useState('')
const [novels, setNovels] = useState([])
const [filteredNovels, setFilteredNovels] = useState([])

useEffect(() => {
    const getAllNovels = async () => {
        const fetchData = await axios.get(`http://localhost:1337/api/novels/`)
        setNovels(fetchData.data)
        console.log(searchTerm)
    }
    getAllNovels()
}, [])

useEffect(() => {
    setFilteredNovels(novels.filter(novel => {
        return  novel.title.toLowerCase().includes(searchTerm) || 
        novel.author.nameFirst.toLowerCase().includes(searchTerm) || 
        novel.author.nameLast.toLowerCase().includes(searchTerm)
    }))
}, [searchTerm, novels])

const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase())
}

    return (
        <div>
            <Title/>
            <Input
            handleSearchChange={handleSearchChange}/>
            {filteredNovels.map(novel => {
                return (
                    <div className="novelsAuthors"key={novel.id}> 
                        <p>
                            {novel.title} By {novel.author.nameFirst} {novel.author.nameLast}
                        </p>
                    </div>
                )
            })}
        </div>
    )
}

export default DisplayPage