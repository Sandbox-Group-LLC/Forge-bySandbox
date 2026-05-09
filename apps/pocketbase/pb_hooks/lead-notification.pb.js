/// <reference path="../pb_data/types.d.ts" />
onRecordAfterCreateSuccess((e) => {
  const firstName = e.record.get("firstName");
  const lastName = e.record.get("lastName");
  const email = e.record.get("email");
  const company = e.record.get("company");
  const jobTitle = e.record.get("jobTitle");
  const companySize = e.record.get("companySize");
  const comments = e.record.get("comments") || "N/A";

  const message = new MailerMessage({
    from: {
      address: $app.settings().meta.senderAddress,
      name: $app.settings().meta.senderName
    },
    to: [{ address: "admin@makemysandbox.com" }],
    subject: "New Lead: " + firstName + " " + lastName + " from " + company,
    html: `
      <h2>New Lead Notification</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Job Title:</strong> ${jobTitle}</p>
      <p><strong>Company Size:</strong> ${companySize}</p>
      <p><strong>Comments:</strong> ${comments}</p>
      <p><strong>Lead ID:</strong> ${e.record.id}</p>
      <p><strong>Created:</strong> ${e.record.get("created")}</p>
    `
  });

  try {
    $app.newMailClient().send(message);
  } catch (error) {
    console.error("Failed to send lead notification email: " + error.message);
  }

  e.next();
}, "leads");