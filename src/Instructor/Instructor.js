import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import Quiz from './Quiz';

const Instructor = () => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [domain, setDomain] = useState("");
    // const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/teach/teachpcs360', { email, phone, domain });
            // console.log(res)
            if (res && res.data.success) {
                toast.success(res.data.message);
                // navigate("/login-pcs");
            } else if (!res.data.success) {
                toast.error(res.data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    }
    return (
        <div className="hero bg-base-200 py-10">
            <div className="flex  gap-16">
                <div className="lg:text-left">
                    {/* <Quiz /> */}
                    <img src="https://t3.ftcdn.net/jpg/02/94/21/42/360_F_294214205_ZmptWrtSwORSWadAIHSWqwSa319XlQiB.jpg" className='rounded-lg w-[45rem]' alt="" />
                </div>

                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className='text-xl font-bold text-gray-600 '>Details</h1>
                    <form className="card-body" onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input type="phone" placeholder="Phone No" className="input input-bordered"
                                name="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)} required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Domain</span>
                            </label>
                            <select

                                name="domain"
                                value={domain}
                                onChange={(e) => setDomain(e.target.value)}
                                className="input input-bordered"
                            >
                                <option value="">Domain</option>
                                <option value="EILP MERN STACK DEVELOPER">MERN STACK DEVELOPER</option>
                                <option value="EILP JAVA FULL STACK DEVELOPER">JAVA FULL STACK DEVELOPER</option>
                                <option value="EILP DATA ANALYST">DATA ANALYST</option>
                                <option value="EILP SALESFORCE">SALESFORCE</option>
                                <option value="EILP PYTHON DEVELOPER">BUSINESS</option>

                            </select>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Contact</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Instructor
