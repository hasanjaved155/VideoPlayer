import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Script = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [textColor, setTextColor] = useState('yellow'); // Initial text color
    const offerExpiry = calculateOfferExpiry(); // Calculate offer expiry time

    const [todayFestival, setTodayFestival] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTodayFestival = async () => {
            try {
                const res = await axios.get('/festival/today');
                setTodayFestival(res.data.festival);
            } catch (error) {
                console.error('Error fetching today\'s festival:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTodayFestival();
    }, []);

    // Calculate offer expiry time (end of the current day)
    function calculateOfferExpiry() {
        const now = new Date();
        const endOfDay = new Date(now);
        endOfDay.setHours(23, 59, 59, 999); // Set to end of the day (23:59:59.999)
        return endOfDay;
    }

    // Update current time every second
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    // Calculate remaining time until offer expiry
    function calculateTimeRemaining() {
        const timeDiff = offerExpiry - currentTime;
        if (timeDiff <= 0) {
            return { hours: 0, minutes: 0, seconds: 0 };
        }

        const totalSeconds = Math.floor(timeDiff / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const remainingSecondsAfterHours = totalSeconds % 3600;
        const minutes = Math.floor(remainingSecondsAfterHours / 60);
        const seconds = remainingSecondsAfterHours % 60;

        return { hours, minutes, seconds };
    }

    // Format remaining time as a string
    function formatTimeRemaining(hours, minutes, seconds) {
        const formattedHours = hours.toString().padStart(2, '0');
        const formattedMinutes = minutes.toString().padStart(2, '0');
        const formattedSeconds = seconds.toString().padStart(2, '0');
        return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    }

    // Toggle text color every second (blinking effect)
    useEffect(() => {
        const blinkIntervalId = setInterval(() => {
            setTextColor((prevColor) => (prevColor === 'yellow' ? 'green' : 'white'));
        }, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(blinkIntervalId);
    }, []);

    // Get remaining time
    const { hours, minutes, seconds } = calculateTimeRemaining();
    const timeRemaining = formatTimeRemaining(hours, minutes, seconds);

    return (
        <>
            {loading ? (
                <p className="text-gray-600">Loading...</p>
            ) : todayFestival ? (
                <div className='bg-gray-800 lg:flex justify-center'>

                    <div className={`text-${textColor}`}>

                        <div>
                            <h1>
                                Grab The {todayFestival.name} sale Offer
                            </h1>
                        </div>
                        <div className="text-sm flex justify-center">
                            <div className="px-2">Coupon Code:</div>
                            <div className="bg-yellow-400 text-gray-800 px-2 rounded">{todayFestival.couponCode}</div>
                        </div>

                    </div>
                    <div className='flex justify-around'>
                        <div className="mt-1 px-11 text-3xl text-white">{timeRemaining}</div>
                        <button className="btn btn-warning">Enroll Now</button>

                    </div>
                </div>
            ) : (
                <div className='bg-gray-800 lg:flex lg:justify-center'>

                    <div className={`text-${textColor}`}>

                        <div>
                            <h1>
                                Grab Frontend System Design offer here
                            </h1>
                        </div>
                        <div className="text-sm flex justify-center">
                            <div className="px-2">Coupon Code:</div>
                            <div className="bg-yellow-400 text-gray-800 px-2 rounded">PCS360</div>
                        </div>

                    </div>
                    <div className='flex justify-around'>
                        <div className="py-3 px-11 lg:text-2xl text-xl text-white">{timeRemaining}</div>
                        <Link to='/enrollnow'>
                            <button className="btn btn-warning">Enroll Now</button>
                        </Link>
                    </div>
                </div>
            )
            }
        </>
    );
};

export default Script;
