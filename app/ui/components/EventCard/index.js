import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarPlus } from "@fortawesome/free-solid-svg-icons";

import { _EventCard } from "./styles";
import Link from "next/link";

const EventCard = (props) => {

    const addEventToCalendar = (e) => {
        console.log('Adding event to device calendar')
    }

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Event",
        "name": "Midweek Manna",
        "location": {
            "@type": "Place",
            "name": "Westlink Church of Christ",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Wichita",
                "addressRegion": "KS",
                "postalCode": "67212",
                "streetAddress": "10025 W. Central Ave."
            }
        },
        "startDate": "2023-10-18T17:45",
        "endDate": "2023-10-18T20:00",
        "description": "Weekly fellowship dinner.",
        "image": {
            "@type": "ImageObject",
            "caption": "baked lasagna served on blue and white plate",
            "url": "https://www.westlink.church/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fpgcwy1w4oyl3%2F4UwIjAR0pkQnBh0QcALJy7%2F301ab6c8efc733524346fc8f37f99e0e%2Flasagna.jpg&w=1920&q=75"
        },
        "organizer": {
            "@type": "Organization",
            "name": "Westlink Church of Christ",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Wichita",
                "addressRegion": "KS",
                "postalCode": "67212",
                "streetAddress": "10025 W. Central Ave."
            }
        }
    }
    return (
        <_EventCard itemScope itemType="https://schema.org/Event">
            <figure>
                <Image
                    src="/images/lasagna.jpg"
                    fill
                    alt="prepared lasagna on blue and white plate"
                />
            </figure>
            <aside>
                <header>
                    <h3 itemProp="name">Midweek Manna</h3>
                    <time dateTime="2023-10-18T17:45" itemProp="startDate" content="2023-10-18T17:45">October 15th @ 5:45-8:00P</time>
                    <button onClick={addEventToCalendar} className="button" aria-label="add event to calendar">
                        <FontAwesomeIcon icon={faCalendarPlus} />
                    </button>
                </header>
                <p itemProp="about">
                    MidWeek Manna
                    October 18th - 5:45-6:45

                    October is pasta month! Join us for a home-cooked meal and time around the table with others on Wednesday. This week we're having <strong>Lasagna</strong>!
                </p>
                <footer>
                    <Link href="#" className="button">
                        Details
                    </Link>
                </footer>
            </aside>
        </_EventCard>
    )
}

export default EventCard;