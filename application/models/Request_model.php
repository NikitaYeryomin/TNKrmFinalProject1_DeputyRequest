<?php
class Request_model extends Base_model {

    private $sql;
    
    public function __construct()
    {
        $this->sql = 'select requests.*, users.username FROM requests, users WHERE requests.user_id = users.userid';
    }    
    
    public function getrequests($id = FALSE)
    {
        if (!$id)
        {
            $result = $this->db->query($this->sql)->result_array();
            return $result;
        }
        else
        {
            $this->sql .= ' AND requests.requestid = ?';
            $result = $this->db->query($this->sql, array($id))->result_array();
            if (count($result) > 0)
                return $result[0];
            return null;
        }
    }
    
    public function filter_by_user($id)
    {
        $this->sql .= ' AND requests.user_id = ?';
        $result = $this->db->query($this->sql, array($id))->result_array();
        if (count($result) > 0)
        {
            return $result;
        }
        return null;
    }
    
    public function editrequest($id = FALSE)
    {
        $post = array(
            'title'     => $this->input->post('title'),
            'text'      => $this->input->post('text'),
            'user_id'   => $this->session->userdata('logged_in')['id']
        );
        if (!$id)
        {
            date_default_timezone_set('Europe/Kiev');
            $post['adddate'] = date("Y-m-d H:i:s");
            return $this->db->insert('requests', $post);
        }
        return $this->db->update('requests', $post, array('requestid' => $id));
    }
}
?>