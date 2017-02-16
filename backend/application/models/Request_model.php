<?php
class Request_model extends Base_model {

    private $sql;
    
    public function __construct() {
        parent::__construct();
        $this->sql = 'SELECT request.*, user.userid, user.firstname, user.secondname, user.lastname, deputies.name, deputies.patronymic, deputies.surname
                    FROM request
                    JOIN user ON user.userid = request.user_id
                    JOIN deputies ON deputies.id = request.deputy_id';
    }    
    
    public function getrequests($id = FALSE) {
        if (!$id) {
            $result = $this->db->query($this->sql)->result_array();
            return $result;
        }
        $this->sql .= 'WHERE request.requestid = ?';
        $result = $this->db->query($this->sql, array($id))->result_array();
        if (count($result) > 0) {
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
    
    public function editrequest($id = FALSE, $post) {
        if (!$id) {
            return $this->db->insert('request', $post);
        }
        return $this->db->update('request', $post, array('requestid' => $id));
    }
}
?>