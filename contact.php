<?php
// Update this email before publishing.
$to = 'bill.brandspring@gmail.com';
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { header('Location: index.html'); exit; }
if (!empty($_POST['company_website_confirm'] ?? '')) { http_response_code(200); exit('Thanks.'); }
function clean($v){ return trim(str_replace(["\r","\n"], ' ', $v ?? '')); }
$name = clean($_POST['name'] ?? '');
$business = clean($_POST['business'] ?? '');
$email = filter_var($_POST['email'] ?? '', FILTER_SANITIZE_EMAIL);
$phone = clean($_POST['phone'] ?? '');
$website = clean($_POST['website'] ?? '');
$service = clean($_POST['service'] ?? '');
$message = trim($_POST['message'] ?? '');
$marketingConsent = (($_POST['marketing_consent'] ?? '') === 'yes') ? 'Yes' : 'No';
$allowedServices = ['Social Media Management','Content Creation','Paid Social Advertising','Website Design','SEO','Branding','Full Digital Marketing','Not Sure Yet'];
if (strlen($message) > 5000) { http_response_code(400); exit('Message is too long.'); }
if (!$name || !filter_var($email, FILTER_VALIDATE_EMAIL)) { http_response_code(400); exit('Please enter a valid name and email.'); }
if (!in_array($service, $allowedServices, true)) { http_response_code(400); exit('Please choose a valid service.'); }
if (!$message) { http_response_code(400); exit('Please tell us a little about your business.'); }
$subject = "Brand Spring website inquiry from $name";
$body = "Name: $name\nBusiness: $business\nEmail: $email\nPhone: $phone\nWebsite/Social: $website\nService: $service\nMarketing consent: $marketingConsent\n\nMessage:\n$message\n";
$headers = "From: Brand Spring Website <no-reply@brandspring.ca>\r\nReply-To: $email\r\n";
$sent = mail($to, $subject, $body, $headers);
if ($sent) { header('Location: thank-you.html', true, 303); exit; }
else { http_response_code(500); echo 'Message could not be sent. Please call 705-795-7147.'; }
?>
