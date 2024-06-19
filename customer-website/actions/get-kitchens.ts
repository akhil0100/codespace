
import {Kitchen} from "@/types-db";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/kitchens`;

// const getKitchen  = async  : Promise<Kitchen[]> => {
const getKitchens  =  () => {
    // const res = await fetch(URL) ;
    // return res.json(); 
    return  ([
        {
            id: "test1",
            value:"Kitchen",
            name:"test1",
        },
        {
            id: "test2",
            value:"Kitchen",
            name:"test2",
        },
        {
            id: "test3",
            value:"Kitchen",
            name:"test3",
        },
    ])
};

export default getKitchens