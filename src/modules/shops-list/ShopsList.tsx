import { collection, getDocs } from "firebase/firestore"; 
import { useEffect, useState } from "react";
import { ShopItem } from "../../components";
import { Shop } from "../../interfaces/Shop";
import { db } from "../../firebase/firebase";

interface Props {
    shops: Shop[];
}

const ShopsList = ({ shops }: Props) => {
    return (
        <ul className="shops-list">
            {shops.map((shop) => (
                <ShopItem key={shop.id} {...shop} />
            ))}
        </ul>
    );
};

export default ShopsList;