import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const VerifyEmail = ()=>{
    const {token} = useParams();
    const [status, setStatus] = useState("Verifying...");
    const navigate = useNavigate()

    const verifyEmail = async()=>{
        try {
            const res = await axios.post(`http://localhost:8090/api/v1/verify-email`,{},{
                headers:{
                Authorization : `Bearer ${token}`
                }
            })
            if(res.data.success){
                setStatus("✅ Email Verified successfully!");
                setTimeout(()=>{
                    navigate("/login")
                },2000)
            }
        } catch (error) {
             console.log("Error in verify email : :",error.message);
            setStatus("❌ Verifcation failed. Please try again")
            
        }
    };

    useEffect(()=>{
        verifyEmail();
    },[token]);

    return(
        <div className="relative w-full h-190 bg-green-100 overflow-hidden">
            <div className="min-h-screen flex items-center justify-center">
                <div className="bg-white p-6 rounded-2xl shadow-md text-center w-[90] max-w-md">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">{status}</h2>
                </div>
            </div>
        </div>   
    )
}

export default VerifyEmail;

