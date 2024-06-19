"use client"

import useCarts from "@/hooks/use-carts";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const CartActionButton = () => {
    const [mounted , setMounted] =useState(false);

    const cart = useCarts();
    const router = useRouter();

    useEffect(() => {
        setMounted(true);
    },[]);

    if (!mounted) {
        return null;
    }
    
    
    return ( 
        <div className="ml-4 flex items-center justify-center gap-x-4">
            <Button className="rounded-full" onClick={()=> router.push("/cart")}>
                <span className="text-sm font-medium text-white ml-2">
                    {cart.items.length}
                </span>
            </Button>
        </div> );
}
 
export default CartActionButton;