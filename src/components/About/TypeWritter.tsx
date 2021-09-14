import Typewriter from 'typewriter-effect';
import React from 'react';

export function TypeWritter() {
    return (
        <Typewriter
        onInit={(typewriter) => {
            typewriter.typeString("Dog.")
                .pauseFor(2000)
                .deleteAll()
            typewriter.typeString("Cat.")
                .pauseFor(2000)
                .deleteAll()
            typewriter.typeString("Reptile.")
                .pauseFor(2000)
                .deleteAll()
            typewriter.typeString("Bird.")
                .pauseFor(2000)
                .deleteAll()
                .start();
        }}
        options={{
            autoStart: true,
            loop: true,
        }}
       />
    );
}












