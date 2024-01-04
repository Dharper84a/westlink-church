const ContactForm = () => {
    return (
        <form noValidate>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="Email Address" />
            </div>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" placeholder="Name" />
            </div>
            <div>
                <label htmlFor="comment">Comment</label>
                <textarea
                    name="comment"
                    id="comment"
                    placeholder="What would you like to talk about?"
                />
            </div>
            <div>
                <input type="submit" value="Send" />
            </div>
        </form>
    );
};

export default ContactForm;
