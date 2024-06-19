// import qs from 'query-string';
// import { Products } from "@/types-db";

//const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

// interface Query {
//     size?: string;
//     isFeatured?: boolean;
//     cuisine?: string;
//     category?: string;
//     kitchen?: string;
// }

/*const getProducts = async (query: Query): Promise<Products[]> => {
    const url = qs.stringifyUrl(
        {
        url : URL,
        query:{
            size: query.size,
            isFeatured: query.isFeatured,
            cuisine: query.cuisine,
            category: query.category,
            kitchen: query.kitchen,
        }
        }
    );
    const res = await fetch(url);
    return res.json();
};*/

const getProducts=  ()   => {
    return  ([
        {
            id: "1",
            name: "Pepsi Pizza",
            price: 100,
            images: [{url: "/img/pizza.jpg"}],
            isFeatured: true,
            isArchived: false,
            category: "Pizza",
            size: "Large",
            kitchen: "veg",
            cuisine: "Thai",
            qty: 1,
        },
        {
            id: "2",
            name: "Chole Bhature",
            price: 80,
            images: [{url: "/img/choleBhature.jpg"}],
            isFeatured: true,
            isArchived: false,
            category: "Chole Bhature",
            size: "Medium",
            kitchen: "veg",
            cuisine: "Indian",
            qty: 1,
        },
        {
            id: "3",
            name: "Cheese Tomato",
            price: 140,
            images: [{url:"/img/cheestomato.jpg"}],
            isFeatured: true,
            isArchived: false,
            category: "lamda",
            size: "Small",
            kitchen: "veg",
            cuisine: "Bajaj Special",
            qty: 1,
        },
    ])
}

export default getProducts;