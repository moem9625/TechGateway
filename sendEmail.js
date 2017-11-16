var Sendgrid = require('sendgrid')(
  process.env.SENDGRID_API_KEY || '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'
);

var request = Sendgrid.emptyRequest({
  method: 'POST',
  path: '/v3/mail/send',
  body: {
    personalizations: [{
      to: [{ email: 'my.email@gmail.com' }],
      subject: 'Sendgrid test email from Node.js'
    }],
    from: { email: 'noreply@email-app.firebaseapp.com' },
    content: [{
      type: 'text/plain',
      value: 'Hello Joe! Can you hear me Joe?.'
    }]
  }
});

Sendgrid.API(request, function (error, response) {
  if (error) {
    console.log('Mail not sent; see error message below.');
  } else {
    console.log('Mail sent successfully!');
  }
  console.log(response);
});