
import { Routes, Route } from 'react-router-dom';
import { Home } from '../Home/Home';
import { Login } from '../Login/Login';
import { Register } from '../Register/Register';
import { Profile } from '../Profile/Profile';
import { Gallery } from '../Gallery/Gallery';
import { Information } from '../Information/information';
import { LoginWorker } from '../WorkerLogin/WorkerLogin';
import { MyDates } from '../MyDates/MyDates';
import { AllCustomers } from '../AllCustomers/AllCustomers';
import { AllAppointments } from '../AllAppointments/AllAppointments';
import { Appointments } from '../Appointments/appointments';
export const Body = () => {
     return (
         <>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/register" element={<Register />}/>
                <Route path="/profile" element={<Profile />}/>
                <Route path="/gallery" element={<Gallery />}/>
                <Route path="/information" element={<Information />}/>
                <Route path="/loginworker" element={<LoginWorker />}/>
                <Route path="/mydates" element={<MyDates />}/>
                <Route path="/allcustomers" element={<AllCustomers />}/>
                <Route path="/allappointments" element={<AllAppointments />}/>
                <Route path="/appointments" element={<Appointments />}/>


            </Routes>
         </>
     )
}