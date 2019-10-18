import React from 'react';

import './contact.styles.scss';


class Contact extends React.Component {
    state = {
        email: '',
        message: ''
    }

    handleSubmit = async (e) => {

        this.setState({ email: '', message: '' })
        e.preventDefault();
    }
    handleChange = (e) => {
        e.persist()


        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="contacts" name="contact">
                <div className="container">
                    <div className="contact-inner">
                        <h1 className="title">Contact</h1>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label>Your Email</label>
                                <input className="input" type="email" name="email" onChange={this.handleChange} value={this.state.email} placeholder="Your email .." />
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea className="textarea" type="text" name="message" onChange={this.handleChange} value={this.state.message} placeholder="Your message .." />
                            </div>
                            <button className="btn" type="submit">Send</button>
                        </form>
                        <p className="note"><strong>Note:</strong> No backend yet. This from will never works. For design only.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;