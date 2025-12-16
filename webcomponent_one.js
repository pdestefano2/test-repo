//////////////////////////////////////////////////////
// Define the API Key Registration form  Web Component
//////////////////////////////////////////////////////
class APIKeyForm extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
      <div class="outer-card">
          <form id="keyForm">
                <input type="hidden" name="form" value="readme-general-api-key-form">
                <slot name=title><h2>API Key Request</h2></slot>
                <p>Thank you for your interest in EBSCO Knowledge Services. HoldingsIQ allows EBSCO Knowledge Base data, holdings data and HLM services to be integrated with your other systems. HoldingsIQ can be utilized with FOLIO and can also be integrated with other commercial library automation system partners to allow subscribing customers to access their holdings and EBSCO Knowledge Base data.</p>Access to HoldingsIQ requires a subscription. Please reach out to your sales rep or contact EBSCO Support to learn more about what a HoldingsIQ subscription can do for your institution.<p>To request information about obtaining a production API key, please fill out the following form and an EBSCO representative will contact you within 5 business days with the information.</p>Please note that your production API key to access HoldingsIQ will not give you access to our sandbox. You will need a sandbox API key to gain access to the sandbox. If you require a sandbox API key, please contact EBSCO customer support</p>
                <fieldset>
                    <label for="organization">Requesting Organization/Group Name *</label>
                    <input type="text" id="organization" name="organization" required>

                    <label for="libraryname">Library Name *</label>
                    <input type="text" id="libraryname" name="libraryName" required>

                    <label for="librarystreetaddress">Library Street Address *</label>
                    <input type="text" id="librarystreetaddress" name="libraryStreetAddress" required>
                    
                    <label for="librarycity">Library City *</label>
                    <input type="text" id="librarycity" name="libraryCity" required>

                    <label for="librarystate">Library State/Province *</label>
                    <input type="text" id="librarystate" name="libraryState" required>

                    <label for="libraryebscocustomerid">Library EBSCO Customer ID *</label>
                    <input type="text" id="libraryebscocustomerid" name="libraryEBSCOCustomerId">

                    <label for="libraryzipcode">Library Zip/Postal Code *</label>
                    <input type="text" id="libraryzipcode" name="libraryZipCode" required>
 
                    <label for="librarycountry">Library Country *</label>
                    <input type="text" id="librarycountry" name="libraryCountry">

                    <label for="libraryphone">Library Phone *</label>
                    <input type="text" id="libraryphone" name="libraryPhone" required>

                    <label for="librarycontactemail">Library Contact Email *</label>
                    <input type="text" id="librarycontactemail" name="libraryContactEmail">
                    
                    <label for="librarycontactfirstname">Library Contact First Name *</label>
                    <input type="text" id="librarycontactfirstname" name="libraryContactFirstName">

                    <label for="librarycontactlastname">Library Contact Last Name *</label>
                    <input type="text" id="librarycontactlastname" name="libraryContactLastName" required>

                    <label for="requesterfirstname">Requester First Name *</label>
                    <input type="text" id="requesterfirstname" name="requesterFirstName" required>
                    
                    <label for="requesterlastname">Requester Last Name *</label>
                    <input type="text" id="requesterlastname" name="requesterLastName" required>
                    
                    <label for="requesterjobtitle">Requester Job Title *</label>
                    <input type="text" id="requesterjobtitle" name="requesterJobTitle" required>
                    
                    <label for="requesteremail">Requester Email *</label>
                    <input type="text" id="requesteremail" name="requesterEmail" required>
                    
                    <label for="ilssystem">ILS System *</label>
                    <input type="text" id="ilssystem" name="ilsSystem" required>
                    
                    <label for="ermsystem">ERM System *</label>
                    <input type="text" id="ermsystem" name="ermSystem" required>
                    
                    <label for="infotorequester">Should Information Be Sent to the Requester? This question determines the email where an EBSCO representative will reach out to cover specific product details. If you select "NO", the information will be sent to the Library Contact Email. If you select "OTHER", please add an additional email address to receive the information in the Comments field below. *</label>
                    <select id="infotorequester" name="infoToRequester" required>
                        <option value="Yes" selected>YES</option>
                        <option value="No">NO</option>
                        <option value="Other">OTHER (See note above)</option>
                    </select>

                    <label for="comments">Comments</label>
                    <input type="text" id="comments" name="comments">
                </fieldset>
            <slot name="additional-inputs"></slot>
            <button type="submit">Submit</button>
            <div class="message" id="message"></div>
         </form>
      </div><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>

            `
      let style = document.createElement('style');
      
      style.textContent = `
          #keyForm {
            display: flex;
            flex-direction: column;
            max-width: 700px;
            margin: 2rem auto;
            padding: 2rem;
            border-radius: 12px;
            background: #ffffff; /* white inner card */
            border: 1px solid #cbd5e0; /* soft gray-blue border */
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* soft drop shadow */
            font-family: "Segoe UI", sans-serif;
            box-sizing: border-box;
          }

          /* Outer card background container*/
          .outer-card {
            /* background-color: #e4ecf3; */ 
            background-color: rgb(213, 225, 235);
            padding: .005rem 2rem;
            border-radius: 8px;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
            margin: 0 auto;
            max-width: 715px;
         }

         /* Header bar inside the card */
         h2 {
            background-color: #ffffff;
            padding-bottom: 10px;
            font-size: 1.25rem;
            font-weight: bold;
            margin-bottom: 1.5rem;
            color: #384248;
            border-bottom: 2px solid #8f8585;
         }
     
         fieldset {
            border: none;
            margin-bottom: 2rem;
            padding: 0;
         }

         legend {
            font-weight: 600;
            font-size: 1.1rem;
            margin-bottom: 1rem;
            color: #333;
         }

         label {
            display: block;
            font-weight: 500;
            margin-bottom: 0.25rem;
            color: #333;
        }

        input,
        select {
            width: 100%;
            padding: 0.6rem;
            margin-bottom: 1rem;
            border: 1px solid #ccc;
            border-radius: 6px;
            font-size: 0.95rem;
            background: #fff;
            box-sizing: border-box;
        }

        .checkbox-container {
            display: flex;
            flex-direction: column;
            margin-bottom: 1rem;
        }

        .checkbox-container label {
            font-weight: 400;
            margin-bottom: 0.5rem;
            padding-left: 1.5rem;
            position: relative;
        }

        .checkbox-container input[type="checkbox"] {
            position: absolute;
            left: 0;
            top: 0.2rem;
        }

        button[type="submit"] {
            align-self: flex-start;
            padding: 0.6rem 1.2rem;
            background-color: #e3706c;
            color: #fff;
            border: none;
            border-radius: 8px;
            font-size: 1rem;
            cursor: pointer;
            transition: background-color 0.3s ease;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        button[type="submit"]:hover {
            background-color: #595454;
        }

        .message {
            margin-top: 1rem;
            font-weight: 500;
            color: #444;
        }

        .api-error-message {
            margin-top: 1rem;
            background: #fdecea;
            color: #e3706c;
            border: 1px solid #f5c2c0;
            border-radius: 6px;
            padding: 0.75rem 1rem;
            font-size: 0.95rem;
            line-height: 1.4;
        }

        .api-error-message strong {
            display: block;
            font-weight: 600;
            margin-bottom: 4px;
            color: #e3706c;
        }

        .api-error-message a {
            color: inherit;             /* same as the surrounding text */
            text-decoration: underline; 
            font-weight: 500;
        }

        .api-error-message a:hover {
            text-decoration: none;      /* subtle hover effect */
        }

        .thank-you-message {
            align-items: center;
            justify-content: center;
            background-color: rgb(213, 225, 235);
            border-radius: 10px;
            box-shadow: 0 0 25px 4px rgba(0, 0, 0, 0.08); 
            padding: 2em;
            margin: 1em auto;
            max-width: 400px;
        }

        /* Inner white box */
        .thank-you-message .inner-box {
            background: #fff;
            border-radius: 8px;
            box-shadow:
            inset 0 0 15px rgba(255, 255, 255, 0.7), /* soft inner white glow */
            0 2px 10px rgba(0, 0, 0, 0.05);           /* light shadow for depth */
            padding: 1.5em 2em;
            text-align: center;
        }

        .thank-you-message h2 {
            margin: .5em 4em .5em 4em;
            color: #2c3e50;
            border-bottom: 2px solid #d2cfcf;  /* brings back that gray line */
            box-shadow: none;
            background: none;
            padding-bottom: 17px;
        }

        .thank-you-message p {
            margin: 1em;;
            color: #2c3e50;
        }
   
        .thank-you-message a {
            color: inherit;
            text-decoration: underline;
        }
           
        @media (max-width: 600px) {
            #keyForm {
                padding: 1rem;
            }

            h2 {
                font-size: 1.1rem;
            }
            .outer-card {
                margin-left: 12px;
            }

            }
          `;
      this.shadowRoot.appendChild(style);
    }

    connectedCallback() {
        this.postUrl = "https://developer.ebsco.com/apiconfig/v1/keyrequest";
        this.shadowRoot.querySelector('#keyForm').addEventListener('submit', this.handleSubmit.bind(this));
    }

    handleSubmit(event) {
        event.preventDefault();
        const keyForm = this.shadowRoot.querySelector('#keyForm');
        const formData = new URLSearchParams(new FormData(keyForm));
      
        // Log form data
        const dataObj = {};
        for (const [key, value] of formData.entries()) {
            dataObj[key] = value;
        }  

        fetch(this.postUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'x-eis-id-token': this.getAttribute('x-eis-id-token') || '',
              'x-api-key': 'ke6EsUbTXdOGiBjRpVBy',
              'Authorization':  this.getAttribute('authorization') || ''
            },
            body: formData
        })
        .then(async (response) => {
            console.log('Response status:', response.status);
          
            if (response.ok) {
              // Clear everything inside the component and show just the Thank You message
              const shadow = this.shadowRoot;

              // Keep <style> tags so styles remain active
              Array.from(shadow.childNodes).forEach(node => {
                 const isStyle = node.nodeName?.toLowerCase() === 'style';
                  if (!isStyle) shadow.removeChild(node);
              });

              // Create Thank You message
              const msg = document.createElement('div');
              msg.className = 'thank-you-message';
              msg.innerHTML = `
                 <div class="inner-box">
                 <h2>Thank You!</h2>
                 <p>Your submission has been received.</p>
                 </div>
                 `;

              shadow.appendChild(msg);     
              return;
           }
          
           console.log('Response not ok:', response.status);
           const text = await response.text().catch(() => "");
           const err = new Error(`POST ${response.status} ${response.statusText}: ${text.slice(0, 200)}`);
           err.status = response.status;
           err.statusText = response.statusText;
           throw err;

        })
        .catch(err => {
          console.error("API Key form error:", err);
          let statusMsg;

          if (err.status === 401) {
             statusMsg = "You are unauthorized. Please <a href=\"https://developer.ebsco.com/user/login\" target=\"_blank\" rel=\"noopener\">sign in</a> to the EBSCO Developer portal or <a href=\"https://developer.ebsco.com/user/login\" target=\"_blank\" rel=\"noopener\">register</a> to create an account and try again.";
          } else if (err.status === 403) {
             statusMsg = "Your email address is not verified. Please <a href=\"https://developer.ebsco.com/user/login\" target=\"_blank\" rel=\"noopener\">verify your email address</a> and try again.";
          } else if (err.status === 502) {
             statusMsg = "Bad Gateway. Please try again later.";
          } else if (typeof err.status === 'number') {
             statusMsg = `Error ${err.status}${err.statusText ? `: ${err.statusText}` : ""}`;
          } else if (err.name === 'TypeError') {
            // Real network failure (this is where CORS typically lands)
             statusMsg = "Network error (possibly CORS). Please try again later.";
          } else {
             statusMsg = "An error occurred.";
         }
        
         if (!keyForm) return;

         // Remove any existing error message
         keyForm.querySelectorAll(".api-error-message").forEach(el => el.remove());

         // Create the styled inline message element
         const msgBox = document.createElement("div");
         msgBox.className = "api-error-message";
         msgBox.innerHTML = `
           <strong>Unable to Submit Form</strong> ${statusMsg}
        `;

         // Insert the message right after the submit button
         const submitButton = keyForm.querySelector("button[type='submit']");
         if (submitButton) {
            submitButton.insertAdjacentElement("afterend", msgBox);
         } else {
            keyForm.appendChild(msgBox);
         }
        });
    }
}

customElements.define('api-key-request-form', APIKeyForm);

// Swap the placeholder div with the web component
function createAPIKeyRequestForm() {
    const apiKeyForm = document.createElement('api-key-request-form');

 // pass headers as attributes (safe even if empty)
  if (window._auth) {
    apiKeyForm.setAttribute('x-eis-id-token', window._auth.idToken || '');
    apiKeyForm.setAttribute('authorization', window._auth.authorization || '');
    console.log('Set auth attributes');
  }   
    
    const placeholder = document.querySelector('#api-key-request-form-placeholder');
    placeholder.replaceWith(apiKeyForm);
}

// Only add the form to a specific page
document.addEventListener("DOMContentLoaded", function () {
    $(window).on('pageLoad', function(e, state) {

        if (location.pathname.includes('/request-api-key-information')) {

          (function() {
              // Get the script element with id 'hub-me'
              const scriptElement = document.getElementById('hub-me');
        
              // Get the 'data-json' attribute value as a string
              const jsonString = scriptElement.getAttribute('data-json');
         
              // Parse the JSON string into a JavaScript object
              const userJSON = JSON.parse(jsonString);
        
              //     console.log(userJSON.user);

              // save the auth bits for later
              const u = userJSON.user || {};
              window._auth = {
                  idToken:       u['x-eis-id-token'] ?? u.id_token ?? '',
                  authorization: u.Authorization ?? u.authorization ?? (u.access_token ? `Bearer ${u.access_token}` : '')
              };
            })();

            setTimeout(createAPIKeyRequestForm, 200);
          }
    })
});

// end api key form page js
