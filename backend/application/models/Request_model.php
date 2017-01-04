<?php
class Request_model extends Base_model {

    private $sql;
    
    public function __construct()
    {
        parent::__construct();
        // Добавить таблицу deputys
        $this->sql = 'SELECT t1.*, t2.userid, t2.firstname, t2.secondname, t2.lastname FROM request AS t1, users AS t2 WHERE t1.user_id = t2.userid';
    }    
    
    public function getrequests($id = FALSE)
    {
        if (!$id)
        {
            $result = $this->db->query($this->sql)->result_array();
            return $result;
        }
        $this->sql .= ' AND t1.requestid = ?';
        $result = $this->db->query($this->sql, array($id))->result_array();
        if (count($result) > 0)
        {
            return $result[0];
        }
        return null;
    }
    
    public function filter_by_class($class, $id)
    {
        $this->sql .= ' AND t1.' . $class . '_id = ?';
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
            return $this->db->insert('request', $post);
        }
        return $this->db->update('request', $post, array('requestid' => $id));
    }
}
?>