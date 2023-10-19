 import * as React from 'react';
import '../index.css';
import { Divider} from "@mui/material";
import Box from '@mui/material/Box';
import Navbar from './Navbar';

function Orders() {
    

    return (
        <div style={{width: "100%"}}>
            <Navbar 
                tab={"orders"}
            />
            <div className='main-body'>
                <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <h4>
                        No Orders yet. But you'll get one. Welcome ✨ 🎉
                    </h4>
                </div>
            </div>      
        </div>
    );
}

export default Orders;