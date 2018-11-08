import React, { Component } from 'react';
import Loader from 'react-loaders';

import { EmailProvider } from '../../services/email';
import './Comment.scss'

class Comment extends Component {
    constructor(props) {
        super(props);

        this.email = new EmailProvider();
        this.state = {
            name: '',
            email: '',
            message: '',
            loading: false,
            success: null,
            error: null,
            inProgress: false
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

        this.toggleBlur();
        this.setState({ inProgress: true });

        this.email.send(this.state)
            .then(response => {
                this.toggleBlur();

                if (response.status === 200) {
                    this.clearForm();
                    this.setState({ success: true, inProgress: false });

                    setInterval(() => { this.setState({ success: null })}, 3000);
                } else {
                    this.setState({ error: true, inProgress: false });

                    setInterval(() => { this.setState({ error: null })}, 3000);
                }
            })
            .catch(error => console.log('Mail send error: ', error));
    }

    toggleBlur = () => {
        const commentArea = document.querySelector('form');

        if (commentArea.classList.contains('blur')) {
            commentArea.classList.remove('blur');
        } else {
            commentArea.classList.add('blur');
        }
    }

    render() {
        const {success, error, inProgress} = this.state;

        return (
            <section className="comment-form col-6 col-12-narrower">
                {inProgress && <Loader type='line-scale-pulse-out' active /> }
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
                <div className='status'>
                    {success    && <div className='send-success'>Thank you for contacting us!</div>}
                    {error      && <div className='send-error'>An error occurred while sending. Please re-send.</div>}
                </div>
            </section>
        );
    }
}

export default Comment;