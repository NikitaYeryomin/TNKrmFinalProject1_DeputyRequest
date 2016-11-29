<?php
class Request_model extends Base_model {

    private $sql;
    
    public function __construct()
    {
        parent::__construct();
        $this->sql = 'select requests.*, users.username FROM requests, users WHERE requests.user_id = users.userid';
    }    
    
    public function getrequests($id = FALSE)
    {
        if (!$id)
        {
            $result = $this->db->query($this->sql)->result_array();
            return $result;
        }
        $this->sql .= ' AND requests.requestid = ?';
        $result = $this->db->query($this->sql, array($id))->result_array();
        if (count($result) > 0)
        {
            return $result[0];
        }
        return null;
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
    
    public function editrequest($id = FALSE, $post)
    {
        if (!$id)
        {
            return $this->db->insert('requests', $post);
        }
        return $this->db->update('requests', $post, array('requestid' => $id));
    }
}
?>