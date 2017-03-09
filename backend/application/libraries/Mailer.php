<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

class Mailer {
    private $CI;
    function __construct() {
        $this->CI = &get_instance();
        $this->CI->load->library('email');
    }

    function send($email, $subject, $template, $data){
        $content = $this->CI->load->view($template, $data, true);
        $email_params = array('charset' => 'UTF-8', 'mailtype' => 'html');
        $this->CI->email->initialize($email_params);
        $this->CI->email->from($this->CI->config->item('auto_notification_email_from'),
            $this->CI->config->item('auto_notification_email_from_name'));
        $this->CI->email->to($email);
        $this->CI->email->subject($subject);
        $this->CI->email->message($content);
        return @$this->CI->email->send();
    }
}