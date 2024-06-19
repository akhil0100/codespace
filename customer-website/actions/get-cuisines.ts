
import {Cuisines} from "@/types-db";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/Cuisines`;

// const getCuisines  = async  : Promise<Size[]> => {
const getCuisines  =  () => {
    // const res = await fetch(URL) ; 
    return  ([
        {
            id: "test1",
            value:"test",
            name:"Indian",
        },
        {
            id: "test2",
            value:"Medium",
            name:"Thai",
        },
        {
            id: "test3",
            value:"Large",
            name:"Italian",
        },
    ])
};

export default getCuisines