import React, { Component } from 'react';

import { EmailProvider } from '../../services/email';
import './Comment.scss'

class Comment extends Component {
    constructor(props) {
        super(props);

        this.email = new EmailProvider();
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    onChange = (field) => (event) => {
        this.setState({ [field]: event.target.value })
    }

    clearForm = () => {
        this.setState({ name: '', email: '', message: '' });
    }

    submitForm = (e) => {
        e.preventDefault();

        console.log('Submitting user suggestion.');

        this.email.send(this.state)
            .then(response => {
                this.clearForm();
                this.toggleFooter()
            })
            .catch(error => console.log('Mail send error: ', error));
    }

    toggleFooter = () => {
        const footer = document.getElementById('my-footer-wrapper');

        footer.classList.add('collapsed');
    }

    render() {
        return (
            <section className="comment-form col-6 col-12-narrower">
                <form method="post">
                    <div className="row gtr-50">
                        <div className="col-6 col-12-mobile">
                            <input
                                onChange={this.onChange('name')}
                                name="name" 
                                placeholder="Name" 
                                value={this.state.name}
                                type="text" />
                        </div>
                        <div className="col-6 col-12-mobile">
                            <input
                                onChange={this.onChange('email')}
                                name="email" 
                                placeholder="Email" 
                                value={this.state.email}
                                type="text" />
                        </div>
                        <div className="col-12">
                            <textarea
                                onChange={this.onChange('message')} 
                                name="message" 
                                value={this.state.message}
                                placeholder="Message"></textarea>
                        </div>
                        <div className="col-12 buttons">
                            <ul className="actions">
                                <li>
                                    <button 
                                        onClick={this.submitForm}
                                        type="submit" 
                                        value="Send Message"
                                    >
                                        Send
                                    </button>
                                </li>
                                <li>
                                    <button 
                                        onClick={this.clearForm}
                                        type="reset" 
                                        value="Clear form"
                                    >
                                        Clear Form
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </form>
            </section>
        );
    }
}

export default Comment;