import React from 'react';

import './contact.styles.scss';


class Contact extends React.Component {
    state = {
        email: '',
        message: ''
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await fetch('http://localhost:5000/api/mail/', {
                mode: "no-cors",
                method: 'POST',
                body: JSON.stringify(this.state)
            })
            this.setState({ email: '', message: '' })
        } catch (e) {
            throw e;
        }
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
                                <input className="input" type="email" name="email" onChange={this.handleChange} value={this.state.email} />
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea className="textarea" type="text" name="message" onChange={this.handleChange} />
                            </div>
                            <button className="btn" type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;