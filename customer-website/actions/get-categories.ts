
import {Category} from "@/types-db";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

// const getCategories  = async  : Promise<Category[]> => {
const getCategories  =  () => {
    // const res = await fetch(URL) ; 
    return  ([
        {
            id: "1",
            billboardId: "test1",
            billboardLabel: "test1",
            name:"Pizza",
        },
        {
            id: "2",
            billboardId: "test2",
            billboardLabel: "test2",
            name:"Chole Bhature",
        },
        {
            id: "3",
            billboardId: "test3",
            billboardLabel: "test3",
            name:"Biryani",
        },
    ])
};

export default getCategories