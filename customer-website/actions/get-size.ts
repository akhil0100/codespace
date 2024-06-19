
import {Size} from "@/types-db";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

// const getSizes  = async  : Promise<Size[]> => {
const getSizes  =  () => {
    // const res = await fetch(URL) ; 
    return  ([
        {
            id: "test1",
            value:"Small",
            name:"test1",
        },
        {
            id: "test2",
            value:"Medium",
            name:"test2",
        },
        {
            id: "test3",
            value:"Large",
            name:"test3",
        },
    ])
};

export default getSizes