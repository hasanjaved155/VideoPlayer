import React, { Component } from 'react';
import Lottie from 'react-lottie';
import animationData from '../images/SignUpAnimation.json';

export default class LottieControl extends Component {
    constructor(props) {
        super(props);
        this.state = { isStopped: false, isPaused: false };
    }

    render() {
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        };

        return (
            <div>
                <Lottie
                    options={defaultOptions}
                    style={{ marginLeft: "100px", height: "450px", width: "auto", objectFit: "cover" }}

                    isStopped={this.state.isStopped}
                    isPaused={this.state.isPaused}
                />
            </div>
        );
    }
}
