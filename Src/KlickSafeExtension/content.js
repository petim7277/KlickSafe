
const API_URL = "https://detectmaliciousmodel.onrender.com/predict/url";

const display = (pageName) => {

    return `
        <div class="NavCont">
            <div class="NavLogo">
<!--                <img src="Assets/safetyBadge.png" alt="A photo from the Assets folder">-->
                <h1>KlickSafe</h1>
            </div>
        </div>
        <div class="ResponseDisplay">
            <div class="ResponseBackground">
                <div class="ResponseText">
                    <h1>Site Blocked for Security Reasons</h1>
                    <p>For your security, access to this site has been blocked.<br>
                        KlickSafe has detected that this site may be malicious<br>
                        and could pose a risk to your device and personal data.</p>
                    <h1>Why was this site blocked?</h1>
                    <ul>
                        <li>It may contain malware or viruses.</li>
                        <li>It could be attempting to steal personal information (phishing).</li>
                        <li>It might host other types of harmful content.</li>
                    </ul>
                </div>
            </div>
            <div class="ResponseImg">
<!--                <img src="Assets/PhoneMockups.png" alt="Image of a mobile device">-->
<!--                <h1>KlickSafe</h1>-->
                <div class="Img">
<!--                    <img src="Assets/safetyBadge.png" alt="Safety Icon">-->
                </div>
            </div>
        </div>
    `;
};

const displayStyle = () => {
    return `
        body {
            background: linear-gradient(to top right, #74aeec, #cbfd7c, #FFF);
        }
        .NavLogo {
            display: flex;
            flex-direction: row;
            gap: 0.25rem;
            margin-top: -0.80rem;
        }
        .NavLogo img {
            background-color: greenyellow;
            border-color: greenyellow;
            border-radius: 15px;
            width: 2.3rem;
            height: 2.3rem;
            margin-top: 2rem;
            margin-left: 6rem;
        }
        .NavLogo h1 {
            margin-top: 2rem;
            font-family: "Gabriola", serif;
            font-size: 5rem;
            padding-top: 0.25rem;
        }
        .ResponseDisplay {
            display: flex;
            flex-direction: row;
        }
        .ResponseBackground {
            background: linear-gradient(to top right, #cbfd7c, #74aeec, #FFF);
            width: 40rem;
            height: 40rem;
            border-radius: 20px;
            margin-top: 3rem;
            margin-left: 1.80rem;
        }
        .ResponseText h1 {
            padding-top: 2.50rem;
            color: black;
            margin-left: 2rem;
            font-family: Verdana, serif;
            font-size: 1.39rem;
        }
        .ResponseText p {
            color: black;
            margin-left: 2rem;
            font-family: Verdana, serif;
            font-size: 1.25rem;
            width: 30rem;
        }
        .ResponseText li {
            color: black;
            margin-left: 2rem;
            font-family: Verdana, serif;
            font-size: 1.25rem;
        }
        .ResponseImg img {
            height: 40rem;
            width: 50rem;
        }
        .ResponseImg h1 {
            font-family: Gabriola, serif;
            margin-left: 22rem;
            margin-top: -29rem;
        }
        .Img img {
            height: 9rem;
            width: 9rem;
            position: absolute;
            margin-left: 20.40rem;
            margin-top: -1.25rem;
            background-color: greenyellow;
            border-radius: 3rem;
        }
    `;
};

const checkUrlSafety = async (url) => {
    try {
        const response = await fetch(`https://detectmaliciousmodel.onrender.com/predict/${url}`);
        const result = await response.json();

        if (result.prediction === 1 || result.detail === "undefined") {
            document.body.innerHTML = display();
            const styleElement = document.createElement('style');
            styleElement.innerHTML = displayStyle();
            document.head.appendChild(styleElement);
        }
    } catch (error) {
        console.log(error);
    }
};

window.onload = () => {
    const currentUrl = window.location.hostname;
    checkUrlSafety(currentUrl);
};
