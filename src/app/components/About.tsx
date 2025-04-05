"use client";

import React, { useState } from 'react';
import Terminal, { ColorMode, TerminalOutput } from 'react-terminal-ui';

export default function About() {
    const [terminalLineData] = useState([
        <><TerminalOutput>{`> 📍 Location: Dallas, TX`}</TerminalOutput><TerminalOutput>{`> 📧 Email: pratyusha.bachu@gmail.com`}</TerminalOutput><TerminalOutput>
            {`> 📄 Resume: `}
            <a className="underline text-blue-400" href="/files/PratyushaBachu.pdf" download>PratyushaBachu.pdf</a>
        </TerminalOutput><TerminalOutput>
                {`> 🎯 Interests: Web Development, Badminton, Cooking`}
            </TerminalOutput><TerminalOutput>
                {`> 🎓 Education: Master of Engineering in Computer Science`}
            </TerminalOutput></>
    ]);
    return (
        <section id="about" className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-3xl text-center">
                {/* <h2 className="text-4xl font-bold mb-6">About Me</h2>
                <p className="text-lg">
                    [Write a brief bio about yourself, your skills, and experience.]
                </p> */}
                <Terminal
                    name="About Me"
                    colorMode={ColorMode.Dark}
                    prompt="$"
                    onInput={(terminalInput) =>
                        console.log(`New terminal input received: '${terminalInput}'`)
                    }
                >
                    <div className="text-left">
                    {terminalLineData}
                    </div>
                    
                </Terminal>
            </div>
        </section>
    );
}