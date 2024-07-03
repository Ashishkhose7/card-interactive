/* eslint-disable */ 
import React, { useEffect, useRef, useState } from "react"
import successlogo from '../images/icon-complete.svg'
const Card = () => {
    const [name, setName] = useState('');
    const [cardnumber, setCardnumber] = useState('');
    const [cvv, setCvv] = useState('');
    const [mm, setMm] = useState('');
    const [yy, setYy] = useState('');
    const [nameerror, setNameerror] = useState("name");
    const [numbererror, setNumbererror] = useState("number");
    const [expiryerror, setExpiryerror] = useState("expiry");
    const [cvverror, setCvverror] = useState("cvv");
    const [confirm, setConfirm] = useState(false);

    useEffect(() => {
            let errclass = document.getElementsByClassName("error");
            for (const i of errclass) {
                i.classList.add("d-none")
            }
    }, [])
    
    
    const handlesubmit = (e) => {
        e.preventDefault();
        
        setNameerror("");
        setNumbererror("");
        setExpiryerror("");
        setCvverror("");
        document.getElementById('username').style.borderColor = "#ccc";
        document.getElementById('cardnumber').style.borderColor = "#ccc";
        document.getElementById('expirymm').style.borderColor = "#ccc";
        document.getElementById('expiryyy').style.borderColor = "#ccc";
        document.getElementById('cvc').style.borderColor = "#ccc";
        if(cardnumber.length){
            var cardno = /^([0-9]{4}?){3}([0-9]{4})$/;
            if(cardnumber.match(cardno)){
                setNumbererror("");
                document.getElementById('cardnumber').style.borderColor = "#ccc";
            }else{
                setNumbererror("Wrong format, numbers only");
                document.getElementById('cardnumber').style.borderColor = "red";
            }
        }

        if(name == null || !name.length){
            setNameerror("Can't be blank");
            document.getElementById('username').style.borderColor = "red";
            document.getElementsByClassName("error")[0].classList.remove("d-none");
        }
        if(cardnumber == '0000000000000000' || !cardnumber.length){
            setNumbererror("Can't be blank")
            document.getElementById('cardnumber').style.borderColor = "red";
            document.getElementsByClassName("error")[1].classList.remove("d-none");
        }
        if(mm == null || !mm.length){
            setExpiryerror("Can't be blank")
            document.getElementById('expirymm').style.borderColor = "red";
            document.getElementsByClassName("error")[2].classList.remove("d-none");
        }
        if(yy == null || !yy.length){
            setExpiryerror("Can't be blank")
            document.getElementById('expiryyy').style.borderColor = "red";
            document.getElementsByClassName("error")[2].classList.remove("d-none");
        }
        if(cvv == '000' || !cvv.length){
            setCvverror("Can't be blank")
            document.getElementById('cvc').style.borderColor = "red";
            document.getElementsByClassName("error")[3].classList.remove("d-none");
        }
        // if(nameerror != "Can't be blank" && numbererror != "Can't be blank" && expiryerror != "Can't be blank" && cvverror != "Can't be blank"){
        //     // setConfirm(true)
        //     console.log("No error", nameerror, numbererror, expiryerror, cvverror)
        // }
        if(nameerror.length == 0 && numbererror.length == 0 && expiryerror.length == 0 && cvverror.length==0){
            setConfirm(true);
        }
    }
    const handlecvv = (e) => {
        if(e.target.value.length>=3){
            if(e.target.value.length>=4){
                return
            }
            setCvv(e.target.value);
            setCvverror("");
            document.getElementById('cvc').style.borderColor = "#ccc";
            return
        }else{
            setCvv(e.target.value)
        }
    }
    const handleyy = (e) => {
        if(e.target.value.length>=2){
            if(e.target.value.length >= 3){
                return
            }
            setYy(e.target.value);
            setExpiryerror("");
            document.getElementById('expiryyy').style.borderColor = "#ccc";
            return
        }else{
            setYy(e.target.value)
        }
    }
    const handlemm = (e) => {
        if(e.target.value.length>=2){
            if(e.target.value.length >= 3){
                return
            }
            setMm(e.target.value);
            // setExpiryerror("");
            document.getElementById('expirymm').style.borderColor = "#ccc";
            return
        }else{
            setMm(e.target.value)
        }
    }
    const handlenumber = (e) => {
        if(e.target.value.length<17){
            setCardnumber(e.target.value)
            var cardno = /^([0-9]{4}?){3}([0-9]{4})$/;
            if(e.target.value.match(cardno)){
                setNumbererror("");
                document.getElementById('cardnumber').style.borderColor = "#ccc";
            }
        }else{
            setNumbererror("");
            document.getElementById('cardnumber').style.borderColor = "#ccc";

        }
    }
    const handlename = (e) => {
        if(e.target.value.length>4){
            setNameerror("")
            document.getElementById('username').style.borderColor = "#ccc";
        }
        setName(e.target.value)
    }

  return (
    <>
       <div className="container-fluid">
            <div className="row">
                <div className="main ">
                    <div className="card-details d-flex justify-content-between">
                        <div className="cards">
                            <div className="card">
                                <div className="card-design d-flex align-items-center">
                                    <span className="solid-circle"></span>
                                    <span className="empty-circle mx-2 border"></span>
                                </div>
                                <div className="card-number">{cardnumber.length>0?cardnumber:"0000 0000 0000 0000"}</div>
                                <div className="d-flex justify-content-between">
                                    <div className="card-name">{name.length>0?name:"JANE APPLESEED"}</div>
                                    <div className="card-expiry">{mm.length>0?mm:"00"}/{yy.length>0?yy:"00"}</div>
                                </div>
                            </div>
                            <div className="cardback mt-4 ms-5">
                                <div className="header mt-4 bg-dark"></div>
                                <div className="number mt-3 mx-auto"><span className="">{cvv.length>0?cvv:"000"}</span></div>
                                <div className="content mt-3 mx-auto">
                                    <span className="gray-bar1 me-2 d-inline-block"></span>
                                    <span className="gray-bar2 me-2 d-inline-block"></span>
                                    <span className="gray-bar3 me-2 d-inline-block"></span>
                                    <span className="gray-bar4 me-2 d-inline-block"></span>
                                </div>
                                <div className="content mt-2 mx-auto">
                                    <span className="gray-bar9 me-2 d-inline-block"></span>
                                    <span className="gray-bar10 me-2 d-inline-block"></span>
                                    <span className="gray-bar11 me-2 d-inline-block"></span>
                                    <span className="gray-bar12 me-2 d-inline-block"></span>
                                </div>
                                <div className="content mt-2 mx-auto">
                                    <span className="gray-bar5 me-2 d-inline-block"></span>
                                    <span className="gray-bar6 me-2 d-inline-block"></span>
                                    <span className="gray-bar7 me-2 d-inline-block"></span>
                                    <span className="gray-bar8 me-2 d-inline-block"></span>
                                </div>
                            </div>
                        </div>
                        <div className="form-container">
                            <form onSubmit={handlesubmit}>
                                {
                                    confirm ? 

                                    <div className="success text-center ">
                                        <div className="success-text">
                                            <img src={successlogo} alt="img" height={60} width={60} className="my-3"/>
                                            <h3 className="success-msg my-3 font-weight-bold">THANK YOU!</h3>
                                            <p className="mb-4">We've added your card details</p>
                                        </div>
                                    </div>
                                     
                                    : <div className="formmain">
                                    <div className="form-group">
                                        <label htmlFor="cardholder">Cardholder Name</label>
                                        <input type="text" name="name" id="username" placeholder="e.g. Jane Applessed" value={name} onChange={handlename}/>
                                        <div className="error">{nameerror}</div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="cardnumber">Card Number</label>
                                        <input type="text" id="cardnumber" name="cardnumber" placeholder="e.g. 1010 1010 1010 1010" value={cardnumber} onChange={handlenumber}/>
                                        <div className="error">{numbererror}</div>
                                    </div>
                                    <div className="exp-cvc">
                                        <div className="form-group">
                                            <label htmlFor="expiry">Exp. Date (MM/YY)</label>
                                            <span className="d-inline-block d-flex">
                                                <input className="me-2" type="text" id="expirymm" name="expiry"
                                                value={mm} placeholder="MM" onChange={handlemm}/>
                                                <input type="text" id="expiryyy" name="expiry" placeholder="YY"
                                                value={yy} onChange={handleyy}/>
                                            </span>
                                            <div className="error">{expiryerror}</div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="cvc">CVC</label>
                                            <input type="text" id="cvc" name="cvc" placeholder="e.g. 123" inputMode="numeric" value={cvv} onChange={handlecvv} />
                                            <div className="error">{cvverror}</div>
                                        </div>
                                    </div>
                                </div>
                                }
                                
                                <button type="submit">{confirm ? "Continue" : "Confirm"}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
};

export default Card;
