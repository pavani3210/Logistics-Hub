import * as React from 'react';
import '../index.css';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, MenuItem } from "@mui/material";
import Box from '@mui/material/Box';
import Navbar from './Navbar';

function Orders() {
    const [showPopup, setShowPopup] = React.useState(false);
    const [orderId, setOrderId] = React.useState("");
    const [customer, setCustomer] = React.useState("");
        const [itemName, setItemName] = React.useState("");
        const [itemWeight, setItemWeight] = React.useState("");
        const [packageDimensions, setPackageDimensions] = React.useState("");
        const [carrierLogo, setCarrierLogo] = React.useState("");
        const [carrierName, setCarrierName] = React.useState("");
        const [price, setPrice] = React.useState("");
        const [dateOrdered, setDateOrdered] = React.useState("");
        const [destination, setDestination] = React.useState("");
        const [sampleData, setSampleData] = React.useState([
            {
                orderId: "1234",
                customer: "John Doe",
                item: {
                    name: "Laptop",
                    weight: "2kg"
                },
                package: {
                    dimensions: "20x20x10cm"
                },
                carrier: {
                    logo: "fedex.svg",
                    name: "FedEx"
                },
                price: "$50",
                trackButton: <Button onClick={() => handleTrackButtonClick("1234", "John Doe", "Laptop", "2kg", "20x20x10cm", "FedEx")}>Track</Button>,
                dateOrdered: "2022-01-01",
                location: "New York, NY",
                destination: "Los Angeles, CA"
            },
            {
                orderId: "5678",
                customer: "Jane Smith",
                item: {
                    name: "Smartphone",
                    weight: "0.5kg"
                },
                package: {
                    dimensions: "15x10x5cm"
                },
                carrier: {
                    logo: "ups.svg",
                    name: "UPS"
                },
                price: "$20",
                trackButton: <Button onClick={() => handleTrackButtonClick("5678", "Jane Smith", "Smartphone", "0.5kg", "15x10x5cm", "UPS")}>Track</Button>,
                dateOrdered: "2022-01-02",
                location: "San Francisco, CA",
                destination: "New York, NY"
            },
            {
                orderId: "9012",
                customer: "Bob Johnson",
                item: {
                    name: "Headphones",
                    weight: "0.2kg"
                },
                package: {
                    dimensions: "10x10x5cm"
                },
                carrier: {
                    logo: "fedex.svg",
                    name: "FedEx"
                },
                price: "$10",
                trackButton: <Button onClick={() => handleTrackButtonClick("9012", "Bob Johnson", "Headphones", "0.2kg", "10x10x5cm", "FedEx")}>Track</Button>,
                dateOrdered: "2022-01-03",
                location: "Chicago, IL",
                destination: "San Francisco, CA"
            }
        ]);
        const [searchTerm, setSearchTerm] = React.useState("");
        const [currentOrder, setCurrentOrder] = React.useState(null);
        const [showMapPopup, setShowMapPopup] = React.useState(false);

        const handleCreateLabelClick = () => {
            setShowPopup(true);
        };

        const handlePopupClose = () => {
            setShowPopup(false);
        };

        const handleAddToTableClick = () => {
            const logo = carrierName === "UPS" ? "ups.svg" : "fedex.svg";
            const newData = {
                orderId,
                customer,
                item: {
                    name: itemName,
                    weight: itemWeight
                },
                package: {
                    dimensions: packageDimensions
                },
                carrier: {
                    logo,
                    name: carrierName
                },
                price,
                trackButton: <Button onClick={() => handleTrackButtonClick(orderId, customer, itemName, itemWeight, packageDimensions, carrierName)}>Track</Button>,
                dateOrdered,
                location: "",
                destination
            };
            setSampleData([...sampleData, newData]);
            setShowPopup(false);
        };

        const handleSearchTermChange = (event) => {
            setSearchTerm(event.target.value);
        };

        const handleTrackButtonClick = (orderId, customer, itemName, itemWeight, packageDimensions, carrierName) => {
            setCurrentOrder({ orderId, customer, itemName, itemWeight, packageDimensions, carrierName });
            setShowMapPopup(true);
        };

        const handleMapPopupClose = () => {
            setCurrentOrder(null);
            setShowMapPopup(false);
        };

        const filteredData = sampleData.filter((data) => {
            const searchRegex = new RegExp(searchTerm, "i");
            return searchRegex.test(data.orderId) || searchRegex.test(data.customer) || searchRegex.test(data.item.name) || searchRegex.test(data.carrier.name);
        });

        return (
            <div style={{width: "100%"}}>
                <Navbar 
                    tab={"orders"}
                />
                <div className='main-body'>
                    <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
                        <h4>
                            {sampleData.length === 0 ? "No Orders yet. But you'll get one. Welcome. 🙏🏻" : "Welcome. 🙏🏻"}
                        </h4>
                        <Button onClick={handleCreateLabelClick}>
                            Manually create a label
                        </Button>
                        <TextField label="Search" value={searchTerm} onChange={handleSearchTermChange} style={{marginBottom: "16px"}} />
                        {filteredData.length > 0 && (
                            <TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell style={{border: "1px solid black", fontWeight: 600}}>OrderId</TableCell>
                                            <TableCell style={{border: "1px solid black", fontWeight: 600}}>Date Ordered</TableCell>
                                            <TableCell style={{border: "1px solid black", fontWeight: 600}}>Customer</TableCell>
                                            <TableCell style={{border: "1px solid black", fontWeight: 600}}>Item</TableCell>
                                            <TableCell style={{border: "1px solid black", fontWeight: 600}}>Package</TableCell>
                                            <TableCell style={{border: "1px solid black", fontWeight: 600}}>Carrier</TableCell>
                                            <TableCell style={{border: "1px solid black", fontWeight: 600}}>Price</TableCell>
                                            <TableCell style={{border: "1px solid black", fontWeight: 600}}>Destination</TableCell>
                                            <TableCell style={{border: "1px solid black", fontWeight: 600}}>Track</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {filteredData.map((data) => (
                                            <TableRow key={data.orderId}>
                                                <TableCell style={{border: "1px solid black"}}>{data.orderId}</TableCell>
                                                <TableCell style={{border: "1px solid black"}}>{data.dateOrdered}</TableCell>
                                                <TableCell style={{border: "1px solid black"}}>{data.customer}</TableCell>
                                                <TableCell style={{border: "1px solid black"}}>{data.item.name} ({data.item.weight})</TableCell>
                                                <TableCell style={{border: "1px solid black"}}>{data.package.dimensions}</TableCell>
                                                <TableCell style={{border: "1px solid black"}}>
                                                    <div style={{display:"flex", gap:"5px"}}>
                                                        <img src={data.carrier.logo} style={{width:"30px"}}  />
                                                        {data.carrier.name}
                                                    </div>
                                                </TableCell>
                                                <TableCell style={{border: "1px solid black"}}>{data.price}</TableCell>
                                                <TableCell style={{border: "1px solid black"}}>{data.destination}</TableCell>
                                                <TableCell style={{border: "1px solid black"}}>{data.trackButton}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        )}
                        {filteredData.length === 0 && (
                            <p>No matching orders found.</p>
                        )}
                    </div>
                </div>
                <Dialog open={showPopup} onClose={handlePopupClose}>
                    <DialogTitle>Create a new label</DialogTitle>
                    <DialogContent>
                        <TextField label="Order ID" value={orderId} onChange={(e) => setOrderId(e.target.value)} fullWidth margin="normal" />
                        <TextField label="Date Ordered" value={dateOrdered} onChange={(e) => setDateOrdered(e.target.value)} fullWidth margin="normal" />
                        <TextField label="Customer" value={customer} onChange={(e) => setCustomer(e.target.value)} fullWidth margin="normal" />
                        <TextField label="Item Name" value={itemName} onChange={(e) => setItemName(e.target.value)} fullWidth margin="normal" />
                        <TextField label="Item Weight" value={itemWeight} onChange={(e) => setItemWeight(e.target.value)} fullWidth margin="normal" />
                        <TextField label="Package Dimensions" value={packageDimensions} onChange={(e) => setPackageDimensions(e.target.value)} fullWidth margin="normal" />
                        <TextField select label="Carrier Name" value={carrierName} onChange={(e) => setCarrierName(e.target.value)} fullWidth margin="normal">
                            <MenuItem value="UPS">UPS</MenuItem>
                            <MenuItem value="FedEx">FedEx</MenuItem>
                        </TextField>
                        <TextField label="Price" value={price} onChange={(e) => setPrice(e.target.value)} fullWidth margin="normal" />
                        <TextField label="Destination" value={destination} onChange={(e) => setDestination(e.target.value)} fullWidth margin="normal" />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handlePopupClose}>Cancel</Button>
                        <Button onClick={handleAddToTableClick}>Add to table</Button>
                    </DialogActions>
                </Dialog>
                <Dialog open={showMapPopup} onClose={handleMapPopupClose} fullWidth maxWidth="md" maxHeight="md">
                    <DialogTitle>Track Order</DialogTitle>
                    <DialogContent>
                        {currentOrder && (
                            <iframe
                                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBLD3HWQnIC_vkojQ6XAdenFaMG8H6bc2c&q=New+York+City`}
                                width="100%"
                                height="400"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        )}
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleMapPopupClose}>Close</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }

    export default Orders;
