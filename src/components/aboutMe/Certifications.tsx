export default function Certifications() {
    const certifications = [
        {
            title: "Responsive Web Design",
            url: "https://www.freecodecamp.org/certification/varJonathanR/responsive-web-design",
            src: "https://img.shields.io/badge/Responsive_Web_Design-0a0a23?style=for-the-badge&logo=Freecodecamp&logoColor=ffffff"
        },
        {
            title: "Responsive Web Developer",
            url: "https://legacy.devchallenges.io/certificates/jixYg9EIzMo2Zmj8emO3",
            src: "https://img.shields.io/badge/Responsive_Web_Developer-ffffff?style=for-the-badge&logo=Accenture&logoColor=d33a03"
        },
        {
            title: "JavaScripts Algorithms And Data Structures",
            url: "https://www.freecodecamp.org/certification/varJonathanR/javascript-algorithms-and-data-structures",
            src: "https://img.shields.io/badge/JavaScript_Algorithms_and_Data_Structures-0a0a23?style=for-the-badge&logo=Freecodecamp&logoColor=ffffff"
        },
        {
            title: "Front End Developmet Libraries",
            url: "https://www.freecodecamp.org/certification/varJonathanR/front-end-development-libraries",
            src: "https://img.shields.io/badge/Front_End_Development_Libraries-0a0a23?style=for-the-badge&logo=Freecodecamp&logoColor=ffffff"
        },
        {
            title: "Redis | RU101: Introduction to Redis Data Structures",
            url: "https://university.redis.com/certificates/b105f8f676774e6887971c2dc79a9ed9",
            src: "https://img.shields.io/badge/Redis_%7C_RU101%3A_Introduction_to_Redis_Data_Structures-DD0031?style=for-the-badge&logo=redis&logoColor=ffffff"
        },
        {
            title: "Front End Developer",
            url: "https://legacy.devchallenges.io/certificates/4sIdXFqwKwlbYQzU9Gnx",
            src: "https://img.shields.io/badge/Front_End_Developer-ffffff?style=for-the-badge&logo=Accenture&logoColor=d33a03"
        }
    ];

    return (
        <ul className="flex flex-wrap gap-2">
            {certifications.map((certification, i) => (
                <li key={i}>
                    <a href={certification.url} target="_blank" rel="noopener noreferrer">
                        <img src={certification.src} alt={certification.title}/>
                    </a>
                </li>
            ))}
        </ul>
    )
}
