import Image from 'next/image';
import DefaultLayout from './ui/layouts/Default';
import ContactForm from './ui/components/ContactForm';
import RichText from './ui/components/RichText';
import PageHeader from './ui/components/PageHeader';
import CopyImage from './ui/components/CopyImage';
const P_COPY_1 = <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum lorem sit amet interdum fermentum. Vivamus et pellentesque eros. Pellentesque ac odio a tellus finibus tincidunt. Proin consectetur aliquet eleifend. Aenean et urnalectus. Phasellus luctus arcu vitae metus pretium posuere. Fusce nulla mi,euismod sed libero nec, faucibus maximus leo.</p>

const P_COPY_2 = <p>Integer leo velit, lobortis ut diam eget, porttitor consequat velit. Nullam vitae porttitor dui. Donec a leo aliquet, porttitor mauris sed, consequat libero. Nam dignissim urna ac risus mattis, ut pretium lacus tincidunt. Crascursus sed nisl eu mollis. Aenean vel nunc nisl. Donec pulvinar maximus velit, id faucibus metus pretium sit amet. Vestibulum felis odio, rutrum eu consectetur quis, sollicitudin sit amet erat.</p>

const P_COPY_ELEMENTS = <>
<h2>Heading Two</h2>
<h3>Heading Three</h3>
<h4>Heading Four</h4>
<h5>Heading Five</h5>
<h6>Heading Six</h6>
<p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum lorem sit
    amet interdum fermentum. Vivamus et pellentesque eros. Pellentesque ac odio a tellus
    finibus tincidunt. Proin consectetur aliquet eleifend. Aenean et urna lectus.
    Phasellus luctus arcu vitae metus pretium posuere. Fusce nulla mi, euismod sed
    libero nec, faucibus maximus leo. <a href="#">In paragraph link</a>
</p>
<ul>
    <li>List Item</li>
    <li>List Item</li>
    <li>List Item</li>
</ul>
<ol>
    <li>List Item</li>
    <li>List Item</li>
    <li>List Item</li>
</ol>
</>;
const Page = () => {
    return (
        <DefaultLayout>
            <PageHeader
                heading="Westlink Church of Christ"
                brief="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aenean."
            />
            <PageHeader
                heading="Westlink Church of Christ"
                brief="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aenean."
                image={true}
            />
            <CopyImage copy={P_COPY_1} variant={["left", "light"]} />
            <CopyImage copy={P_COPY_2} image={true} variant={["left", "dark"]} />
            
            <section className="events-list--fancy">
                <h2>Upcoming Events</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum lorem
                    sit amet interdum fermentum. Vivamus et pellentesque eros. Pellentesque ac odio
                    a tellus finibus tincidunt. Proin consectetur aliquet eleifend. Aenean et urna
                    lectus. Phasellus luctus arcu vitae metus pretium posuere. Fusce nulla mi,
                    euismod sed libero nec, faucibus maximus leo.
                </p>
                <section>
                    <h3>Focused Event Title</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum
                        lorem sit amet interdum fermentum. Vivamus et pellentesque eros.
                        Pellentesque ac odio a tellus finibus tincidunt. Proin consectetur aliquet
                        eleifend. Aenean et urna lectus. Phasellus luctus arcu vitae metus pretium
                        posuere. Fusce nulla mi, euismod sed libero nec, faucibus maximus leo.
                    </p>
                    <Image src="https://placekitten.com/720/720" alt="" width={720} height={720} />
                </section>
                <ul className="queue">
                    <li>
                        <h3>Unfocused Event Title</h3>
                        <div>
                            <time dateTime="2024-02-01T17:00:00.000Z">
                                Febuary 1st at <span>5:00PM</span>
                            </time>
                        </div>
                        <Image
                            src="https://placekitten.com/200/200"
                            alt=""
                            width={200}
                            height={200}
                        />
                    </li>
                    <li>
                        <h3>Unfocused Event Title 2</h3>
                        <div>
                            <time dateTime="2024-02-02T17:00:00.000Z">
                                Febuary 2nd at <span>5:00PM</span>
                            </time>
                        </div>
                        <Image
                            src="https://placekitten.com/200/200"
                            alt=""
                            width={200}
                            height={200}
                        />
                    </li>
                </ul>
            </section>
            <section className="copy-and-image--left--light">
                <Image src="https://placekitten.com/720/720" alt="" width={720} height={720} />
                <h2>Copy and Image Left</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum lorem
                    sit amet interdum fermentum. Vivamus et pellentesque eros. Pellentesque ac odio
                    a tellus finibus tincidunt. Proin consectetur aliquet eleifend. Aenean et urna
                    lectus. Phasellus luctus arcu vitae metus pretium posuere. Fusce nulla mi,
                    euismod sed libero nec, faucibus maximus leo.
                </p>

                <p>
                    Integer leo velit, lobortis ut diam eget, porttitor consequat velit. Nullam
                    vitae porttitor dui. Donec a leo aliquet, porttitor mauris sed, consequat
                    libero. Nam dignissim urna ac risus mattis, ut pretium lacus tincidunt. Cras
                    cursus sed nisl eu mollis. Aenean vel nunc nisl. Donec pulvinar maximus velit,
                    id faucibus metus pretium sit amet. Vestibulum felis odio, rutrum eu consectetur
                    quis, sollicitudin sit amet erat.
                </p>
            </section>
            <section className="copy-and-image--right--dark">
                <h2>Copy and Image Left</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum lorem
                    sit amet interdum fermentum. Vivamus et pellentesque eros. Pellentesque ac odio
                    a tellus finibus tincidunt. Proin consectetur aliquet eleifend. Aenean et urna
                    lectus. Phasellus luctus arcu vitae metus pretium posuere. Fusce nulla mi,
                    euismod sed libero nec, faucibus maximus leo.
                </p>

                <p>
                    Integer leo velit, lobortis ut diam eget, porttitor consequat velit. Nullam
                    vitae porttitor dui. Donec a leo aliquet, porttitor mauris sed, consequat
                    libero. Nam dignissim urna ac risus mattis, ut pretium lacus tincidunt. Cras
                    cursus sed nisl eu mollis. Aenean vel nunc nisl. Donec pulvinar maximus velit,
                    id faucibus metus pretium sit amet. Vestibulum felis odio, rutrum eu consectetur
                    quis, sollicitudin sit amet erat.
                </p>
                <Image src="https://placekitten.com/720/720" alt="" width={720} height={720} />
            </section>
            <section className="person-and-bio--left--light">
                <h2>Person and Bio</h2>
                <Image src="https://placekitten.com/720/720" alt="" width={720} height={720} />
                <article>
                    <h3>Full Name</h3>
                    <ul className="pills">
                        <li>
                            <span>Pill One</span>
                        </li>
                        <li>
                            <span>Pill Two</span>
                        </li>
                        <li>
                            <span>Pill Three</span>
                        </li>
                    </ul>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum
                        lorem sit amet interdum fermentum. Vivamus et pellentesque eros.
                        Pellentesque ac odio a tellus finibus tincidunt. Proin consectetur aliquet
                        eleifend. Aenean et urna lectus. Phasellus luctus arcu vitae metus pretium
                        posuere. Fusce nulla mi, euismod sed libero nec, faucibus maximus leo.
                    </p>

                    <p>
                        Integer leo velit, lobortis ut diam eget, porttitor consequat velit. Nullam
                        vitae porttitor dui. Donec a leo aliquet, porttitor mauris sed, consequat
                        libero. Nam dignissim urna ac risus mattis, ut pretium lacus tincidunt. Cras
                        cursus sed nisl eu mollis. Aenean vel nunc nisl. Donec pulvinar maximus
                        velit, id faucibus metus pretium sit amet. Vestibulum felis odio, rutrum eu
                        consectetur quis, sollicitudin sit amet erat.
                    </p>
                </article>
            </section>
            <section className="person-and-bio--right--dark">
                <h2>Person and Bio</h2>
                <Image src="https://placekitten.com/720/720" alt="" width={720} height={720} />
                <article>
                    <h3>Full Name</h3>
                    <ul className="pills">
                        <li>
                            <span>Pill One</span>
                        </li>
                        <li>
                            <span>Pill Two</span>
                        </li>
                        <li>
                            <span>Pill Three</span>
                        </li>
                    </ul>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum
                        lorem sit amet interdum fermentum. Vivamus et pellentesque eros.
                        Pellentesque ac odio a tellus finibus tincidunt. Proin consectetur aliquet
                        eleifend. Aenean et urna lectus. Phasellus luctus arcu vitae metus pretium
                        posuere. Fusce nulla mi, euismod sed libero nec, faucibus maximus leo.
                    </p>

                    <p>
                        Integer leo velit, lobortis ut diam eget, porttitor consequat velit. Nullam
                        vitae porttitor dui. Donec a leo aliquet, porttitor mauris sed, consequat
                        libero. Nam dignissim urna ac risus mattis, ut pretium lacus tincidunt. Cras
                        cursus sed nisl eu mollis. Aenean vel nunc nisl. Donec pulvinar maximus
                        velit, id faucibus metus pretium sit amet. Vestibulum felis odio, rutrum eu
                        consectetur quis, sollicitudin sit amet erat.
                    </p>
                </article>
            </section>
            <section className="contact">
                <RichText />
                <aside>
                    <ContactForm />
                </aside>
            </section>
        </DefaultLayout>
    );
};

export default Page;
