import { send } from 'emailjs-com';
import axios from 'axios';

export class EmailProvider {
  constructor() {
  
  }

  send(params) {
    const msg = {
      "from_name": params.name,
      "to_name": "Lekelvis",
      "from_email": params.email,
      "message_html": params.message
    }

    return send("zoho", "template_CSHN9waG_clone", msg, "user_6BkiHupcGe9ASCQ8Iqv8G")
  }
}