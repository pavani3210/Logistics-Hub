 import * as React from 'react';
import '../index.css';
import { Button, Divider} from "@mui/material";
import Box from '@mui/material/Box';
import Navbar from './Navbar';

function Orders() {
    

    return (
        <div style={{width: "100%"}}>
            <Navbar 
                tab={"orders"}
            />
            <div className='main-body'>
                <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
                    <h4>
                        No Orders yet. But you'll get one. Welcome. 🙏🏻
                    </h4>
                    <h3>🎉 Let's start shipping 🎉</h3>
                    <Button>
                        Manually create a label
                    </Button>
                </div>
            </div>      
        </div>
    );
}

export default Orders;