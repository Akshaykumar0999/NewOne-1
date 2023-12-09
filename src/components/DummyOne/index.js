import React from "react";
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import {CiCalendarDate} from 'react-icons/ci'
import {BsCurrencyDollar} from 'react-icons/bs'
import Sidenavbar from '../Sidenavbar'
import Header from "../Header";
import './index.css'

const DummyOne = () => {
    return(
        <div className="app-container">
            <Sidenavbar />
            <div className="Home-app-container">
                <Header />
                <div className="booking-details-container">
                    <div className='booking-header-container'>
                        <p className='booking-header-name'>View Bookings</p>
                        <p className='booking-header-des'>Dashboard / Bookings Details</p>
                    </div>
                    <div className="booking-details-card">
                        <div className="booking-inv-card">
                            <h1 className="booking-inv-class">Booking <span className="span-style">INV-2240</span></h1>
                            <button className="button-one">Awaiting</button>
                            <button className="button-two">pending</button>
                        </div>
                        <p className="inv-des"><CiCalendarDate size={30} />Date of service: 2022-06-19</p>
                        <p className="inv-des"><BsCurrencyDollar size={30} />Payment Method: Pay one service</p>
                        <div className="booking-sub-detials">
                            <div className="booking-details-card-one">
                                <div className="booking-table-card">
                                    <Table bordered hover>
                                        <thead> 
                                            <tr>
                                                <th>Service</th>
                                                <th>Price</th>
                                                <th>Discount</th>
                                                <th>New Amount</th>
                                                <th>Quantity</th>
                                                <th>Duration</th>
                                                <th>Sub Total(Including Tax)</th>
                                            </tr>
                                        </thead>
                                        <tbody className="table-header-card">
                                            <tr>
                                            <td>
                                                <div className="services-div">
                                                    <img className="product-img" src="https://picsum.photos/id/237/200/300" alt=""/>
                                                    <p>Kitchen Cleaning</p>
                                                </div>
                                            </td>
                                            <td>$100</td>
                                            <td>$10</td>
                                            <td>$90</td>
                                            <td>1</td>
                                            <td>60</td>
                                            <td>$90</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                                <div className="booking-details-card-two">
                                    <ul className="booling-ul-card">
                                        <li className="booking-li-item"><span>Total</span><span>$90</span></li>
                                        <li className="booking-li-item"><span>Tax Amount</span><span>0</span></li>
                                        <li className="booking-li-item"><span>service charge</span><span>$25</span></li>
                                        <li className="booking-li-item"><span>Promo Code</span><span>No data found</span></li>
                                        <li className="booking-total-li-item"><span>Payable Total</span><span>$115</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="full-details-of-booking">
                                <div className="Booking-status-card">
                                    <h1 className="b-status-header">Booking Status</h1>
                                    <Form.Select aria-label="Default select example">
                                        <option>Pending</option>
                                        <option>Awaiting</option>
                                        <option>Confirmed</option>
                                        <option>Started</option>
                                        <option>Rescheduled</option>
                                        <option>Cancelled</option>
                                        <option>Completed</option>
                                    </Form.Select>
                                    <button className="update-btn">Update Status</button>
                                </div>
                                <div className="Booking-status-card">
                                    <h1 className="b-status-header">Customer Details</h1>
                                    <ul className="b-status-ul-card">
                                        <li className="span-list-element">
                                            <span>Name</span><span className="s-span">Rahul</span>
                                        </li>
                                        <li className="span-list-element">
                                            <span>Contact Number</span><span className="s-span">88858585848</span>
                                        </li>
                                        <li className="span-list-element">
                                            <span>Email</span><span className="s-span">rahul@gmail.com</span>
                                        </li>
                                        <li className="span-list-element">
                                            <span>Address</span><span className="s-span">89-90-3/w, rahulnagar, rahulcity, 758585</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="Booking-status-card">
                                    <h1 className="b-status-header">Service Info</h1>
                                    <ul className="b-status-ul-card">
                                        <li className="span-list-element">
                                            <span>Start time:</span><span className="s-span">14:00:00</span>
                                        </li>
                                        <li className="span-list-element">
                                            <span>End time:</span><span className="s-span">15:00:00</span>
                                        </li>
                                        <li className="span-list-element">
                                            <span>Service Duration</span><span className="s-span">60 Minutes</span>
                                        </li>
                                        <li className="span-list-element">
                                            <span>Visiting Charge</span><span className="s-span">$25</span>
                                        </li>
                                        <li className="span-list-element">
                                            <span>Service Type</span><span className="s-span"><button className="s-span-button">At Doorstep</button></span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="Booking-status-card">
                                <h1 className="b-status-header">Provider Info</h1>
                                    <ul className="b-status-ul-card">
                                        <li className="span-list-element">
                                            <span>Provider</span><span className="s-span">Sameera</span>
                                        </li>
                                        <li className="span-list-element">
                                            <span>Company' Name</span><span className="s-span">World Clean PVt.Ltd</span>
                                        </li>
                                        <li className="span-list-element">
                                            <span>Email</span><span className="s-span">60</span>
                                        </li>
                                        <li className="span-list-element">
                                            <span>Phone No</span><span className="s-span">59595999499</span>
                                        </li>
                                        <li className="span-list-element">
                                            <span>Address</span><span className="s-span">Time Square Emire</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="two-cards">
                        <div className="cards">
                            <h1 className="b-status-header">Word Started Proof</h1>
                            <p>No Data Found</p>
                        </div>
                        <div className="cards">
                            <h1 className="b-status-header">Word Completed Proof</h1>
                            <p>No Data Found</p>
                        </div>
                    </div>
                    <div className="copiright-card">
                        <p className="copyright-des">Copyright © 2023 eDemand. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DummyOne