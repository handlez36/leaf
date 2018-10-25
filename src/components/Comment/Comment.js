import React, { Component } from 'react';
import './Comment.scss'

class Comment extends Component {
    state = {
        name: '',
        email: '',
        message: ''
    }

    onChange = (field) => (event) => {
        this.setState({ [field]: event.target.value })
    }

    clearForm = () => {
        this.setState({ name: '', email: '', message: '' });
    }

    submitForm = () => {
        console.log('Submitting user suggestion.');
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
                                type="text" />
                        </div>
                        <div className="col-6 col-12-mobile">
                            <input
                                onChange={this.onChange('email')}
                                name="email" 
                                placeholder="Email" 
                                type="text" />
                        </div>
                        <div className="col-12">
                            <textarea
                                onChange={this.onChange('message')} 
                                name="message" 
                                placeholder="Message"></textarea>
                        </div>
                        <div className="col-12">
                            <ul className="actions">
                                <li>
                                    <input 
                                        onClick={this.submitForm}
                                        type="submit" 
                                        value="Send Message" />
                                </li>
                                <li>
                                    <input 
                                        onClick={this.clearForm}
                                        type="reset" 
                                        value="Clear form" />
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